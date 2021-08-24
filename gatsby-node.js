const {
  onCreateNodeForBlog,
  createPagesForBlog,
} = require("./gatsby-md-blog-helper");

exports.onCreateNode = onCreateNodeForBlog;
exports.createPages = createPagesForBlog;
