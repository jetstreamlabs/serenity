import { createPinia } from 'pinia'
import { Head, Link } from '@inertiajs/vue3'
import mitt from 'mitt'
import dayjs from 'dayjs'
import axios from 'axios'

//prettier-ignore
export const ssrPlugin = {
	install(app) {
		axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
		axios.defaults.withCredentials = true

    const pinia = createPinia()

    const is_null = (obj) => {
      return !obj && typeof obj === 'object'
    }

    const isObject = (obj) => {
      return obj === Object(obj)
    }

	  app.provide('emitter', mitt())
    app.provide('dayjs', dayjs)
    app.provide('axios', axios)
    app.provide('isObject', isObject)
    app.provide('is_null', is_null)

		app.use(pinia)

		app.component('Head', Head)
		app.component('Link', Link)
	}
}
