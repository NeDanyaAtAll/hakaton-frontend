import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore({
  id: 'questionStore',

  state: () => ({
    titles: ['Что должно быть в видео-визитке?'],
  }),

  actions: {
    addQuestion() {
        return null;
    }
  }
})