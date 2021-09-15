import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/wall',
    name: 'Wall',
    component: () => import('../views/Wall.vue')
  },
  {
  path: '/myProfile',
  name: 'UserProfil',
  component: () => import('../views/UserProfil.vue')
  },
]


const router = new VueRouter({
  routes
})

export default router
