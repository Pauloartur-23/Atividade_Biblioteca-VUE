<script setup>
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
    <img id="image-search" src="../src/components/img/magnifying-glass.svg" alt="Lupa">
    </div>
    <nav>
      <ul id="header-page-links">
        <li><a href="#">Termos</a></li>
        <li><a href="#">Equpe</a></li>
        <li><a href="#">Envio</a></li>
        <li><a href="#">Devoluções</a></li>
      </ul>
    </nav>
      <a class="image-links" href="#"><img  src="../src/components/img/cart-shopping-solid.svg" alt="Carrinho"></a> 
      <p class="divisao-links">|</p>
      <a class="image-links" href="#"><img  src="../src/components/img/heart-solid.svg" alt="Coração"></a> 
      <p class="divisao-links">|</p>
      <a class="image-links" href="#"><img src="../src/components/img/user-solid.svg" alt="User"></a>
  </header>
  <main>
    <section id="first-section">
      <div id="first-section-text">
        <button id="autor-button">Autor de Abril</button>
        <h1>Eric-Emanuel Schmitt </h1>
        <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
        <button id="acessar-button">Acessar página do livro</button>
      </div>
      <div>
        <img src="../src/components/img/first-section-book.png" alt="">
        <p>*within the stock limit</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
header{
  padding: 1vw 10vw;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px #27AE60 solid;
}
header #logo{
  display: flex;
}
header #logo p{
  font-size: 1.5rem;
  color: #231F2D;
  padding-right: 0.5vw;
  margin-top: 0.5vw;
}
header #logo p span{
  font-size: 0.8rem;
  color: #27AE60;
  padding-left: 0.5vw;
  padding-right: 0;
  display: inline-block;
  border-left: 2px #27AE60 solid;
  margin-top: 0;
  margin-right: 2vw;
}

header #search {
  display: flex;
  align-items: center;
  text-align: center;
}
header #input-search{
  font-family: inherit;
  font-size: inherit;
  background-color: #F1F1F1;
  border: none;
  color: #B8B8B8;
  padding: 0.7rem 1rem;
  border-radius: 5px;
  width: 30em;
  transition: all ease-in-out .5s;
  margin-right: -2vw;
}
header #search img{
  width: 20px;
}
header #input-search:focus {
  outline: none;
  background-color: #f0eeee;
}
header #image-search:hover {
  cursor: pointer;
}
header #header-page-links {
  list-style: none;
  display: flex;
}
header #header-page-links li{
  margin: 1vw;
}
header #header-page-links li a{
  color: #7B7881;
  text-decoration: none;
}
header .image-links img {
  width: 20px;
}
header .image-links {
  padding-top: 1vw;
}
header .divisao-links{
  font-size: 25px;
  color: #27AE60;
}
main{
  background-color: white;
}
main #first-section {
  display: flex;
  justify-content: space-between;
  padding: 2vw 15vw;
  border: 2px #27AE60 solid;

}
main #first-section #first-section-text {
  padding-top: 8vw;
}
main #first-section #first-section-text #autor-button{
  background-color: white;
  border: 2px #27AE60 solid;
  border-radius: 5px;
  color: #27AE60;
  padding: 0.5vw 1vw 0.5vw 1vw;
  margin-bottom: 1vw;
}
main #first-section #first-section-text h1{
  font-weight: bold;
  color: #382C2C;
  font-size: 2.5rem;
  margin-bottom: 1vw;
}
main #first-section #first-section-text p{
  color: #4D4C4C;
  padding-right: 15vw;
  margin-bottom: 2vw;
}
main #first-section #first-section-text #acessar-button{
  background-color: #27AE60;
  color: white;
  padding: 0.5vw 1vw 0.5vw 1vw;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
}

</style>
