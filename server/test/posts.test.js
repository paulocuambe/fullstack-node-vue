const crypto = require("crypto");
const axios = require("axios");
const slugify = require("slugify");
const postsService = require("../service/postsService.js");

const generate = function () {
  return crypto.randomBytes(20).toString("hex");
};

const request = function (url, method, data) {
  return axios({ url, method, data, validateStatus: false });
};

test("Should get posts", async function () {
  // given
  const post1 = await postsService.savePost({ title: generate(), content: generate() });
  const post2 = await postsService.savePost({ title: generate(), content: generate() });
  const post3 = await postsService.savePost({ title: generate(), content: generate() });

  // when
  const response = await request("http://localhost:3000/posts", "get");
  const posts = response.data;

  // then
  expect(response.status).toBe(200);
  expect(posts).toHaveLength(3);

  await postsService.deletePost(post1.id);
  await postsService.deletePost(post2.id);
  await postsService.deletePost(post3.id);
});

test("Should get post by id", async function () {
  // given
  const post = await postsService.savePost({ title: generate(), content: generate() });

  // when
  const response = await request(`http://localhost:3000/posts/${post.id}`, "get");
  const result = response.data;

  // then
  expect(response.status).toBe(200);
  expect(result).not.toBeNull();

  await postsService.deletePost(post.id);
});

test("Should get post by slug", async function () {
  // given
  const title = generate();
  const post = await postsService.savePost({ title, content: generate() });

  // when
  const response = await request(`http://localhost:3000/posts/${slugify(title)}`, "get");
  const result = response.data;
  console.log(result);

  // then
  expect(response.status).toBe(200);
  expect(result).not.toBeNull();

  await postsService.deletePost(post.id);
});

test("Should save post", async function () {
  // given
  const data = { title: generate(), content: generate() };

  // when
  const response = await request("http://localhost:3000/posts", "post", data);

  const post = response.data;

  // then
  expect(response.status).toBe(201);
  expect(post.title).toBe(data.title);
  expect(post.slug).toBe(slugify(data.title));
  expect(post.content).toBe(data.content);

  await postsService.deletePost(post.id);
});

test("Should not save post when the title has already been taken", async function () {
  // given
  const data = { title: generate(), content: generate() };

  // when
  const response = await request("http://localhost:3000/posts", "post", data);
  const response2 = await request("http://localhost:3000/posts", "post", data);

  const post = response.data;

  // then
  expect(response2.status).toBe(409);

  await postsService.deletePost(post.id);
});

test("Should update post", async function () {
  // given
  const post = await postsService.savePost({ title: generate(), slug: generate(), content: generate() });
  post.title = generate();
  post.content = "iupdate";

  // when
  const response = await request(`http://localhost:3000/posts/${post.id}`, "put", post);
  const updatedPost = await postsService.getPost(post.id);

  // then
  expect(response.status).toBe(204);
  expect(updatedPost.content).toBe(post.content);
  expect(updatedPost.slug).toBe(post.slug);
  expect(updatedPost.title).toBe(post.title);

  await postsService.deletePost(updatedPost.id);
});

test("Should not update post", async function () {
  // given
  const post = { id: 1 };

  // when
  const response = await request(`http://localhost:3000/posts/${post.id}`, "put", post);

  // then
  expect(response.status).toBe(404);
});

test("Should delete post", async function () {
  // given
  const post = await postsService.savePost({ title: generate(), slug: generate(), content: generate() });

  // when
  const response = await request(`http://localhost:3000/posts/${post.id}`, "delete");
  const posts = await postsService.getPosts();

  // then
  expect(response.status).toBe(204);
  expect(posts).toHaveLength(0);
});
