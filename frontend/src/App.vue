<script setup>
import { ref } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
import PostAddNew from "./components/PostAddNew.vue";
import PostList from "./components/PostList.vue";

const posts = ref([]);

const isLoading = ref(true);

onBeforeMount(async () => {
  let response = await fetch("/posts");
  posts.value = await response.json();

  isLoading.value = false;
});
</script>

<template>
  <main class="my-10">
    <div class="w-80 mx-auto">
      <post-add-new />
    </div>
    <div class="mt-10 container w-1/2 mx-auto">
      <p v-if="isLoading">Carregando...</p>
      <post-list v-else :posts="posts" />
    </div>
  </main>
</template>

<style></style>
