import { defineStore } from 'pinia'

export const useUserMessagesState = defineStore({
  id: 'userMessages',

  state: () => ({
    text: 'mic',
    messages: [],
    error: null
  }),

  actions: {
    change(value) {
        return value.length ? this.text = 'arrow_upward' : this.text = 'mic'
    },

    addUserMessage(event) {
      this.error = null
      let userInput = document.querySelector('.user-message-input');
      let container = document.querySelector('.chat-body-container')
      let value = userInput.value.trim();
      if(value.length) {
        event.preventDefault();
        this.messages.push(value);
        let xH = container.scrollHeight; 
        container.scrollTo(0, xH);
        userInput.value = ''
        this.text = 'mic'
      } else {
        event.preventDefault();
        this.text = 'mic'
        return this.error = 'Отправлено пустое сообщение'
      }
    }
  }
})