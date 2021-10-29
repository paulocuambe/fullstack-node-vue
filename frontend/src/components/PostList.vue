<script setup>
const props = defineProps({
  posts: {
    type: Array,
    require: false,
    default: () => [],
  },
});
</script>

<template>
  <h1>Todos os Posts</h1>
  <h2 v-if="posts.length == 0">Nenhum post ainda</h2>
  <ul v-else>
    <li class="shadow-md border rounded p-6 m-12" v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </li>
  </ul>
</template>
