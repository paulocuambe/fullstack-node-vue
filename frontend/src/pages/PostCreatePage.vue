<script setup>
import PostCreate from "../components/PostCreate.vue";
import PostPreview from "../components/PostPreview.vue";
</script>

<template>
  <main class="md:flex justify-between gap-4 m-6">
    <div class="w-full md:w-1/2">
      <post-create />
    </div>
    <div class="w-full md:w-1/2">
      <post-preview />
    </div>
  </main>
</template>

<style scoped>
main {
  height: 90vh;
}
</style>
