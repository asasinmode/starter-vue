<script setup lang="ts">
const backTarget: string = history.state.back ?? '/'
</script>

<template>
  <h1>error happened</h1>
  <RouterLink :to="backTarget">
    go back
  </RouterLink>
</template>
