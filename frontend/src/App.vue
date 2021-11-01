<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <the-header class="flex-grow-0"></the-header>
    <router-view class="flex-auto"></router-view>
  </div>
</template>

<style></style>
