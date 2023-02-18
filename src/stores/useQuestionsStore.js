import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore({
  id: 'questionStore',

  state: () => ({
    titles: ['Тестовый вопросикс от пользователя', 'Тестовый вопросик 2'],
  }),

  actions: {
    addQuestion() {
        return null;
    }
  }
})