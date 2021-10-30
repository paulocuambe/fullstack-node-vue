<script setup>
import { computed, onBeforeMount, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
let post = ref({});

onBeforeMount(async () => {
  let response = await fetch(`/posts/${useRoute().params.slug}`);
  post.value = await response.json();
});

const fromatedDate = (date) => {
  return new Date(date).toLocaleString();
};
</script>

<template>
  <div class="container post-view my-10 mx-auto">
    <h1 class="text-8xl">{{ post.title }}</h1>
    <p class="mt-4 text-gray-500">
      Published on <span class="font-bold">{{ fromatedDate(post.date) }}</span>
    </p>
    <article class="mt-6">{{ post.content }}</article>
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
