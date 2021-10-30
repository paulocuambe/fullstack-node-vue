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

const fromatedDate = (date) => {
  return new Date(date).toLocaleString();
};
</script>

<template>
  <section class="shadow-md border rounded p-4">
    <h2 class="uppercase font-bold text-2xl">{{ post.title }}</h2>
    <div class="mt-1 flex justify-between flex-wrap">
      <span>{{ fromatedDate(post.date) }}</span>
      <router-link :to="{ name: 'blog-post', params: { slug: post.slug } }" class="text-blue-700 hover:underline"
        >Read more</router-link
      >
    </div>
  </section>
</template>
