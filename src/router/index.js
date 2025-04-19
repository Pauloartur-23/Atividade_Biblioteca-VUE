import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Carrinho from '../views/carrinho.vue'

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
    }
  ]
})

export default router 