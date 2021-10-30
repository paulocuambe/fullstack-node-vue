const database = require("../infra/database.js");

module.exports = {
  getPosts: function () {
    return database.query("select * from blog.post order by date desc");
  },

  getPost: function (id) {
    return database.oneOrNone("select * from blog.post where id = $1", id);
  },

  getPostByTitle: function (title) {
    return database.oneOrNone("select * from blog.post where title = $1", title);
  },

  getPostBySlug: function (slug) {
    return database.oneOrNone("select * from blog.post where slug = $1", slug);
  },

  savePost: function (post) {
    return database.one("insert into blog.post (title, slug, content) values ($1, $2, $3) returning *", [
      post.title,
      post.slug,
      post.content,
    ]);
  },

  updatePost: function (id, post) {
    return database.none("update blog.post set title=$1, slug=$2, content=$3 where id = $4", [
      post.title,
      post.slug,
      post.content,
      id,
    ]);
  },

  deletePost: function (id) {
    return database.none("delete from blog.post where id = $1", id);
  },
};
