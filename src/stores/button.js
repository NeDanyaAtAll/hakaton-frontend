import { defineStore } from 'pinia'

export const buttonStore = defineStore({
  id: 'button',
  state: () => ({
    text: 'mic',
  }),

  actions: {
    change(value) {
        return value.length ? this.text = 'arrow_upward' : this.text = 'mic'
    }
  }
})