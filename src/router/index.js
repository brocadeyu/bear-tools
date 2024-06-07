import { createRouter, createWebHashHistory } from 'vue-router'
const pageHome = () => import('@/view/page-home/page-home.vue')
// const login = () => import('@/views/dataLink/log-in/login-in.vue')
const routes = [
  {
    path: '/',
    component: pageHome,
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
  // {
  //   path: '/simulateSend',
  //   component: simulateSend,
  //   name: '模拟发送',
  // },
  // {
  //   path: '/:catchAll(.*)',
  //   redirect: '/dataLink/login',
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

// router.beforeEach((to) => {
//   document.title = to.name
// })

export default router
