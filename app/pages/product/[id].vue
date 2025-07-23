<script setup>
import {useProductsByID} from "~/composables/useProductByID.js";
import {useCartStore} from "~/storage/useCartStore.js";

const productID = useRoute().params.id;

const {data: product} = useProductsByID(productID);

const router = useRouter();

const cartStore = useCartStore();

function addToCart(){
  const obj = {
    img: this.product.img,
    name: this.product.name,
    description: this.product.description,
    prise: this.product.prise,
    id: this.product.id,
  }
  
  cartStore.add(obj, 1)
}
</script>

<template>
  <div class="bg-indigo-200 my-4 rounded-lg mx-auto w-1/2 p-3 text-center">
    <p class="text-indigo-600 text-left font-semibold hover:cursor-pointer" @click="router.back">< Back</p>
    <img class="h-56 m-auto" :src="product.img" :alt="product.name">
    <h1>{{product.name}}</h1>
    <p>{{product.description}}</p>
    <p>For only: <b>{{product.prise}}$</b></p>
    <button @click="addToCart()" type="button">Add To Cart</button>
  </div>
</template>

<style scoped>

</style>