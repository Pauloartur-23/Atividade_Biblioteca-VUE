<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import throttle from 'lodash.throttle'

const header = ref(null)
const lastScrollTop = ref(0)

const handleScroll = throttle(() => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop

  if (currentScroll > lastScrollTop.value) {
    header.value?.classList.add('hidden')
  } else {
    header.value?.classList.remove('hidden')
  }

  lastScrollTop.value = Math.max(currentScroll, 0)
}, 200)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header ref="header">
    <div id="header-content-top">
      <p>Compre aqui livros novos, usados e seminovos de milhares de sebos e livrarias.</p>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Categorias</a></li>
        <li><a href="#">Promoções</a></li>
        <li><a href="#">Novidades</a></li>
      </ul>
    </div>
    <div id="header-content">
      <div id="logo">
        <p>IFbooks</p>
        <p><span>Apreço a<br>
            leitura</span></p>
      </div>
      <div id="search">
        <input type="text" placeholder="Pesquisar" id="input-search">
        <span class="mdi mdi-magnify"></span>
      </div>
      <div id="header-page-icons">
        <RouterLink to="/like" style="text-decoration: none;">
          <div id="div-link-icons">
            <span class="mdi mdi-heart-outline"></span>
            <p>Curtidas</p>
          </div>
        </RouterLink>
        <RouterLink to="/login" style="text-decoration: none;">
          <div id="div-link-icons">
            <span class="mdi mdi-account-outline"></span>
            <p>Entrar</p>
          </div>
        </RouterLink>
        <RouterLink to="/carrinho" style="text-decoration: none;">
          <div id="div-link-icons">
            <span class="mdi mdi-cart-outline"></span>
          </div>
        </RouterLink>
      </div>
    </div>
    <div id="header-page-links">

      <ul id="header-page-links-links">
        <li><a href="#">Termos</a></li>
        <li><a href="#">Equipe</a></li>
        <li><a href="#">Envio</a></li>
        <li><a href="#">Devoluções</a></li>
        <li><a href="#">Fale conosco</a></li>
        <li><a href="#">Política de privacidade</a></li>
        <li><a href="#">Política de cookies</a></li>
        <li><a href="#">Política de privacidade</a></li>
      <div id="header-page-links-location">
        <span class="mdi mdi-map-marker-outline"></span>
        <p>Sua localização</p>
      </div>
  </header>
  <router-view></router-view>
  <footer>
    <div id="space-footer">
      <div id="div-ifbooks-footer">
        <p>IFbooks</p>
        <ul>
          <li><a href="#"><span class="mdi mdi-facebook" style="color: white;"></span></a></li>
          <li><a href="#"><span class="mdi mdi-instagram" style="color: white;"></span></a></li>
          <li><a href="#"><span class="mdi mdi-twitter" style="color: white;"></span></a></li>
        </ul>
      </div>
      <div id="div-contato-footer">
        <p>Contato</p>
        <ul>
          <li><span class="mdi mdi-phone"></span> +55 47 40045263</li>
          <li><span class="mdi mdi-clock"></span> 8h às 23h - Seg a Sex</li>
          <li><span class="mdi mdi-email"></span> contato@ifbooks.com</li>
        </ul>
        <div id="div-img-footer">
          <img src="../src/components/img-app.vue/paipal.png" alt="PaiPal">
          <img src="../src/components/img-app.vue/MasterCard.png" alt="MasterCard">
          <img src="../src/components/img-app.vue/VISA.png" alt="VISA">
        </div>
      </div>
    </div>
    <p id="copy">&copy; Alguns direitos reservados. IFbooks 2025. </p>
  </footer>
</template>

<style scoped>
header {
  transition: transform 0.3s ease;
}

.hidden {
  transform: translateY(-100%);
}

</style>
