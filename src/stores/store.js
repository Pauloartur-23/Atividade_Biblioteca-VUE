import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    favorites: [],
    discount: 0,
    discountCode: ''
  }),

  getters: {
    subtotal(state) {
      return state.items.reduce((total, item) => {
        const price = parseFloat(item.preco.replace('R$', '').replace(',', '.'))
        return total + price * item.quantity
      }, 0)
    },

    totalPrice(state) {
      return this.subtotal * (1 - state.discount)
    }
  },

  actions: {
    addItem(item) {
      const existingItem = this.items.find(i => i.id === item.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...item, quantity: 1 })
      }
    },

    removeItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId)
    },

    updateQuantity(itemId, newQuantity) {
      const item = this.items.find(i => i.id === itemId)
      if (item && newQuantity > 0) {
        item.quantity = newQuantity
      }
    },

    applyCoupon(code) {
      const coupons = {
        Kennedy10: 0.1,
        Eduardo20: 0.2
      }
      if (coupons[code]) {
        this.discount = coupons[code]
        this.discountCode = code
      }
    },

    removeCoupon() {
      this.discount = 0
      this.discountCode = ''
    },

    addItemLike(livro) {
      const exists = this.favorites.find(fav => fav.id === livro.id)
      if (!exists) {
        this.favorites.push({ ...livro, isFavorite: true })
      }
    },

    removeItemLike(favoriteId) {
      this.favorites = this.favorites.filter(fav => fav.id !== favoriteId)
    },

    toggleFavorite(favoriteId) {
      const item = this.favorites.find(fav => fav.id === favoriteId)
      if (item) {
        item.isFavorite = !item.isFavorite
      }
    }
  }
})