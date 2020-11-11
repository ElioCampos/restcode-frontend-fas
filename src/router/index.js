import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  }
  ,
  {
    path: '/consultants/:id',
    name: 'consultant-profile',
    component: () => import('../components/consultant-profile')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/home')
  },
  {
    path: '/home-owner',
    name: 'home-owner',
    component: () => import('../components/home-owner')
  },
  {
    path: '/home-consultant',
    name: 'home-consultant',
    component: () => import('../components/home-consultant')
  }
  /*{
    path: '/consultants',
    name: 'consultant-profile',
    component: () => import('../components/consultant-profile')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
