const database = require("../infra/database.js");

module.exports = {
  getPost: function (id) {
    return database.oneOrNone("select * from blog.post where id = $1", id);
  },

  getPosts: function () {
    return database.query("select * from blog.post");
  },

  savePost: function (post) {
    return database.one("insert into blog.post (title, content) values ($1, $2) returning *", [
      post.title,
      post.content,
    ]);
  },

  updatePost: function (id, post) {
    return database.none("update blog.post set title=$1, content=$2 where id = $3", [post.title, post.content, id]);
  },

  deletePost: function (id) {
    return database.none("delete from blog.post where id = $1", id);
  },
};
