const postsData = require("../data/postsData.js");

module.exports = {
  getPost: function (id) {
    return postsData.getPost(id);
  },

  getPosts: function () {
    return postsData.getPosts();
  },

  savePost: function (post) {
    return postsData.savePost(post);
  },

  updatePost: function (id, post) {
    return postsData.updatePost(id, post);
  },

  deletePost: function (id) {
    return postsData.deletePost(id);
  },
};
