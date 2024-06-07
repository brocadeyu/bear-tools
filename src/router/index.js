import { createRouter, createWebHashHistory } from 'vue-router'
const pageHome = () => import('@/view/page-home/page-home.vue')
const pageApp = () => import('@/view/page-app/page-app.vue')
const routes = [
  {
    path: '/',
    component: pageHome,
    name: '熊の工具箱',
    // children: [
    //   {
    //     path: 'thought',
    //     component: thoughtIndex,
    //   },
    //   {
    //     path: 'login',
    //     component: login,
    //     name: '登录',
    //   },
    // ],
  },
  {
    path: '/app',
    component: pageApp,
    name: '熊の工具箱1',
  },
  // {
  //   path: '/:catchAll(.*)',
  //   redirect: '/dataLink/login',
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

router.beforeEach((to) => {
  document.title = to.name
})

export default router
