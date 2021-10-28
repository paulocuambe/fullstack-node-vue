const postsData = require("../data/postsData.js");

module.exports = {
  getPosts: function () {
    return postsData.getPosts();
  },
};
