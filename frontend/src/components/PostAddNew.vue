<script setup>
import { reactive, ref } from "@vue/reactivity";

const form = reactive({
  title: "",
  content: "",
});

const errorMessage = ref("");

const addPost = () => {
  errorMessage.value = "";

  if (!form.title || !form.content) {
    console.count("Invalido");
    errorMessage.value = "Preencha todos campos";
  }
};
</script>

<template>
  <h2 class="text-2xl text-green-700">Add a new post</h2>
  <p>My blog</p>

  <form @submit.prevent="addPost">
    <div class="text-red-700" v-if="errorMessage">{{ errorMessage }}</div>
    <div>
      <label>Title*</label>
      <input class="border-2 border-gray-700" v-model="form.title" type="text" placeholder="How to rank 1 in Google" />
    </div>
    <div class="pt-4">
      <label>Content*</label>
      <textarea
        class="border-2 border-gray-700"
        placeholder="Escreva o seu blog aqui"
        v-model="form.content"
      ></textarea>
    </div>
    <button class="bg-green-800 text-white p-2 rounded">Adicionar</button>
  </form>
</template>
