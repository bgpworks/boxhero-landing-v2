const path = require("path");

// Constants

const PER_PAGE = 9;

// Components

const PostPage = path.resolve("src/templates/PostView.jsx");
const PostListPage = path.resolve("src/templates/PostList.jsx");

// Path generators

const genBlogHomePath = (localeCode) => `/${localeCode}/blog`;
const genPostListPath = (localeCode, pageIndex) =>
  `/${localeCode}/blog/pages/${pageIndex}`;
const genPostPath = (localeCode, slug) => `/${localeCode}/blog/posts/${slug}`;

// createPages

const createPostPages = (actions, locale, postsEdges) => {
  const { createPage } = actions;

  postsEdges.forEach((edge, index) => {
    const nextID = index + 1 < postsEdges.length && index + 1;
    const prevID = index - 1 >= 0 && index - 1;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];

    createPage({
      path: genPostPath(locale, edge.node.slug),
      component: PostPage,
      context: {
        locale,
        currentPostId: edge.node.id,
        prevPostId: prevEdge && prevEdge.node.id,
        nextPostId: nextEdge && nextEdge.node.id,
      },
    });
  });
};

const createPostListPage = (actions, locale, postsEdges) => {
  const { createPage } = actions;
  const pageCount = Math.ceil(postsEdges.length / PER_PAGE);
  const postIds = postsEdges.map(({ node }) => node.id);

  for (let page = 0; page < pageCount; page++) {
    const startIndex = page * PER_PAGE;
    const endIndex = Math.min(startIndex + PER_PAGE, postsEdges.length);
    const postIdsInPage = postIds.slice(startIndex, endIndex);
    const pageContext = {
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
      path: genPostListPath(locale, page),
      component: PostListPage,
      context: pageContext,
    });
  }
};

const getLocaleCodes = (postsEdges) => {
  const valueSet = new Set();
  postsEdges.forEach((edge) => valueSet.add(edge.node.locale.code));

  return [...valueSet];
};

const createPagesByLocale = (actions, locale, postsEdges) => {
  const filteredEdges = postsEdges.filter(
    (edge) => edge.node.locale.code === locale
  );

  createPostPages(actions, locale, filteredEdges);
  createPostListPage(actions, locale, filteredEdges);
};

// createPages

exports.createPagesForBlog = async ({ graphql, actions }) => {
  const queryResult = await graphql(
    `
      {
        allStrapiPost(
          sort: {
            fields: [date, title],
            order: [DESC, DESC]
          }
        ) {
          edges {
            node {
              id
              title
              category {
                name
              }
              slug
              locale
              date
              description
              thumbnail {
                url
              }
            }
          }
        }
      }
    `
  );

  if (queryResult.errors) {
    throw queryResult.errors;
  }

  const edges = queryResult.data.allStrapiPost.edges;
  const postsEdges = edges.filter((edge) => edge.node);
  const locales = getLocaleCodes(postsEdges);

  for (const locale of locales) {
    createPagesByLocale(actions, locale, postsEdges);
  }
};
