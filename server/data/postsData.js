const database = require("../infra/database.js");

module.exports = {
  getPosts: function () {
    return database.query("select * from blog.post");
  },
};
