<script setup lang="ts">
const text = 'asasinmode'
</script>

<template>
  <h1 text-center>
    <button
      v-for="(letter, index) in text" :key="index"
      hoverable:underline
    >
      {{ letter }}
    </button>
  </h1>
</template>

<style scoped>
button {
  font-size: clamp(3.5rem, 12vw, 10rem);
}
button:focus-visible{
  outline: none;
}
</style>
