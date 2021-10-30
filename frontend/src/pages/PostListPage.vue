<script setup>
import { ref } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
import PostList from "../components/PostList.vue";

const posts = ref([]);

const isLoading = ref(true);

const fetchPosts = async () => {
  isLoading.value = true;
  let response = await fetch("/posts");
  posts.value = await response.json();

  isLoading.value = false;
};

onBeforeMount(async () => {
  fetchPosts();
});
</script>

<template>
  <div class="my-10 container w-1/2 mx-auto">
    <p v-if="isLoading">Carregando...</p>
    <section v-else>
      <div class="flex w-full justify-end pb-2">
        <button @click="fetchPosts" class="place-self-end text-sm p-2 rounded text-white bg-gray-400">
          Recarregar
        </button>
      </div>
      <post-list :posts="posts" />
    </section>
  </div>
</template>
