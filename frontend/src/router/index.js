import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)
const isLogged = (to, from, next) => {
  if (store.getters.getToken) {
    next()
    return;
  }
  next('/');
}

const routes = [{
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
    component: () => import('../views/Wall.vue'),
    beforeEnter: isLogged,
  },
  {
    path: '/myProfile',
    name: 'UserProfil',
    component: () => import('../views/UserProfil.vue'),
    beforeEnter: isLogged,
  },
  {
    path: '/AllProfile',
    name: 'AllProfile',
    component: () => import('../views/AllProfile.vue'),
    beforeEnter: isLogged,
  },
  {
    path: '/comments/:PostId',
    name: 'Comments',
    component: () => import('../views/Comments.vue'),
    beforeEnter: isLogged,
  },

]


const router = new VueRouter({
  routes
})

export default router