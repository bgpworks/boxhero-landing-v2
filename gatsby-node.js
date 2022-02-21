const {
  onCreateNodeForBlog,
  createPagesForBlog,
} = require("./gatsby-blog-helper");

exports.onCreateNode = onCreateNodeForBlog;
exports.createPages = createPagesForBlog;
