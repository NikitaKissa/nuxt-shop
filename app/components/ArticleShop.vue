<script setup>
  import {useCartStore} from "~/storage/useCartStore.js";

  const props = defineProps({
    img: String,
    name: String,
    description: String,
    prise: Number,
    id: Number
  })

  const cartStore = useCartStore();

  function AddToCart() {
    const obj = {
      img: props.img,
      name: props.name,
      description: props.description,
      prise: props.prise,
      id: props.id,
    }


    cartStore.add(obj, 1);
  }
</script>

<template>
  <div class="article bg-indigo-200 rounded-lg shadow-art">
    <img class="w-full" :src=img :alt=props.name>
    <h4>{{ name }}</h4>
    <p>Prise: <b>{{ prise }}$</b></p>
    <button @click="AddToCart">Add to cart</button>
  </div>
</template>

<style scoped>
  .article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    padding: 1rem;
  }

</style>