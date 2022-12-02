<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <RouterLink to="/">
      home
    </RouterLink>
    <RouterLink to="/about">
      about
    </RouterLink>

    <RouterView />
  </main>
</template>
