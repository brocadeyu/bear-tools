import { createRouter, createWebHashHistory } from 'vue-router'
const pageHome = () => import('@/view/home.vue')
const routes = [
  {
    path: '/',
    component: pageHome,
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
