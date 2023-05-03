import { createPinia } from 'pinia'
import { Head, Link } from '@inertiajs/vue3'
import mitt from 'mitt'
import dayjs from 'dayjs'
import axios from 'axios'
import lodash from 'lodash'
import { ZiggyVue } from 'ziggy'
import { Ziggy } from '../ziggy.js'
import { ZoraVue } from 'zora'
import { Zora } from '../zora.js'

//prettier-ignore
export const serenityssr = {
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
    app.provide('_', lodash)
    app.provide('isObject', isObject)
    app.provide('is_null', is_null)

    app.use(ZiggyVue, Ziggy)
    app.use(ZoraVue, Zora)
		app.use(pinia)

		app.component('Head', Head)
		app.component('Link', Link)
	}
}
