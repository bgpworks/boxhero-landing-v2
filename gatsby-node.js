const {
  onCreateNodeForBlog,
  createPagesForBlog,
} = require("./gatsby-md-blog-helper");

module.exports.onCreateNode = onCreateNodeForBlog;
exports.createPages = createPagesForBlog;
