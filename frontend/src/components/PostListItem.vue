<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
    validator(value) {
      return value.id && value.title && value.slug && value.content && value.date;
    },
  },
});
</script>

<template>
  <section class="shadow-md border rounded p-6">
    <h2 class="uppercase font-bold">{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <router-link :to="{ name: 'blog-post', params: { slug: post.slug } }" class="text-blue-600 hover:underline"
      >Ler mais</router-link
    >
  </section>
</template>
