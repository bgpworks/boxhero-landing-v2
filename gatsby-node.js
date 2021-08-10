const path = require("path");
const { parse, isValid, isBefore } = require("date-fns");
const slugify = require("slugify");

// Constants

const PER_PAGE = 5;
const DATE_FORMAT = "yyyy-MM-dd HH:mm";
const SLUGIFY_COMMON_OPTION = { lower: true, trim: true };
const REGEX_SPACES = /\s+/g;
const REGEX_NOT_ALLOWED_IN_KOREAN_SLUG = /[^가-힣a-z\d\s\.\-]/gi;
const REQUIRED_FRONTMATTER_FIELD_NAMES = [
  "title",
  "date",
  "category",
  "email",
  "description",
];

// Components

const PostPage = path.resolve("src/templates/PostView.jsx");
const PostListPage = path.resolve("src/templates/PostList.jsx");
const PostListByCategoryPage = path.resolve(
  "src/templates/PostListByCategory.jsx"
);

// Helper Functions for Node

const checkHasFiled = (node, fieldName) =>
  Object.prototype.hasOwnProperty.call(node, fieldName);

const checkIsMarkdownNode = (node) => node.internal.type === "MarkdownRemark";

// Path generators

const genPostListPath = (localeCode, pageIndex) =>
  `/${localeCode}/blog/pages/${pageIndex}`;
const genCategoryListPath = (localeCode, category, pageIndex) =>
  `/${localeCode}/blog/categories/${category}/${pageIndex}`;
const genPostPath = (localeCode, slug) => `/${localeCode}/blog/posts/${slug}`;

// Slugify

const genKoreanSlug = (baseName, delimeter = "-") => {
  const result = baseName
    .normalize()
    .replace(REGEX_NOT_ALLOWED_IN_KOREAN_SLUG, "")
    .trim()
    .replace(REGEX_SPACES, delimeter);

  if (!result)
    throw new Error(
      `The name cannot be slugified by the slugify module. ${baseName}`
    );

  return result;
};

const genSlugByBaseName = (baseName, locale) => {
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

const createLocaleField = (node, actions, getNode) => {
  const { createNodeField } = actions;
  const fileNode = getNode(node.parent);
  const parsedFilePath = path.parse(fileNode.relativePath);
  const loacleDirName = parsedFilePath.dir;

  createNodeField({ node, name: "locale", value: loacleDirName });
};

const createSlugField = (node, actions, getNode) => {
  const { createNodeField } = actions;

  if (checkHasFiled(node.frontmatter, "slug")) {
    createNodeField({ node, name: "slug", value: node.frontmatter.slug });
  } else {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    const slug = genSlugByBaseName(parsedFilePath.name, parsedFilePath.dir);

    createNodeField({ node, name: "slug", value: slug });
  }
};

const createCategorySlugField = (node, actions, getNode) => {
  const { createNodeField } = actions;

  if (checkHasFiled(node.frontmatter, "category")) {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    const slug = genSlugByBaseName(
      node.frontmatter.category,
      parsedFilePath.dir
    );

    createNodeField({ node, name: "categorySlug", value: slug });
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

const refineMarkdownNode = (node, actions, getNode) => {
  const { createNodeField } = actions;

  if (
    checkHasFiled(node, "frontmatter") &&
    validateFrontMatter(node.frontmatter)
  ) {
    createLocaleField(node, actions, getNode);
    createSlugField(node, actions, getNode);
    createDateField(node, actions);
    createCategorySlugField(node, actions, getNode);
  }
};

// onCreateNode

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  if (checkIsMarkdownNode(node)) {
    refineMarkdownNode(node, actions, getNode);
  }
};

// createPages

const sortPostsEdges = (postsEdges) => {
  const sortedPostEdges = [...postsEdges];

  return sortedPostEdges.sort((postA, postB) => {
    const dateA = new Date(postA.node.fields.date);
    const dateB = new Date(postB.node.fields.date);

    if (isBefore(dateB, dateA)) return 1;
    if (isBefore(dateA, dateB)) return -1;

    const titleA = new Date(postA.node.frontmatter.title);
    const titleB = new Date(postB.node.frontmatter.title);

    if (titleA > titleB) return 1;
    if (titleB > titleA) return -1;

    return 0;
  });
};

const createPostPages = (actions, locale, postsEdges) => {
  const { createPage } = actions;

  postsEdges.forEach((edge, index) => {
    const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];

    const currentPath = genPostPath(locale, edge.node.fields.slug);

    createPage({
      path: currentPath,
      component: PostPage,
      context: {
        locale,
        slug: edge.node.fields.slug,
        nextTitle: nextEdge.node.fields.title,
        nextSlug: nextEdge.node.fields.slug,
        prevTitle: prevEdge.node.fields.title,
        prevSlug: prevEdge.node.fields.slug,
      },
    });
  });
};

const createPostListPage = (actions, locale, postsEdges) => {
  const { createPage } = actions;
  const pageCount = Math.ceil(postsEdges.length / PER_PAGE);
  const postSlugs = postsEdges.map(({ node }) => node.fields.slug);

  for (let page = 0; page < pageCount; page++) {
    const listPath = genPostListPath(locale, page);
    const startIndex = page * PER_PAGE;
    const endIndex = Math.min(startIndex + PER_PAGE, postsEdges.length);
    const slugsInPage = postSlugs.slice(startIndex, endIndex);

    createPage({
      path: listPath,
      component: PostListPage,
      context: {
        locale,
        slugs: slugsInPage,
        pageIndex: page,
        lastPageIndex: pageCount - 1,
      },
    });
  }
};

const createPostListByCategoryPage = (
  actions,
  locale,
  categorySlug,
  postsEdges
) => {
  const { createPage } = actions;
  const pageCount = Math.ceil(postsEdges.length / PER_PAGE);
  const postSlugs = postsEdges.map(({ node }) => node.fields.slug);

  for (let page = 0; page < pageCount; page++) {
    const listPath = genCategoryListPath(locale, categorySlug, page);
    const startIndex = page * PER_PAGE;
    const endIndex = Math.min(startIndex + PER_PAGE, postsEdges.length);
    const slugsInPage = postSlugs.slice(startIndex, endIndex);

    createPage({
      path: listPath,
      component: PostListByCategoryPage,
      context: {
        locale,
        slugs: slugsInPage,
        categorySlug: categorySlug,
        pageIndex: page,
        lastPageIndex: pageCount - 1,
      },
    });
  }
};

const getFieldValues = (postsEdges, fieldName) => {
  const localeSet = new Set();
  postsEdges.forEach((edge) => localeSet.add(edge.node.fields[fieldName]));

  return [...localeSet];
};

const createPagesByLocale = (actions, locale, postsEdges) => {
  const categorySlugs = getFieldValues(postsEdges, "categorySlug");
  const filteredEdges = postsEdges.filter(
    (edge) => edge.node.fields.locale === locale
  );
  const sortedEdges = sortPostsEdges(filteredEdges);

  createPostPages(actions, locale, sortedEdges);
  createPostListPage(actions, locale, sortedEdges);

  categorySlugs.forEach((categorySlug) => {
    const categoryFilteredEdges = sortedEdges.filter(
      ({
        node: {
          fields: { categorySlug: categorySlugInNode },
        },
      }) => categorySlugInNode && categorySlugInNode === categorySlug
    );

    createPostListByCategoryPage(
      actions,
      locale,
      categorySlug,
      categoryFilteredEdges
    );
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const markdownQueryResult = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                categorySlug
                locale
                date
              }
              frontmatter {
                title
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

  const postsEdges = markdownQueryResult.data.allMarkdownRemark.edges;
  const locales = getFieldValues(postsEdges, "locale");

  for (const locale of locales) {
    createPagesByLocale(actions, locale, postsEdges);
  }
};
