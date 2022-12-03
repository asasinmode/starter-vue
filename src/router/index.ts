import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/PageHome.vue'
import ErrorPage from '@/pages/PageError.vue'
import LayoutError from '@/layouts/LayoutError.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/404',
      name: 'notFound',
      component: ErrorPage,
      meta: {
        layout: LayoutError,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/PageAbout.vue'),
    },
  ],
})

const routes = router.getRoutes()

router.beforeEach((to, _from) => {
  if (!routes.some(route => route.path === to.path))
    return router.push({ name: 'notFound' })
})
