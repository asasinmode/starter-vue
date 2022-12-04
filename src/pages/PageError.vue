<script setup lang="ts">
const backTarget: string = history.state.back ?? '/'
</script>

<template>
  <main>
    <h1>error happened</h1>
    <RouterLink :to="backTarget">
      go back
    </RouterLink>
  </main>
</template>
