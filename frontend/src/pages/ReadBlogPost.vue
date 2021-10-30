<script setup>
import { onBeforeMount, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const slug = useRoute().params.slug;
let post = ref({});

onBeforeMount(async () => {
  let response = await fetch(`/posts/${slug}`);
  post.value = await response.json();
});
</script>

<template>
  <div class="container post-view my-10 mx-auto">
    <h1 class="text-6xl">{{ post.title }}</h1>
    <article class="mt-6">{{ post.content }}</article>
  </div>
</template>

<style scoped>
.post-view {
  max-width: 960px;
}
</style>
