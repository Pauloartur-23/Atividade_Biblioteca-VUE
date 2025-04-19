<script setup>
const livros = [
  {
    img: '../src/components/img-books/Chain_of_Iron_Volume_2.png',
    titulo: 'Chain of Iron: Volume 2',
    autor: 'Cassandra Clare',
    preco: 'R$23.24',
    id: '1',
  },
  {
    img: '../src/components/img-books/Chain_of_Thorns.png',
    titulo: 'Chain of Thorns',
    autor: 'Cassandra Clare',
    preco: 'R$23.24',
    id: '2',
  },
  {
    img: '../src/components/img-books/City_of_Fallen_Angels.png',
    titulo: 'City of Fallen Angels',
    autor: 'Cassandra Clare',
    preco: 'R$13.94',
    id: '3',
  },
  {
    img: '../src/components/img-books/Nona_the_Ninth.png',
    titulo: 'Nona the Ninth',
    autor: 'Cassandra Clare',
    preco: 'R$16.84',
    id: '4',
  },
  {
    img: '../src/components/img-books/Harlem_Shuffle.png',
    titulo: 'Harlem Shuffle',
    autor: 'Cassandra Clare',
    preco: 'R$26.92',
    id: '5',
  },
  {
    img: '../src/components/img-books/Two_Old_Women.png',
    titulo: 'Two Old Women',
    autor: 'Velma Wallis',
    preco: 'R$13.95',
    id: '6',
  },
  {
    img: '../src/components/img-books/Carrie_Soto_Is_Back.png',
    titulo: 'Carrie Soto Is Back',
    autor: 'Taylor Jenkins Reid',
    preco: 'R$26.04',
    id: '7',
  },
  {
    img: '../src/components/img-books/Book_Lovers.png',
    titulo: 'Book Lovers',
    autor: 'Emily Henry',
    preco: 'R$15.81',
    id: '8',
  }
]
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
  <main id="home">
    <section id="offer">
      <div id="offer-text">
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
    <section id="benefict">
      <a href="#">
        <div>
          <img src="../src/components/img/truck-solid.svg" alt="Caminhão">
          <h3>Frete grátis para SC</h3>
        </div>
      </a>
      <a href="#">
        <div>
          <img src="../src/components/img/star-solid.svg" alt="Estrela">
          <h3><a href="#">Livros recomendados</a></h3>
        </div>
      </a>
      <a href="#">
        <div id="last-benefict">
          <img src="../src/components/img/book-open-solid.svg" alt="Livro">
          <h3><a href="#">Mais vendidos</a></h3>
        </div>
     </a>
    </section>
    <section id="releases">
      <h2>Lançamentos</h2>
      <ul>
        <li v-for="livro in livros" key="livros.id">
          <img :src="livro.img" alt="Livro">
          <h4>{{ livro.titulo }}</h4>
          <p>{{ livro.autor }}</p>
          <div id="space-div">
            <p>{{ livro.preco }}</p>
            <span class="fa-solid fa-heart" style="color: #27ae60;"></span>
          </div>
            <button> <span class="fa-solid fa-cart-shopping" style="color: #ffffff;"></span>
            Comprar</button>
        </li>
      </ul>
    </section>
  </main>
  <main id="carrinho">
    <section id="carrinho-code">
      <h1>Carrinho</h1>
      <div>
        <p>Título</p>
        <p>Quantidade</p>
        <p>Subtotal</p>
      </div>
      <ul>
        <li>
          <div>
            <img src="" alt="">
            <div>
            <h2></h2>
            <p></p>
            <p><span></span></p>
          </div>
          </div>
          <div>
            <button>-</button>
            <p></p>
            <button>+</button>
          </div>
          <p></p>
        </li>
      </ul>
      <button>Voltar para loja</button>
      <div>
        <div>
            <input type="text" placeholder="Código do cupom">
            <button>Inserir Cupom</button>
        </div>
        <div>
          <h2>Total da Compra</h2>
          <ul>
            <li>
              <p>Produtos:</p>
              <p></p>
            </li>
            <li>
              <p>Frete:</p>
              <p>Grátis</p>
            </li>
            <li>
              <p>Desconto:</p>
              <p></p>
            </li>
            <li>
              <p>Total:</p>
              <p></p>
            </li>
          </ul>
          <button>Ir para o pagamento</button>
        </div>
      </div>
    </section>
  </main>
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
          <img src="../src/components/img-footer/paipal 1.png" alt="PaiPal">
          <img src="../src/components/img-footer/MasterCard-Logo-1979 1.png" alt="MasterCard">
          <img src="../src/components/img-footer/VISA-card-logo- 1.png" alt="VISA">
        </div>
      </div>
    </div>
    <p id="copy">&copy; Alguns direitos reservados. IFbooks 2025. </p>
  </footer>
</template>

<style scoped>
/*======================
        HEADER
======================*/

</style>
