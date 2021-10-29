<script setup>
import { reactive, ref } from "@vue/reactivity";

const form = reactive({
  title: "",
  content: "",
});

const errorMessage = ref("");
const successMessage = ref("");

const addPost = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  if (!form.title || !form.content) {
    errorMessage.value = "Preencha todos campos";
    return;
  }

  let response = await fetch("/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (response.status === 201) {
    successMessage.value = "Projecto adicionado com sucesso.";
    form.content = "";
    form.title = "";
  } else {
    errorMessage.value = await response.text();
  }
};
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Add a new post</h2>

    <form @submit.prevent="addPost">
      <div class="text-red-700" v-if="errorMessage">{{ errorMessage }}</div>
      <div class="text-green-700" v-if="successMessage">{{ successMessage }}</div>

      <div>
        <label class="block">Title*</label>
        <input
          class="border-2 border-gray-700 w-full p-2"
          v-model="form.title"
          type="text"
          placeholder="How to rank 1 in Google"
        />
      </div>

      <div class="pt-4">
        <label class="block">Content*</label>
        <textarea
          class="border-2 border-gray-700 w-full p-2"
          placeholder="Escreva o seu blog aqui"
          v-model="form.content"
        ></textarea>
      </div>

      <button type="submit" class="bg-green-800 text-white p-2 rounded">Adicionar</button>
    </form>
  </div>
</template>
