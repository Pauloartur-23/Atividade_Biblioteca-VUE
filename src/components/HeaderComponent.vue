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
      </ul>
      <div id="header-page-links-location">
        <span class="mdi mdi-map-marker-outline"></span>
        <p>Sua localização</p>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  transition: transform 0.3s ease;
}

.hidden {
  transform: translateY(-100%);
}

/*======================
          HEADER
  ======================*/
  header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  background-color: #008B8B;
  transition: transform 0.3s ease-in-out;
}

header #header-content-top {
  padding: 0.5vw 10vw 0.5vw 10vw;
  display: flex;
  justify-content: space-between;
  background-color: #003f3f;
}

header #header-content-top p {
  color: #ffffff;
  font-size: 0.8rem;
}

header #header-content-top ul {
  list-style: none;
  display: flex;
  align-items: center;
}

header #header-content-top ul li {
  margin-right: 1vw;
}

header #header-content-top ul li a {
  font-size: 0.8rem;
  color: #ffffff;
  text-decoration: none;
  transition: all ease-in-out .5s;
}

header #header-content-top ul li a:hover {
  text-decoration: underline;
}

header #header-content {
  padding: 1vw 8vw 1vw 8vw;
  display: flex;
  justify-content: space-between;
}

header #logo {
  display: flex;
}

header #logo p {
  font-size: 1.5rem;
  color: #ffffff;
  padding-right: 0.5vw;
  margin-top: 0.5vw;
  font-weight: bold;
}

header #logo p span {
  font-size: 0.8rem;
  color: #00ffff;
  padding-left: 0.5vw;
  padding-right: 0;
  display: inline-block;
  border-left: 2px #00ffff solid;
  margin-top: 0;
  margin-right: 2vw;
}

header #search {
  display: flex;
  align-items: center;
  text-align: center;
}

header #input-search {
  font-family: inherit;
  font-size: inherit;
  background-color: #ffffff;
  color: #000000;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  width: 45em;
  height: 3rem;
  transition: all ease-in-out .5s;
  margin-right: -2.5vw;
  border: none;
  box-shadow: 0 0 2px 0 #003f3f;
}

header #search span {
  color: #003f3f;
  font-size: 1.5rem;
}

header #input-search:focus {
  outline: none;
}

header #image-search:hover {
  cursor: pointer;
}

header #header-page-icons span {
  color: #ffffff;
  font-size: 2rem;
}

header #header-page-icons {
  display: flex;
}

header #header-page-icons #div-link-icons {
  display: flex;
  align-items: center;
  margin-top: 0vw;
  padding-right: 1vw;
  padding-left: 1vw;
}

  
  /*======================
    SECTION #CARRINHO-CODE
  ======================*/

header #header-page-icons #div-link-icons p {
  color: #ffffff;
  font-size: 1rem;
  margin-top: 0.5vw;
  margin-left: 0.2vw;
  margin-bottom: 0.5vw;
}

header #header-page-links {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0.5vw 8vw 0.5vw 4vw;
  border: 0.5px solid #003f3f74;
  box-shadow: 0 0 2px 0 #003f3f;
}

header #header-page-links ul {
  display: flex;
  align-items: center;
}

header #header-page-links-links li {
  margin: 0vw 1vw;
  list-style: none;
}

header #header-page-links-links li a {
  color: #ffffff;
  text-decoration: none;
  transition: all ease-in-out .5s;
}

header #header-page-links-links li a:hover {
  text-decoration: underline;
}

header #header-page-links-location {
  display: flex;
  align-items: center;
  cursor: pointer;
}

header #header-page-links-location p {
  color: #ffffff;
  font-size: 1rem;
}

header #header-page-links-location span {
  color: #ffffff;
  font-size: 1.5rem;
}

</style>