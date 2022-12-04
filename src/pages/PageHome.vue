<script setup lang="ts">
const text = 'asasinmode'
</script>

<template>
  <main flex-center>
    <button
      v-for="(letter, index) in text" :key="index"
      hoverable:underline
    >
      {{ letter }}
    </button>
  </main>
</template>

<style scoped>
button {
  font-size: clamp(3.5rem, 12vw, 10rem);
}
button:focus-visible{
  outline: none;
}
</style>
