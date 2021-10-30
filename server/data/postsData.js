const database = require("../infra/database.js");

module.exports = {
  getPosts: function () {
    return database.query("select * from blog.post order by date desc");
  },

  getPost: function (id) {
    let query = "select * from blog.post where id = $1";

    if (isNaN(id)) {
      query = "select * from blog.post where slug = $1";
    }

    return database.oneOrNone(query, id);
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
    let query = "update blog.post set title=$1, slug=$2, content=$3 where id = $4";

    if (isNaN(id)) {
      query = "update blog.post set title=$1, slug=$2, content=$3 where slug = $4";
    }

    return database.none(query, [post.title, post.slug, post.content, id]);
  },

  deletePost: function (id) {
    let query = "delete from blog.post where id = $1";

    if (isNaN(id)) {
      query = "delete from blog.post where slug = $1";
    }

    return database.none(query, id);
  },
};
