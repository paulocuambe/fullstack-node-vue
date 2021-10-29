<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
    validator(value) {
      return value.id && value.title && value.content && value.date;
    },
  },
});
</script>

<template>
  <section class="shadow-md border rounded p-6">
    <h2 class="uppercase font-bold">{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <a class="text-blue-600 hover:underline" href="#">Ler mais</a>
  </section>
</template>
