const express = require("express");
const app = express();

const PORT = process.argv[2] || 3000;

app.use(express.json());
app.use("/", require("./route/postsRoute.js"));

app.use(function (error, req, res, next) {
  console.log("\n" + error.message);
  if (error.message === "Post already exists") {
    return res.status(409).send(error.message);
  }

  if (error.message === "Post not found") {
    return res.status(404).send(error.message);
  }

  if (error.message === "Validation errors") {
    return res.status(422).send(error.message);
  }

  res.status(500).send(error.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
