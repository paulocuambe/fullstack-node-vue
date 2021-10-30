<template>
  <nav class="navigation">
    <ul class="nav-links">
      <li class="nav-item">
        <router-link class="nav-link-item" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link-item" to="/new">Write</router-link>
      </li>
    </ul>
  </nav>
</template>
<style>
.navigation {
  @apply bg-black;
}
.nav-item {
  @apply p-2;
}
.nav-links {
  @apply container mx-auto flex justify-center;
}
.nav-link-item {
  @apply text-2xl text-white p-2 hover:underline;
}

.router-link-exact-active {
  @apply underline;
}
</style>
