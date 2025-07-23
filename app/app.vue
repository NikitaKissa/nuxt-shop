<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
  body{
    font-family: sans-serif;
  }
</style>

<script setup>
  import {useCartStore} from "~/storage/useCartStore.js";

  const cartStore = useCartStore();

  onMounted(() => {cartStore.loadFromLocalStorage()})
</script>
