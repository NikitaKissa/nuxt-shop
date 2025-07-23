<script setup>
import {useCartStore} from "~/storage/useCartStore.js";

const props = defineProps({
  img: String,
  name: String,
  prise: Number,
  id: Number,
  amount: Number,
})

const cartStore = useCartStore();

function deleteFromCart(){
  cartStore.remove(props.id)
}

function changeAmount(event){
  cartStore.update(props.id , Number(event.target.value));
}

</script>

<template>
  <div class="article">
    <img :src=img class="h-12" :alt=name>
    <h4 class="m-0">{{name}}</h4>
    <p>{{prise}}$</p>
    <input class="w-8 text-center" type="number" min="0" step="1" :value="amount" @change="changeAmount"/>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<style scoped>
  .article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-radius: 16px;

    @apply bg-indigo-200
  }
</style>