import Vue from 'vue'
import VueRouter from 'vue-router'
import GMap from '@/components/home/GMap'
import Signup from '@/components/auth/Signup'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: GMap
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
]

const router = new VueRouter({
  routes
})

export default router
