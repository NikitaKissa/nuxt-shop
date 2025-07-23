<script setup>
  import {useCartStore} from "~/storage/useCartStore.js";

  const cartStore = useCartStore();
</script>

<template>
  <div v-if="!cartStore.empty" class="flex gap-3 flex-col my-3 w-2/3 m-auto">
    <ArticleCart v-for="item in cartStore.items" :key="item.id" :id="item.id"
                 :img="item.img"
                 :name="item.name"
                 :prise="item.prise"
                 :amount="item.amount"/>
      <p class="text-right"><b>Total prise: {{cartStore.totalPrise}}$</b></p>
    <button class="ml-auto">Place order</button>
  </div>
  <h4 v-else class="text-center">Currently your cart is empty <NuxtLink to="/" class="text-center">click to continue browsing</NuxtLink></h4>
</template>

<style scoped>
</style>