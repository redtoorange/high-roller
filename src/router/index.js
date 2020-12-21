import Vue from 'vue'
import VueRouter from 'vue-router'
import Ranged from "@/views/Ranged";
import Melee from "@/views/Melee";

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    redirect: '/ranged'
  },
  {
    path: '/melee',
    name: 'Melee',
    component: Melee
  },
  {
    path: '/ranged',
    name: 'Ranged',
    component: Ranged
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
