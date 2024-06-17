import { createRouter, createWebHashHistory } from 'vue-router'
const pageHome = () => import('@/view/home.vue')
const pageCustom = () => import('@/view/custom-canvas.vue')
const routes = [
  {
    path: '/',
    component: pageCustom,
    name: 'vue',
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

router.beforeEach((to) => {
  document.title = to.name
})

export default router
