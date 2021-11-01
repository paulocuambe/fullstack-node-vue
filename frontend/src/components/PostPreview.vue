<script setup>
import marked from "marked";
defineProps({
  title: {
    type: String,
    default: "Hello Markdown",
  },
  content: {
    type: String,
    default: `Hello **everyone**.  ##Hello Paulo. ajsnas asjas.`,
  },
});
</script>

<template>
  <section class="h-full overflow-y-auto">
    <h2 class="font-bold text-4xl mt-4">{{ title }}</h2>
    <article v-html="marked(content)"></article>
  </section>
</template>
