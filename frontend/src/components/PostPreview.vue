<script setup>
import { ref, computed } from "@vue/runtime-core";
import marked from "marked";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const previewTitle = computed(() => props.title || "Choose a title for your article");
const previewContent = computed(() => props.content || "Write something for your audience");
</script>

<template>
  <section class="h-full overflow-y-auto">
    <div>
      <h2 class="font-bold text-4xl">{{ previewTitle }}</h2>
      <article class="text-2xl mt-4" v-html="marked(previewContent)"></article>
    </div>
  </section>
</template>
