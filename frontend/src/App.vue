<script setup>
import { reactive } from "@vue/reactivity";
import PostAddNew from "./components/PostAddNew.vue";
import PostList from "./components/PostList.vue";

const posts = reactive([
  { id: 1, title: "Let's dive into Vue 2", content: "Some tricks about vue ## 2 - reactive and ref", date: new Date() },
  { id: 2, title: "An Introduction to Nuxt 3", content: "**Vue** is awesome", date: new Date() },
]);
</script>

<template>
  <main class="my-10">
    <div class="w-80 mx-auto">
      <post-add-new />
    </div>
    <div class="mt-10 container mx-auto">
      <post-list :posts="posts" />
    </div>
  </main>
</template>

<style></style>
