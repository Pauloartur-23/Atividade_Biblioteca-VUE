<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import throttle from 'lodash.throttle'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

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
  <HeaderComponent />
  <router-view></router-view>
  <FooterComponent />
</template>

<style scoped>
</style>
