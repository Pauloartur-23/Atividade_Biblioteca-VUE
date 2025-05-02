<script setup>
import { useCartStore } from '../stores/store'
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import ChainOfIron2 from '../components/img-books/Chain_of_Iron_Volume_2.png'
import ChainOfThorns from '../components/img-books/Chain_of_Thorns.png'
import CityOfFallenAngels from '../components/img-books/City_of_Fallen_Angels.png'
import NonaTheNinth from '../components/img-books/Nona_the_Ninth.png'
import HarlemShuffle from '../components/img-books/Harlem_Shuffle.png'
import TwoOldWomen from '../components/img-books/Two_Old_Women.png'
import CarrieSoto from '../components/img-books/Carrie_Soto_Is_Back.png'
import BookLovers from '../components/img-books/Book_Lovers.png'

const router = useRouter()
const cartStore = useCartStore()
const favorite = ref([])
const currentOfferSlide = ref(0)
const autoPlayInterval = ref(null)

const livros = [
  {
    img: ChainOfIron2,
    titulo: 'Chain of Iron: Volume 2',
    autor: 'Cassandra Clare',
    preco: 'R$23.24',
    id: '1',
    resumo: 'A continuação da saga Shadowhunter, onde os personagens enfrentam novos desafios e mistérios em um mundo repleto de magia e perigo.'
  },
  {
    img: ChainOfThorns,
    titulo: 'Chain of Thorns',
    autor: 'Cassandra Clare',
    preco: 'R$23.24',
    id: '2',
    resumo: 'O último livro da trilogia The Last Hours, onde os Shadowhunters lutam contra forças sombrias para salvar seu mundo.'
  },
  {
    img: CityOfFallenAngels,
    titulo: 'City of Fallen Angels',
    autor: 'Cassandra Clare',
    preco: 'R$13.94',
    id: '3',
    resumo: 'Quarto livro da série The Mortal Instruments, onde Clary e Jace enfrentam novos desafios em sua jornada de amor e aventura.'
  },
  {
    img: NonaTheNinth,
    titulo: 'Nona the Ninth',
    autor: 'Cassandra Clare',
    preco: 'R$16.84',
    id: '4',
    resumo: 'Uma história de mistério e magia, onde Nona deve desvendar segredos antigos para salvar seu mundo.'
  },
  {
    img: HarlemShuffle,
    titulo: 'Harlem Shuffle',
    autor: 'Cassandra Clare',
    preco: 'R$26.92',
    id: '5',
    resumo: 'Uma história envolvente sobre família, crime e redenção no Harlem dos anos 1960.'
  },
  {
    img: TwoOldWomen,
    titulo: 'Two Old Women',
    autor: 'Velma Wallis',
    preco: 'R$13.95',
    id: '6',
    resumo: 'Uma história inspiradora sobre duas mulheres idosas que desafiam as expectativas e encontram força na adversidade.'
  },
  {
    img: CarrieSoto,
    titulo: 'Carrie Soto Is Back',
    autor: 'Taylor Jenkins Reid',
    preco: 'R$26.04',
    id: '7',
    resumo: 'A história de uma ex-campeã de tênis que volta às quadras para provar que ainda tem o que é preciso para vencer.'
  },
  {
    img: BookLovers,
    titulo: 'Book Lovers',
    autor: 'Emily Henry',
    preco: 'R$15.81',
    id: '8',
    resumo: 'Uma história romântica sobre duas pessoas que descobrem o amor através de sua paixão compartilhada por livros.'
  }
]

const offerSlides = ref(livros)

const nextOfferSlide = () => {
  currentOfferSlide.value = (currentOfferSlide.value + 1) % offerSlides.value.length
}

const prevOfferSlide = () => {
  currentOfferSlide.value = (currentOfferSlide.value - 1 + offerSlides.value.length) % offerSlides.value.length
}

const startAutoPlay = () => {
  stopAutoPlay()
  autoPlayInterval.value = setInterval(nextOfferSlide, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})

const addToCart = (livro) => {
  const livroParaCarrinho = {
    id: livro.id,
    titulo: livro.titulo,
    autor: livro.autor,
    preco: livro.preco,
    img: livro.img,
    quantity: 1
  }
  cartStore.addItem(livroParaCarrinho)
  router.push('/carrinho')
}

const toggleFavorite = (livro) => {
  if (favorite.value.includes(livro.id)) {
    favorite.value = favorite.value.filter(id => id !== livro.id)
    cartStore.removeItemLike(livro.id)
  } else {
    favorite.value.push(livro.id)
    cartStore.addItemLike(livro)
  }
}

const isFavorite = (livroId) => favorite.value.includes(livroId)
</script>

<template>
  <main id="home">
    <section id="offer">
      <div class="offer-carousel-container">
        <div class="offer-carousel-wrapper">
          <div class="offer-carousel" :style="{ transform: `translateX(-${currentOfferSlide * 100}%)` }">
            <div v-for="(livro, index) in offerSlides" :key="livro.id" class="offer-carousel-item">
              <div class="offer-content">
                <button class="destaques-button">Destaques de Abril</button>
                <h1>{{ livro.titulo }}</h1>
                <p>{{ livro.autor }}</p>
                <p class="book-resumo">{{ livro.resumo }}</p>
                <button class="buy-button" @click="addToCart(livro)">
                  <span class="mdi mdi-cart"></span>
                  Comprar
                </button>
              </div>
              <div class="offer-image-container">
                <img :src="livro.img" :alt="livro.titulo">
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control prev" @click="prevOfferSlide">
          <span class="mdi mdi-chevron-left"></span>
        </button>
        <button class="carousel-control next" @click="nextOfferSlide">
          <span class="mdi mdi-chevron-right"></span>
        </button>
      </div>
      <div class="carousel-dots">
        <button v-for="i in offerSlides.length" :key="i" :class="{ active: currentOfferSlide === i - 1 }"
          @click="currentOfferSlide = i - 1">
        </button>
      </div>
    </section>
    <section id="benefict">
      <a href="#">
        <div>
          <span class="mdi mdi-truck"></span>
          <h3>Frete grátis para SC</h3>
        </div>
      </a>
      <a href="#">
        <div>
          <span class="mdi mdi-star"></span>
          <h3>Livros recomendados</h3>
        </div>
      </a>
      <a href="#">
        <div>
          <span class="mdi mdi-book-open-page-variant"></span>
          <h3>Mais vendidos</h3>
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
            <span v-if="!isFavorite(livro.id)" class="fa-solid fa-heart" :style="{ color: '#008B8B' }"
              @click="toggleFavorite(livro)"></span>
            <span v-else class="mdi mdi-heart" :style="{ color: 'red' }"
              style="font-size: 1.5rem; margin: -0.5vw 0.5vw -0.5vw 0;" @click="toggleFavorite(livro)"></span>
          </div>
          <button @click="addToCart(livro)">
            <span class="mdi mdi-cart"></span>
            Comprar
          </button>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
/*======================
          MAIN #HOME
  ======================*/
main#home {
  display: block;
  background-color: white;
  padding-top: 20vh;
}

/*======================
      SECTION #OFFER
  ======================*/
main #offer {
  padding: 2vw 5vw;
  position: relative;
}

main #offer .offer-carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 2vw 10vw;
}

main #offer .offer-carousel-wrapper {
  display: flex;
  width: 100%;
  overflow: hidden;
}

main #offer .offer-carousel {
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
}

main #offer .offer-carousel-item {
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

main #offer .offer-content {
  flex: 1;
  text-align: left;
}

main #offer .destaques-button {
  background-color: white;
  border: 2px #008B8B solid;
  border-radius: 2px;
  color: #008B8B;
  padding: 0.5vw 1vw;
  margin-bottom: 1vw;
  transition: all ease-in-out .5s;
}

main #offer .destaques-button:hover {
  border: 2px #003f3f solid;
  color: #003f3f;
}

main #offer .offer-content h1 {
  font-weight: bold;
  color: #382C2C;
  font-size: 2.5rem;
  margin-bottom: 1vw;
}

main #offer .offer-content p {
  color: #4D4C4C;
  margin-bottom: 1vw;
}

main #offer .book-resumo {
  color: #4D4C4C;
  margin-bottom: 2vw;
  line-height: 1.6;
  font-size: 1.1rem;
}

main #offer .buy-button {
  background-color: #008B8B;
  color: white;
  border: none;
  padding: 1vw 2vw;
  border-radius: 2px;
  font-size: 1.1rem;
  transition: all ease-in-out .5s;
  display: flex;
  align-items: center;
  gap: 0.5vw;
}

main #offer .buy-button:hover {
  background-color: #003f3f;
}

main #offer .offer-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

main #offer .offer-image-container img {
  max-width: 300px;
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: contain;
}

main #offer .carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 139, 139, 0.7);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
  z-index: 10;
}

main #offer .carousel-control.prev {
  left: 0;
}

main #offer .carousel-control.next {
  right: 0;
}

main #offer .carousel-control:hover {
  background-color: #003f3f;
}

main #offer .carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 1vw;
  gap: 0.5vw;
}

main #offer .carousel-dots button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #008B8B;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
}

main #offer .carousel-dots button.active {
  background-color: #003f3f;
}

main #offer .carousel-dots button:hover {
  background-color: #003f3f;
}

/*======================
     SECTION #BENEFICT
  ======================*/
main #benefict {
  display: flex;
  justify-content: space-between;
  padding: 2vw 10vw;
  background-color: #008B8B;
  box-shadow: 0 0 2px 0 #000000;
  border: 1px #003f3f solid;
}

main #benefict div {
  display: flex;
  background-color: #003f3f;
  padding: 0.2vw 2vw;
  border-radius: 30px;
  color: white;
  transition: all ease-in-out .5s;
  border: 2px #003f3f solid;
}

main #benefict div span {
  font-size: 2.5rem;
}

main #benefict div h3 {
  margin-top: 1vw;
  font-size: 1.5rem;
  padding-left: 1vw;
  font-weight: bold;
  transition: all ease-in-out .5s;
}

main #benefict a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}

/*======================
     SECTION #RELEASES
  ======================*/
main #releases {
  padding: 5vw 8vw 5vw 10vw;
}

main #releases h2 {
  font-size: 2rem;
  color: #231F2D;
  margin-left: 2vw;
  font-weight: bold;
  margin-bottom: 2vw;
}

main #releases ul {
  display: flex;
  flex-wrap: wrap;
}

main #releases ul li {
  margin-right: 1vw;
  margin-bottom: 5vw;
}

main #releases ul li h4 {
  font-size: 1.3rem;
  color: #382C2C;
  font-weight: bold;
}

main #releases ul li p {
  color: #4F4C57;
}

main #releases ul li #space-div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5vw;
}

main #releases ul li #space-div p {
  font-weight: bold;
  color: #382C2C;
}

main #releases ul li #space-div span {
  margin-right: 0.5vw;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all ease-in-out .3s;
}

main #releases button {
  padding: 1vw 0;
  background-color: #008B8B;
  color: white;
  border: none;
  border-radius: 2px;
  width: 100%;
  font-size: 1.1rem;
  transition: all ease-in-out .5s;
}

main #releases button:hover {
  background-color: #003f3f;
}
</style>