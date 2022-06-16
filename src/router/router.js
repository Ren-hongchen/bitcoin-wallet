import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../pages/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../pages/home.vue')
      },
      {
        path: '/address',
        name: 'address',
        component: () => import('../pages/address.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
