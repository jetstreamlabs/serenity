import { createPinia } from 'pinia'
import { Head, Link } from '@inertiajs/vue3'
import mitt from 'mitt'
import axios from 'axios'
import lodash from 'lodash'
import Pusher from 'pusher-js'
import Echo from 'laravel-echo'
import { ZiggyVue } from 'ziggy'
import { Ziggy } from '../ziggy.js'
import { ZoraVue } from 'zora'
import { Zora } from '../zora.js'
import ClickOutside from 'vue-click-outside'

//prettier-ignore
export const serenity = {
	install(app) {
		axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.defaults.withCredentials = true

    const pinia = createPinia()

    const echo = new Echo({
      broadcaster: 'pusher',
      key: import.meta.env.VITE_PUSHER_APP_KEY,
      wsHost: import.meta.env.VITE_PUSHER_HOST,
      wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
      wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
      forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
      cluster: '',
      enabledTransports: ['ws', 'wss'],
      encrypted: true,
      disableStats: true,
    })

    const is_null = (obj) => {
      return !obj && typeof obj === 'object'
    }

    const isObject = (obj) => {
      return obj === Object(obj)
    }

    app.provide('emitter', mitt())
    app.provide('echo', echo)
    app.provide('axios', axios)
    app.provide('_', lodash)
    app.provide('isObject', isObject)
    app.provide('is_null', is_null)

    app.directive('click-outside', ClickOutside)

    window.Pusher = Pusher
		window.axios = axios
    window._ = lodash

    app.use(ZiggyVue, Ziggy)
    app.use(ZoraVue, Zora)
    app.use(pinia)

		app.component('Head', Head)
		app.component('Link', Link)
	}
}
