import Vue from 'vue'
import VueRouter from 'vue-router'
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
    redirect: '/home',
    children: [
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
        //   children: [
        //     {
        //       path: '/collection',
        //       component: () => import('@/components/my/collection')
        //     }
        //   ]
      }
    ]
  },
  {
    path: '/collection',
    component: () => import('@/components/my/favorites')
  },
  {
    path: '/lease/:id',
    component: () => import('@/components/my/lease')
  },
  {
    path: '/rental',
    component: () => import('@/components/my/rental')
  },
  {
    path: '/torent',
    component: () => import('@/components/home/ToRent.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
