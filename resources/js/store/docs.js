import useRoutes from '../Composable/useRoutes.js'
import { defineStore } from 'pinia'

export const useDocStore = defineStore({
  id: 'docs',

  state: () => ({
    current: '',
    versions: [],
    navigation: [],
  }),

  actions: {
    fetchNavigation() {
      axios.get(useRoutes('api.menu.fetch')).then((response) => {
        this.current = response.data.versions.current
        this.versions = response.data.versions.all
        this.navigation = response.data.navigation

        return Promise.resolve(response.data)
      })
    },
  },

  getters: {
    getCurrentVersion: (state) => {
      return state.current
    },
    getVersions: (state) => {
      return state.versions
    },
    getNavigation: (state) => {
      return state.navigation
    },
  },
})
