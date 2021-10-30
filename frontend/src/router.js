import { createRouter, createWebHistory } from "vue-router";
import PostCreatePage from "./pages/PostCreatePage.vue";
import PostListPage from "./pages/PostListPage.vue";

const routes = [
  { name: "posts.new", path: "/new", component: PostCreatePage },
  { name: "home", path: "/", component: PostListPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
