import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/News.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/goal',
    name: 'news',
    component: () => import('../views/News.vue')
  },
  {
    path: '/teams/:query',
    name: 'teams',
    component: () => import('../views/TeamListAll.vue')
  },
  {
    path: '/players/:query',
    name: 'players',
    component: () => import('../views/PlayerListAll.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
