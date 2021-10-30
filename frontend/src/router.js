import { createRouter, createWebHistory } from "vue-router";
import PostCreatePage from "./pages/PostCreatePage.vue";
import PostListPage from "./pages/PostListPage.vue";
import ReadBlogPost from "./pages/ReadBlogPost.vue";

const routes = [
  { name: "new", path: "/new", component: PostCreatePage },
  { name: "home", path: "/", component: PostListPage },
  { name: "blog-post", path: "/blog/:slug", component: ReadBlogPost },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
