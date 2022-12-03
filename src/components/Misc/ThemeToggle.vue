<script setup lang="ts">
function toggleTheme() {
  const value = document.documentElement.classList.contains('dark') ? 'light' : 'dark'

  localStorage.setItem('color-schema', value)
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <button
    title="theme toggle" aria-label="auto" aria-live="polite"
    @click="toggleTheme"
  >
    toggle theme
  </button>
</template>

<style scoped>
button {
  touch-action: manipulation;
}
</style>
