import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    favorites: [],
    discount: 0,
    discountCode: ''
  }),

  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    subtotal: (state) => state.items.reduce((total, item) => {
      const price = parseFloat(item.preco.replace('R$', ''))
      return total + (price * item.quantity)
    }, 0),
    totalPrice: (state) => {
      const subtotal = state.items.reduce((total, item) => {
        const price = parseFloat(item.preco.replace('R$', ''))
        return total + (price * item.quantity)
      }, 0)
      return subtotal * (1 - state.discount)
    },
    isFavorite: (state) => (itemId) => state.favorites.includes(itemId)
  },

  actions: {
    addItem(item) {
      const existingItem = this.items.find(i => i.id === item.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({ ...item, quantity: 1 })
      }
    },

    removeItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId)
    },

    updateQuantity(itemId, newQuantity) {
      const item = this.items.find(i => i.id === itemId)
      if (item) {
        item.quantity = newQuantity
      }
    },

    clearCart() {
      this.items = []
    },

    toggleFavorite(itemId) {
      const index = this.favorites.indexOf(itemId)
      if (index === -1) {
        this.favorites.push(itemId)
      } else {
        this.favorites.splice(index, 1)
      }
    },

    applyCoupon(code) {
      if (code === 'Kennedy10') {
        this.discount = 0.1
        this.discountCode = code
      }
    },

    removeCoupon() {
      this.discount = 0
      this.discountCode = ''
    }
  }
}) 