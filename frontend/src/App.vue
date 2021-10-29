<script setup>
import { reactive } from "@vue/reactivity";
import PostAddNew from "./components/PostAddNew.vue";
import PostList from "./components/PostList.vue";

const posts = reactive([
  { id: 1, title: "Let's dive into Vue 2", content: "Some tricks about vue ## 2 - reactive and ref" },
  { id: 2, title: "An Introduction to Nuxt 3", content: "**Vue** is awesome" },
]);
</script>

<template>
  <h1>Hello there</h1>
  <post-add-new />
  <post-list :posts="posts" />
</template>

<style></style>
