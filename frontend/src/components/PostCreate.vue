<script setup>
import { reactive, ref } from "@vue/reactivity";
defineProps({
  props: ["content", "title"],
});

const emits = defineEmits(["update:content", "update:title"]);

const form = reactive({
  title: "",
  content: "",
});

const emitTitle = (value) => {
  emits("update:title", value);
};

const emitContent = (value) => {
  emits("update:content", value);
};

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
    emits("update:title", "");
    emits("update:content", "");

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
        <input
          class="input"
          @input="emitTitle($event.target.value)"
          v-model="form.title"
          type="text"
          placeholder="Choose a title for your article"
        />
      </div>

      <div class="flex-grow flex flex-col">
        <textarea
          class="input flex-grow"
          @input="emitContent($event.target.value)"
          placeholder="Write something for your audience"
          v-model="form.content"
        ></textarea>
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
