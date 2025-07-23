<template>
  <header class="bg-indigo-500 p-2 text-indigo-50" >
    <h1 class="mt-0 mb-0">Berries Shop</h1>

    <nav class="text-right">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/cart">Cart</NuxtLink>
    </nav>

    <div v-if="false">User info</div>
    <button v-else>Log in</button>
  </header>

  <main>
    <slot />
  </main>
</template>

<style scoped>
  main{
    max-width: 960px;
    margin: 0 auto;
    padding: 0 15px;
  }

  header{
    display: grid;
    grid-template-columns: auto 3fr 80px;
    grid-gap: 15px;

    align-items: center;
  }
</style>