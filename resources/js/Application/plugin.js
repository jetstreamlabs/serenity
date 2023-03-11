import { createStore } from 'vuex'
import { Head, Link } from '@inertiajs/inertia-vue3'
import mitt from 'mitt'
import core from './store/core.js'
import axios from 'axios'
import lodash from 'lodash'
import Pusher from 'pusher-js'
import Echo from 'laravel-echo'
import { ZiggyVue } from 'ziggy'
import { Ziggy } from '../ziggy.js'
import { ZoraVue } from 'zora'
import { Zora } from '../zora.js'

//prettier-ignore
export const serenity = {
	install(app) {
		axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
		axios.defaults.withCredentials = true

    // const echo = new Echo({
    //   broadcaster: 'pusher',
    //   key: import.meta.env.VITE_PUSHER_APP_KEY,
    //   wsHost: import.meta.env.VITE_PUSHER_HOST,
    //   wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
    //   wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
    //   forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
    //   cluster: '',
    //   enabledTransports: ['ws', 'wss'],
    //   encrypted: true,
    //   disableStats: true,
    // })

    app.provide('emitter', mitt())
    //app.provide('echo', echo)
    app.provide('axios', axios)
    app.provide('_', lodash)

    //window.Pusher = Pusher
		window.axios = axios
		window._ = lodash

		const store = createStore({
			modules: { core }
    })

    app.use(ZiggyVue, Ziggy)
    app.use(ZoraVue, Zora)
		app.use(store)

		app.component('Head', Head)
		app.component('Link', Link)
	}
}
