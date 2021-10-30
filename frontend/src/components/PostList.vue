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
  <div>
    <h2 v-if="posts.length == 0">Nenhum post ainda</h2>
    <div v-else>
      <post-list-item class="mt-4" v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
