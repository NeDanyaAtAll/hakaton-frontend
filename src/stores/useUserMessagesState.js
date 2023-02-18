import { defineStore } from 'pinia'

export const useUserMessagesState = defineStore({
  id: 'userMessages',
  state: () => ({
    messages: [],
    error: null
  }),

  actions: {
    addUserMessage(event) {
      this.error = null
      let userInput = document.querySelector('.user-message-input');
      let value = userInput.value;
      if(value.length) {
        this.messages.push(value);
        event.preventDefault();
        return userInput.value = '';
      } else {
        event.preventDefault();
          return this.error = 'Отправлено пустое сообщение'
      }
    }
  }
})