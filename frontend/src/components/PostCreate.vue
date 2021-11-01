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
  <div class="h-full">
    <form class="h-full flex gap-4 flex-col" @submit.prevent="addPost">
      <div class="text-red-700" v-if="errorMessage">{{ errorMessage }}</div>
      <div class="text-green-700" v-if="successMessage">{{ successMessage }}</div>

      <div class="flex-grow-0">
        <label class="label">Title</label>
        <input class="input" v-model="form.title" type="text" placeholder="How to rank 1 in Google" />
      </div>

      <div class="flex-grow flex flex-col">
        <label class="label">Content</label>
        <textarea class="input flex-grow" placeholder="Escreva o seu blog aqui" v-model="form.content"></textarea>
      </div>

      <button type="submit" class="btn flex-grow-0">Adicionar</button>
    </form>
  </div>
</template>

<style scoped>
.input {
  @apply border-2 border-gray-700 w-full p-2;
}
.label {
  @apply block font-bold;
}

.btn {
  @apply bg-green-800 text-white p-2 rounded;
}
</style>
