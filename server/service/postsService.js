const postsData = require("../data/postsData.js");

module.exports = {
  getPost: async function (id) {
    const post = await postsData.getPost(id);

    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }

    return post;
  },

  getPosts: function () {
    return postsData.getPosts();
  },

  savePost: function (post) {
    return postsData.savePost(post);
  },

  updatePost: async function (id, post) {
    await this.getPost(id);

    return postsData.updatePost(id, post);
  },

  deletePost: function (id) {
    return postsData.deletePost(id);
  },
};
