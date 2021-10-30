<script setup>
import PostListItem from "./PostListItem.vue";

const props = defineProps({
  posts: {
    type: Array,
    require: false,
    default: () => [],
  },
});
</script>

<template>
  <div class="mt-4">
    <section class="text-center border-2 border-dashed border-gray-700 p-10" v-if="posts.length == 0">
      <h2 class="text-4xl font-bold mb-2">No posts yet 🤗</h2>
      <router-link class="text-blue-700 hover:underline" :to="{ name: 'new' }">Write something here ✍</router-link>
    </section>
    <div v-else>
      <post-list-item class="mt-4" v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
