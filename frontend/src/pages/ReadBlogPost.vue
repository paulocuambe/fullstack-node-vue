<script setup>
import { onBeforeMount, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import marked from "marked";

let post = ref({});
let isLoading = ref(true);
let errorMessage = ref("");

onBeforeMount(async () => {
  let response = await fetch(`/posts/${useRoute().params.slug}`);
  if (response.status !== 404) {
    post.value = await response.json();
  } else {
    errorMessage.value = "404 - Post not found.";
  }
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});

const fromatedDate = (date) => {
  return new Date(date).toLocaleString();
};
</script>

<template>
  <div class="container post-view my-10 mx-auto">
    <div v-if="isLoading">Loading post content 📝📝...</div>
    <h2 class="text-8xl text-center font-bold" v-else-if="errorMessage">{{ errorMessage }}</h2>
    <main v-else>
      <h1 class="text-8xl">{{ post.title }}</h1>
      <p class="mt-8 text-gray-500">
        Published on <span class="font-bold">{{ fromatedDate(post.date) }}</span>
      </p>
      <article class="mt-10" v-html="marked(post.content)"></article>
    </main>
  </div>
</template>

<style scoped>
.post-view {
  max-width: 960px;
}

article {
  font-size: 18px;
}
</style>
