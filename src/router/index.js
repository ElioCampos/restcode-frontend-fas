import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/restaurants/:id',
    name: 'restaurants',
    component: () => import('../components/restaurants')
  },
  {
    path: '/restaurants/:id',
    name: 'edit-restaurant',
    component: () => import('../components/edit-restaurant')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../components/products')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('../components/categories')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router