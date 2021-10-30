const express = require("express");
const router = express.Router();
const postsService = require("../service/postsService.js");

router.get("/posts", async function (req, res, next) {
  try {
    const posts = await postsService.getPosts();
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

router.get("/posts/:id", async function (req, res, next) {
  try {
    const post = await postsService.getPost(req.params.id);
    res.json(post);
  } catch (error) {
    next(error);
  }
});

router.post("/posts", async function (req, res, next) {
  const post = req.body;
  try {
    const newPost = await postsService.savePost(post);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
});

router.put("/posts/:id", async function (req, res, next) {
  const post = req.body;
  try {
    await postsService.updatePost(req.params.id, post);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.delete("/posts/:id", async function (req, res, next) {
  try {
    await postsService.deletePost(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
