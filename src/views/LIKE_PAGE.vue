<script setup>
import { useCartStore } from '../stores/store'
import { RouterLink } from 'vue-router'

const cartStore = useCartStore()
const removeItemLike = (favoriteId) => {
  cartStore.removeItemLike(favoriteId)
}

const addToCart = (livro) => {
  cartStore.addItem(livro)
  router.push('/carrinho')
}
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
        <div class="cart-header">
          <p>Título</p>
          <p>Remover</p>
        </div>
        <ul class="cart-favorites">
          <li v-for="favorite in cartStore.favorites" :key="favorite.id">
            <div class="favorite-elements">
              <img :src="favorite.img" :alt="favorite.titulo">
              <div class="favorite-details">
                <h2>{{ favorite.titulo }}</h2>
                <p>{{ favorite.autor }}</p>
                <p><span>{{ favorite.preco }}</span></p>
                <button class="buy-button" @click="addToCart(favorite)">
                  <span class="fa-solid fa-cart-shopping" style="color: #ffffff;"></span>
                  Comprar
                </button>
              </div>
            </div>
            <button class="remove-button" @click="removeItemLike(favorite.id)">X</button>
          </li>
        </ul>
        <p id="total-favorites">Total de livros curtidos: {{ cartStore.favorites.length }}</p>
        <RouterLink to="/" class="back-button">Voltar para loja</RouterLink>
      </template>
    </section>
  </main>
</template>

<style scoped>
main {
  padding: 5vw 15vw;
  margin: 0 auto;
  background-color: white;
}

main section .empty-cart {
  text-align: center;
  padding: 2rem;
}

main section .empty-cart p {
  color: #4F4C57;
  margin-bottom: 1rem;
}

main section h1 {
  color: #27ae60;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
}

main section .cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #27ae60;
}

main section .cart-header p {
  color: #382C2C;
  font-size: 1.5rem;
  font-weight: bold;
}

main section .cart-favorites {
  list-style: none;
  padding: 0;
}
main section #total-favorites {
  text-align: right;
  margin-top: 2rem;
  color: #382C2C;
  font-size: 1.2rem;
  font-weight: bold;
}

main section .cart-favorites li {
  display: flex;
  justify-content: space-between;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid #27ae60;
}

main section .cart-favorites li .favorite-elements {
  display: flex;
  align-items: center;
  gap: 1rem;
}

main section .cart-favorites li .favorite-elements img {
  width: 120px;
  height: auto;
  object-fit: cover;
}

main section .favorite-details h2 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #382C2C;
  font-weight: bold;
}

main section .favorite-details p {
  color: #4F4C57;
  margin: 0.25rem 0;
}

main section .favorite-details p span {
  font-weight: bold;
  color: #382C2C;
  font-size: 1.3rem;
}

main section .buy-button {
  background: #27ae60;
  color: white;
  border: 2px solid #27ae60;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all .3s ease;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
}

main section .buy-button:hover {
  background: #1d8046;
  border: 2px solid #1d8046;
  color: white;
}

main section .back-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border: 1px solid #27ae60;
  color: #27ae60;
  text-decoration: none;
  margin: 2rem 0;
  border-radius: 4px;
  transition: all .3s ease;
}



main section .checkout-button {
  width: 100%;
  padding: 1rem;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: all .3s ease;
}

main section .remove-button {
  background: #ffffff;
  color: rgb(0, 0, 0);
  border: 2px solid #000000;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all .3s ease;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  font-weight: bold;
}

main section .remove-button:hover {
  background: #1d8046;
  border: 2px solid #1d8046;
  color: white;
}

main section .back-button:hover {
  background: #1d8046;
  color: white;
}
</style>