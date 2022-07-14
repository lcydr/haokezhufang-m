import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    component: () => import('@/views/Register')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    children: [
      // {
      //   path: '/name',
      //   redirect: Home
      // },
      {
        path: '/home',
        component: () => import('@/views/Home')
      },
      {
        path: '/findfrom',
        component: () => import('@/views/FindFrom')
      },
      {
        path: '/real',
        component: () => import('@/views/Real/index.vue')
      },
      {
        path: '/my',
        component: () => import('@/views/My')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
