const {
  onCreateNodeForBlog,
  createPagesForBlog,
} = require("./gatsby-md-blog-helper");

module.exports.onCreateNode = (options) => {
  try {
    onCreateNodeForBlog(options);
  } catch (err) {
    throw err;
  }
};
exports.createPages = async (options) => {
  try {
    await createPagesForBlog(options);
  } catch (err) {
    throw err;
  }
};
