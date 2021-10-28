const express = require("express");
const app = express();

app.use(express.json());
app.use("/", require("./route/postsRoute.js"));

app.listen(3000);
