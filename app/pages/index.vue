<script setup>
import ArticleShop from "~/components/ArticleShop.vue";
import {useProducts} from "~/composables/useProducts";

const {data: products} = useProducts();
</script>

<template>
  <h2 class="text-center">Articles</h2>
  <div class="shop">
    <ArticleShop v-for="item in products" :key="item.id" :id="item.id"
                 :img="item.img"
                 :name="item.name"
                 :description="item.description"
                 :prise="item.prise"/>
  </div>
</template>

<style scoped>
.shop{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 15px;
}

@media (max-width: 768px) {
  .shop{
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 576px) {
  .shop{
    grid-template-columns: 1fr 1fr;
  }
}
</style>