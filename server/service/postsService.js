const postsData = require("../data/postsData.js");

module.exports = {
  getPost: async function (id) {
    const post = await postsData.getPost(id);

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  },

  getPosts: function () {
    return postsData.getPosts();
  },

  savePost: async function (post) {
    if (Object.keys(post).length === 0) throw new Error("Validation errors");

    if (!post.title || !post.content) throw new Error("Validation errors");

    const existingPost = await postsData.getPostByTitle(post.title);

    if (existingPost) throw new Error("Post already exists");

    return postsData.savePost(post);
  },

  updatePost: async function (id, post) {
    if (Object.keys(post).length === 0) throw new Error("Validation errors");

    await this.getPost(id);

    return postsData.updatePost(id, post);
  },

  deletePost: function (id) {
    return postsData.deletePost(id);
  },
};
