<script setup>
import ChainOfIron2 from '../components/img-books/Chain_of_Iron_Volume_2.png'
import ChainOfThorns from '../components/img-books/Chain_of_Thorns.png'
import CityOfFallenAngels from '../components/img-books/City_of_Fallen_Angels.png'
import NonaTheNinth from '../components/img-books/Nona_the_Ninth.png'
import HarlemShuffle from '../components/img-books/Harlem_Shuffle.png'
import TwoOldWomen from '../components/img-books/Two_Old_Women.png'
import CarrieSoto from '../components/img-books/Carrie_Soto_Is_Back.png'
import BookLovers from '../components/img-books/Book_Lovers.png'
import FirstSectionBook from '../components/img/first-section-book.png'
import TruckIcon from '../components/img/truck-solid.svg'
import StarIcon from '../components/img/star-solid.svg'
import BookIcon from '../components/img/book-open-solid.svg'

const livros = [
  {
    img: ChainOfIron2,
    titulo: 'Chain of Iron: Volume 2',
    autor: 'Cassandra Clare',
    preco: 'R$23.24',
    id: '1',
  },
  {
    img: ChainOfThorns,
    titulo: 'Chain of Thorns',
    autor: 'Cassandra Clare',
    preco: 'R$23.24',
    id: '2',
  },
  {
    img: CityOfFallenAngels,
    titulo: 'City of Fallen Angels',
    autor: 'Cassandra Clare',
    preco: 'R$13.94',
    id: '3',
  },
  {
    img: NonaTheNinth,
    titulo: 'Nona the Ninth',
    autor: 'Cassandra Clare',
    preco: 'R$16.84',
    id: '4',
  },
  {
    img: HarlemShuffle,
    titulo: 'Harlem Shuffle',
    autor: 'Cassandra Clare',
    preco: 'R$26.92',
    id: '5',
  },
  {
    img: TwoOldWomen,
    titulo: 'Two Old Women',
    autor: 'Velma Wallis',
    preco: 'R$13.95',
    id: '6',
  },
  {
    img: CarrieSoto,
    titulo: 'Carrie Soto Is Back',
    autor: 'Taylor Jenkins Reid',
    preco: 'R$26.04',
    id: '7',
  },
  {
    img: BookLovers,
    titulo: 'Book Lovers',
    autor: 'Emily Henry',
    preco: 'R$15.81',
    id: '8',
  }
]
</script>

<template>
  <main id="home">
    <section id="offer">
      <div id="offer-text">
        <button id="autor-button">Autor de Abril</button>
        <h1>Eric-Emanuel Schmitt </h1>
        <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
        <button id="acessar-button">Acessar página do livro</button>
      </div>
      <div>
        <img :src="FirstSectionBook" alt="">
        <p>*within the stock limit</p>
      </div>
    </section>
    <section id="benefict">
      <a href="#">
        <div>
          <img :src="TruckIcon" alt="Caminhão">
          <h3>Frete grátis para SC</h3>
        </div>
      </a>
      <a href="#">
        <div>
          <img :src="StarIcon" alt="Estrela">
          <h3><a href="#">Livros recomendados</a></h3>
        </div>
      </a>
      <a href="#">
        <div id="last-benefict">
          <img :src="BookIcon" alt="Livro">
          <h3><a href="#">Mais vendidos</a></h3>
        </div>
     </a>
    </section>
    <section id="releases">
      <h2>Lançamentos</h2>
      <ul>
        <li v-for="livro in livros" :key="livro.id">
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
</template>

<style scoped>
/* Add your home page specific styles here */
</style> 