import { defineStore } from 'pinia'

export const useCoreStore = defineStore({
  id: 'core',

  state: () => ({
    // something: ''
  }),

  actions: {
    fetchSomething() {
      // fetch something from the api
      // this.something = response.data
    },
  },

  getters: {
    getSomething: (state) => {
      // return state.something
    },
  },
})
