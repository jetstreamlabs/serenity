import { defineStore } from 'pinia'

export const useCoreStore = defineStore({
  id: 'core',

  state: () => ({
    sidebarOpen: false,
  }),

  actions: {
    toggleSidebar(toggle) {
      this.sidebarOpen = toggle
    },

    fetchSomething() {
      // fetch something from the api
      // this.something = response.data
    },
  },

  getters: {
    getSidebarOpen: (state) => {
      return state.sidebarOpen
    },
  },
})
