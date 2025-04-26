import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HOME_PAGE.vue'
import Carrinho from '../views/CARRINHO_PAGE.vue'
import Like from '../views/LIKE_PAGE.vue'
import Login from '../views/LOGIN_PAGE.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: Carrinho
    },
    {
      path: '/like',
      name: 'like',
      component: Like
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router 