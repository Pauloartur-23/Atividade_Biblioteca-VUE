<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div id="logo">
      <p>IFbooks</p>
      <p><span>Apreço a<br>
        leitura</span></p>
    </div>
    <div id="search">
      <input type="text" placeholder="Pesquisar" id="input-search">
    <img id="image-search" src="../src/components/img-app.vue/magnifying-glass.svg" alt="Lupa">
    </div>
    <nav>
      <ul id="header-page-links">
        <li><a href="#">Termos</a></li>
        <li><a href="#">Equipe</a></li>
        <li><a href="#">Envio</a></li>
        <li><a href="#">Devoluções</a></li>
      </ul>
    </nav>
   
      <RouterLink class="image-links" to="/carrinho"> <span class="mdi mdi-cart" style="color: #27AE60; font-size: 1.5rem;"></span></RouterLink> 
      <p class="divisao-links">|</p>
      <a class="image-links" href="#"><span class="mdi mdi-heart" style="color: #27AE60; font-size: 1.5rem;"></span></a> 
      <p class="divisao-links">|</p>
      <a class="image-links" href="#"><span class="mdi mdi-account" style="color: #27AE60; font-size: 1.5rem;"></span></a>
  </header>
  <router-view></router-view>
  <footer>
    <div id="space-footer">
      <div id="div-ifbooks-footer">
        <p>IFbooks</p>
        <ul>
          <li><a href="#"><span class="fa-brands fa-square-facebook" style="color: #ffffff;"></span></a></li>
          <li><a href="#"><span class="fa-brands fa-square-instagram" style="color: #ffffff;"></span></a></li>
          <li><a href="#"><span class="fa-brands fa-square-twitter" style="color: #ffffff;"></span></a></li>
        </ul>
      </div>
      <div id="div-contato-footer">
        <p>Contato</p>
        <ul>
          <li><i class="fa-solid fa-phone" style="color: #ffffff;"></i> +55 47 40045263</li>
          <li><i class="fa-solid fa-clock" style="color: #ffffff;"></i> 8h às 23h - Seg a Sex</li>
          <li><i class="fa-solid fa-envelope" style="color: #ffffff;"></i> contato@ifbooks.com</li>
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

</style>
