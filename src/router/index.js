import Vue from 'vue'
import VueRouter from 'vue-router'
import GMap from '@/components/home/GMap'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: GMap
  }
]

const router = new VueRouter({
  routes
})

export default router
