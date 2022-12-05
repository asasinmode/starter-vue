<script setup lang="ts">
import iconPinia from '@/assets/pinia.svg'
import iconUnoCSS from '@/assets/unocss.svg'
</script>

<template>
  <div absolute translate-center class="left-1/2 top-1/2">
    <div relative>
      <DependencyIcon :index="0" href="https://router.vuejs.org/" title="vue router" icon="i-logos-vue" />
      <DependencyIcon :index="1" href="https://github.com/unocss/unocss" title="unocss" :icon="iconUnoCSS" />
      <DependencyIcon :index="2" href="https://github.com/antfu/unplugin-vue-components" text-square>
        <span>unplugin</span>
        <span>vue</span>
        <span>components</span>
      </DependencyIcon>
      <DependencyIcon :index="3" href="https://eslint.org/" title="eslint" icon="i-logos-eslint" />
      <DependencyIcon :index="4" href="https://vuejs.org/guide/extras/reactivity-transform.html" text-square>
        <span>reactivity</span>
        <span>transform</span>
      </DependencyIcon>
      <DependencyIcon :index="5" href="https://www.typescriptlang.org/" title="typescript" icon="i-logos-typescript-icon" />
      <DependencyIcon :index="6" href="https://github.com/antfu/unplugin-auto-import" text-square>
        <span>unplugin</span>
        <span>auto</span>
        <span>imports</span>
      </DependencyIcon>
      <DependencyIcon :index="7" href="https://pinia.vuejs.org/" title="pinia" :icon="iconPinia" />
    </div>
  </div>
</template>

