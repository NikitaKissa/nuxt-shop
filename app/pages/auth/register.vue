<script setup>
definePageMeta({
  layout: 'login'
})
</script>

<template>
  <form class="flex flex-col gap-1 items-center">
    <label for="username">Username</label>
    <input type="text" name="username" id="username" required />

    <label for="password">Password</label>
    <input type="text" name="password" id="password" required />

    <button class="mt-3" type="submit">Register</button>
  </form>
</template>

<style scoped>

</style>