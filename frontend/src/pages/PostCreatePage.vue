<script setup>
import { reactive } from "@vue/reactivity";
import PostCreate from "../components/PostCreate.vue";
import PostPreview from "../components/PostPreview.vue";

const form = reactive({
  title: "",
  content: "",
});
</script>

<template>
  <main class="md:flex justify-between gap-4 m-6">
    <div class="w-full md:w-1/2">
      <post-create v-model:title="form.title" v-model:content="form.content" />
    </div>
    <div class="w-full md:w-1/2">
      <post-preview :title="form.title" :content="form.content" />
    </div>
  </main>
</template>

<style scoped>
main {
  height: 90vh;
}
</style>
