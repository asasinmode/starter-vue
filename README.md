# asasinmode vue starter

This is a [vue 3](https://vuejs.org/) template for new projects.

## tools

 - [typescript](https://www.typescriptlang.org/)
 - [reactivity transform](https://vuejs.org/guide/extras/reactivity-transform.html)
 - [pinia](https://pinia.vuejs.org/)
 - [vue router](https://router.vuejs.org/)
 - [eslint](https://eslint.org/) with [antfu's eslint config](https://github.com/antfu/eslint-config)
 - [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
 - [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
 - [unocss](https://github.com/unocss/unocss)

Besides packages listed above this template includes

 - dark mode switch
 - layouts set with `$route.meta.layout`
 - template error page

## get started

### 1. copy the repository

```sh
git clone git@github.com:asasinmode/starter-vue.git
```

### 2. before installing dependencies

Go to `package.json` and update the following:
  - **author**, **description** and **license**.
  - **packageManager** with your package manager of choice.
  - **@iconify/\*** _devDependencies_ with your preferred icon sets from [iconify](https://iconify.design/).

### 3. install dependencies

```sh
# or npm/yarn
pnpm i
```

### 4. clean up template

1. update **title** and **favicon** in `index.html`
2. remove `public/favicon.webp`
3. update `unocss.config.ts`
4. remove **about** page in `src/router/index.ts` and `src/pages/PageAbout.vue`
5. remove `src/components/DependencyIcon.vue` and `src/components/DependencyIconsCircle.vue`
6. remove `src/assets/pinia.svg` and `src/assets/unocss.svg`
