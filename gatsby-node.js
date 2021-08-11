const {
  onCreateNodeForBlog,
  createPagesForBlog,
} = require("./gatsby-md-blog-helper");

module.exports.onCreateNode = (options) => {
  onCreateNodeForBlog(options);
};
exports.createPages = async (options) => {
  try {
    await createPagesForBlog(options);
  } catch (err) {
    throw err;
  }
};
