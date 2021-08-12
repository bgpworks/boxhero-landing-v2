const path = require("path");
const { parse, isValid } = require("date-fns");
const slugify = require("slugify");

// Constants

const PER_PAGE = 9;
const DATE_FORMAT = "yyyy-MM-dd HH:mm";
const SLUGIFY_COMMON_OPTION = { lower: true, trim: true };
const REGEX_SPACES = /\s+/g;
const REGEX_NOT_ALLOWED_IN_KOREAN_SLUG = /[^가-힣a-z\d\s]/gi;
const REQUIRED_FRONTMATTER_FIELD_NAMES = [
  "title",
  "date",
  "category",
  "author",
  "description",
];
const CATEGORY_STYLE_MAP = [
  { backgroundColor: "#599fe0", color: "white" },
  { backgroundColor: "#51baa5", color: "white" },
  { backgroundColor: "#e57678", color: "white" },
  { backgroundColor: "#ea9b18", color: "white" },
  { backgroundColor: "#6e7fe8", color: "white" },
  { backgroundColor: "#75b534", color: "white" },
  { backgroundColor: "#d38457", color: "white" },
];

// Components

const PostPage = path.resolve("src/templates/PostView.jsx");
const PostListPage = path.resolve("src/templates/PostList.jsx");

// Helper Functions for Node

const checkHasFiled = (node, fieldName) =>
  Object.prototype.hasOwnProperty.call(node, fieldName);

const checkIsMarkdownNode = (node) => node.internal.type === "MarkdownRemark";

// Path generators

const genBlogHomePath = (localeCode) => `/${localeCode}/blog`;
const genPostListPath = (localeCode, pageIndex) =>
  `/${localeCode}/blog/pages/${pageIndex}`;
const genPostPath = (localeCode, slug) => `/${localeCode}/blog/posts/${slug}`;

// Slugify

const genKoreanSlug = (baseName, delimeter = "-") => {
  const result = baseName
    .normalize()
    .replace(REGEX_NOT_ALLOWED_IN_KOREAN_SLUG, "")
    .trim()
    .toLowerCase()
    .replace(REGEX_SPACES, delimeter);

  if (!result)
    throw new Error(
      `The name cannot be slugified by the slugify module. ${baseName}`
    );

  return result;
};

const genSlug = (baseName, locale) => {
  switch (locale) {
    case "ko":
      return genKoreanSlug(baseName);

    case "es":
      return slugify(baseName, { ...SLUGIFY_COMMON_OPTION, locale: "es" });

    default:
      return slugify(baseName, SLUGIFY_COMMON_OPTION);
  }
};

const validateFrontMatter = (frontmatter) => {
  REQUIRED_FRONTMATTER_FIELD_NAMES.forEach((fieldName) => {
    if (!checkHasFiled(frontmatter, fieldName)) {
      throw new Error(`${fieldName} field is required.`);
    }
  });

  return true;
};

const getLocaleCode = (getNode, node) => {
  const fileNode = getNode(node.parent);
  const parsedFilePath = path.parse(fileNode.relativePath);
  const dirs = parsedFilePath.dir;

  return dirs.split(path.sep)[0];
};

const createLocaleField = (node, actions, getNode) => {
  const { createNodeField } = actions;

  createNodeField({
    node,
    name: "locale",
    value: getLocaleCode(getNode, node),
  });
};

const createSlugField = (node, actions, getNode) => {
  const { createNodeField } = actions;

  if (checkHasFiled(node.frontmatter, "slug")) {
    createNodeField({ node, name: "slug", value: node.frontmatter.slug });
  } else {
    const localeCode = getLocaleCode(getNode, node);

    createNodeField({
      node,
      name: "slug",
      value: genSlug(node.frontmatter.title, localeCode),
    });
  }
};

const createDateField = (node, actions) => {
  const { createNodeField } = actions;

  if (checkHasFiled(node.frontmatter, "date")) {
    const date = parse(node.frontmatter.date, DATE_FORMAT, new Date());

    if (!isValid(date))
      throw new Error(
        `Invalid Date. Please check the date field in frontmatter : ${node.frontmatter.date}`
      );

    createNodeField({
      node,
      name: "date",
      value: date.toISOString(),
    });
  }
};

const createCustomFields = (node, actions, getNode) => {
  const { createNodeField } = actions;

  if (
    checkHasFiled(node, "frontmatter") &&
    validateFrontMatter(node.frontmatter)
  ) {
    createLocaleField(node, actions, getNode);
    createSlugField(node, actions, getNode);
    createDateField(node, actions);

    createNodeField({ node, name: "title", value: node.frontmatter.title });
    createNodeField({
      node,
      name: "category",
      value: node.frontmatter.category,
    });
  }
};

// createPages

const createPostPages = (actions, locale, commonPageContext, postsEdges) => {
  const { createPage } = actions;

  postsEdges.forEach((edge, index) => {
    const nextID = index + 1 < postsEdges.length && index + 1;
    const prevID = index - 1 >= 0 && index - 1;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];

    const currentPath = genPostPath(locale, edge.node.fields.slug);

    createPage({
      path: currentPath,
      component: PostPage,
      context: {
        ...commonPageContext,
        locale,
        currentPostId: edge.node.id,
        nextPostId: nextEdge && nextEdge.node.id,
        prevPostId: prevEdge && prevEdge.node.id,
      },
    });
  });
};

const createPostListPage = (actions, locale, commonPageContext, postsEdges) => {
  const { createPage } = actions;
  const pageCount = Math.ceil(postsEdges.length / PER_PAGE);
  const postIds = postsEdges.map(({ node }) => node.id);

  for (let page = 0; page < pageCount; page++) {
    const listPath = genPostListPath(locale, page);
    const startIndex = page * PER_PAGE;
    const endIndex = Math.min(startIndex + PER_PAGE, postsEdges.length);
    const postIdsInPage = postIds.slice(startIndex, endIndex);
    const pageContext = {
      ...commonPageContext,
      locale,
      ids: postIdsInPage,
      pageIndex: page,
      lastPageIndex: pageCount - 1,
    };

    if (page === 0) {
      createPage({
        path: genBlogHomePath(locale),
        component: PostListPage,
        context: pageContext,
      });
    }

    createPage({
      path: listPath,
      component: PostListPage,
      context: pageContext,
    });
  }
};

const getFieldValues = (postsEdges, fieldName) => {
  const valueSet = new Set();
  postsEdges.forEach((edge) => valueSet.add(edge.node.fields[fieldName]));

  return [...valueSet];
};

const createPagesByLocale = (
  actions,
  locale,
  commonPageContext,
  postsEdges
) => {
  const filteredEdges = postsEdges.filter(
    (edge) => edge.node.fields.locale === locale
  );

  createPostPages(actions, locale, commonPageContext, filteredEdges);
  createPostListPage(actions, locale, commonPageContext, filteredEdges);
};

// onCreateNode

exports.onCreateNodeForBlog = ({ node, actions, getNode }) => {
  if (checkIsMarkdownNode(node)) {
    try {
      createCustomFields(node, actions, getNode);
    } catch (err) {
      const fileNode = getNode(node.parent);
      err.message = `${err.message}\nFile: ${fileNode.relativePath}`;

      throw err;
    }
  }
};

// createPages

const genCommonPageContext = (postsEdges) => {
  const categories = getFieldValues(postsEdges, "category");
  const categoryStyleMap = categories.reduce((acc, category, idx) => {
    return {
      ...acc,
      [category]: CATEGORY_STYLE_MAP[idx % CATEGORY_STYLE_MAP.length],
    };
  }, {});

  return {
    categoryStyleMapSerialized: JSON.stringify(categoryStyleMap),
  };
};

exports.createPagesForBlog = async ({ graphql, actions }) => {
  const markdownQueryResult = await graphql(
    `
      {
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___title, frontmatter___date]
            order: [DESC, DESC]
          }
        ) {
          edges {
            node {
              id
              fields {
                title
                category
                slug
                locale
                date
              }
            }
          }
        }
      }
    `
  );

  if (markdownQueryResult.errors) {
    throw markdownQueryResult.errors;
  }

  const edges = markdownQueryResult.data.allMarkdownRemark.edges;
  const postsEdges = edges.filter((edge) => edge.node.fields);
  const locales = getFieldValues(postsEdges, "locale");
  const commonPageContext = genCommonPageContext(postsEdges);

  for (const locale of locales) {
    createPagesByLocale(actions, locale, commonPageContext, postsEdges);
  }
};
