<script setup>
import { useCartStore } from '../stores/store'
import { RouterLink } from 'vue-router'

const cartStore = useCartStore()

</script>

<template>
  <main id="like">
    <section>
      <h1>Curtidos</h1>
      <div v-if="cartStore.favorites.length === 0" class="empty-cart">
        <p>Não tem nenhum livro curtido</p>
        <RouterLink to="/" class="back-button">Voltar para loja</RouterLink>
      </div>
      <template v-else>
        <ul class="cart-favorites">
          <li v-for="favorite in cartStore.favorites" :key="favorite.id">
              <img :src="favorite.img" :alt="favorite.titulo">
              <div class="favorite-details">
                <h2>{{ favorite.titulo }}</h2>
                <p>{{ favorite.autor }}</p>
                <p><span>{{ favorite.preco }}</span></p>
              </div>
          </li>
        </ul>
        <RouterLink to="/" class="back-button">Voltar para loja</RouterLink>
        <div class="cart-footer">
        </div>
      </template>
    </section>
  </main>
</template>

<style scoped>
</style> 