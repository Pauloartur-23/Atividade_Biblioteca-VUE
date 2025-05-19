<script setup>
import { useCartStore } from '../stores/store'
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import ChainOfIron2 from '/img-books/Chain_of_Iron_Volume_2.png'
import ChainOfThorns from '/img-books/Chain_of_Thorns.png'
import CityOfFallenAngels from '/img-books/City_of_Fallen_Angels.png'
import NonaTheNinth from '/img-books/Nona_the_Ninth.png'
import HarlemShuffle from '/img-books/Harlem_Shuffle.png'
import TwoOldWomen from '/img-books/Two_Old_Women.png'
import CarrieSoto from '/img-books/Carrie_Soto_Is_Back.png'
import BookLovers from '/img-books/Book_Lovers.png'

import BenefictsComponent from '@/components/BenefictsComponent.vue'


const router = useRouter()
const cartStore = useCartStore()
const favorite = ref([])

const loadFavorites = () => {
  const storedFavorites = localStorage.getItem('favorites')
  if (storedFavorites) {
    favorite.value = JSON.parse(storedFavorites)
  }
}

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorite.value))
}

const isFavorite = (id) => favorite.value.includes(id)

const toggleFavorite = (id) => {
  if (isFavorite(id)) {
    favorite.value = favorite.value.filter(favId => favId !== id)
  } else {
    favorite.value.push(id)
  }
  saveFavorites()
}

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
    autor: 'Tamsyn Muir',
    preco: 'R$16.84',
    id: '4',
    resumo: 'Uma história de mistério e magia, onde Nona deve desvendar segredos antigos para salvar seu mundo.'
  },
  {
    img: HarlemShuffle,
    titulo: 'Harlem Shuffle',
    autor: 'Colson Whitehead',
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
const currentOfferSlide = ref(0)

const nextOfferSlide = () => {
  currentOfferSlide.value = (currentOfferSlide.value + 1) % offerSlides.value.length
}

const prevOfferSlide = () => {
  currentOfferSlide.value = (currentOfferSlide.value - 1 + offerSlides.value.length) % offerSlides.value.length
}

const autoPlayInterval = ref(null)
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

const currentReleaseSlide = ref(0)
const nextReleaseSlide = () => {
  currentReleaseSlide.value = (currentReleaseSlide.value + 1) % Math.ceil(livros.length / 4)
}

const prevReleaseSlide = () => {
  currentReleaseSlide.value = (currentReleaseSlide.value - 1 + Math.ceil(livros.length / 4)) % Math.ceil(livros.length / 4)
}

const addItemLike = (livro) => {
  if (favorite.value.includes(livro.id)) {
    favorite.value = favorite.value.filter(id => id !== livro.id)
    cartStore.removeItemLike(livro.id)
  } else {
    favorite.value.push(livro.id)
    cartStore.addItemLike(livro)
  }
}

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

onMounted(() => {
  loadFavorites()
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>


<template>
  <main id="home">
    <section id="offer">
      <div class="offer-carousel-container">
        <div class="offer-carousel-wrapper">
          <div class="offer-carousel" :style="{ transform: `translateX(-${currentOfferSlide * 100}%)` }">
            <div v-for="(livro) in offerSlides" :key="livro.id" class="offer-carousel-item">
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
    <BenefictsComponent />
    <section id="releases">
      <h2>Lançamentos</h2>
      <div class="releases-carousel-container">
        <button class="carousel-control prev" @click="prevReleaseSlide">
          <span class="mdi mdi-chevron-left"></span>
        </button>
        <div class="releases-carousel-wrapper">
          <div class="releases-carousel" :style="{ transform: `translateX(-${currentReleaseSlide * 100}%)` }">
            <div class="releases-carousel-item" v-for="(group, index) in Math.ceil(livros.length / 4)" :key="index">
              <ul>
                <li v-for="livro in livros.slice(index * 4, (index + 1) * 4)" :key="livro.id">
                  <img :src="livro.img" :alt="livro.titulo">
                  <h4>{{ livro.titulo }}</h4>
                  <p>{{ livro.autor }}</p>
                  <div class="space-div">
                    <p>{{ livro.preco }}</p>
                    <span class="fa-solid fa-heart" :style="{ color: !isFavorite(livro.id) ? 'red' : '#008B8B' }"
                      @click="toggleFavorite(livro.id); addItemLike(livro)"></span>
                  </div>
                  <button @click="addToCart(livro)">
                    <span class="mdi mdi-cart"></span>
                    Comprar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button class="carousel-control next" @click="nextReleaseSlide">
          <span class="mdi mdi-chevron-right"></span>
        </button>
      </div>
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
}

/*======================
      SECTION #OFFER
  ======================*/
main #offer {
  padding: 12vw 5vw 2vw 5vw;
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
  transition: transform 0.4s ease-in-out;
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
  transition: trasform 0.4s ease-in-out;
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

main #releases .releases-carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}

main #releases .releases-carousel-wrapper {
  display: flex;
  width: 100%;
  overflow: hidden;
}

main #releases .releases-carousel {
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
}

main #releases .releases-carousel-item {
  flex: 0 0 100%;
  min-width: 100%;
  padding: 0 2vw;
  box-sizing: border-box;
}

main #releases ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

main #releases ul li {
  margin-right: 2vw;
  margin-bottom: 2vw;
  display: flex;
  flex-direction: column;
}

main #releases ul li img {
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 1vw;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

main #releases ul li h4 {
  font-size: 1.1rem;
  color: #382C2C;
  font-weight: bold;
}

main #releases ul li p {
  color: #4F4C57;
}

main #releases ul li .space-div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1vw;
}

main #releases ul li .space-div p {
  font-weight: bold;
  color: #382C2C;
}

main #releases ul li .space-div span {
  font-size: 1.2rem;
  cursor: pointer;
  transition: all ease-in-out .3s;
}

main #releases ul li button {
  padding: 1vw 2vw;
  background-color: #008B8B;
  color: white;
  border: none;
  border-radius: 2px;
  font-size: 1.1rem;
  transition: all ease-in-out .5s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;
}

main #releases ul li button:hover {
  background-color: #003f3f;
}

main #releases .carousel-control {
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

main #releases .carousel-control.prev {
  left: 0;
}

main #releases .carousel-control.next {
  right: 0;
}

main #releases .carousel-control:hover {
  background-color: #003f3f;
}
</style>

