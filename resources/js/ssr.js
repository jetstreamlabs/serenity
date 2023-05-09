import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from 'ziggy'
import { Ziggy } from './ziggy.js'
import { ZoraSSR } from 'zora'
import { Zora } from './zora.js'
import { ssrPlugin } from './serenity/ssrPlugin.js'
import DocLayout from './components/Layouts/DocLayout.vue'

const pages = import.meta.glob('./pages/**/*.{vue,md}', { eager: true })
const appName = import.meta.env.VITE_APP_NAME || 'Serenity'

createServer(
  page =>
    createInertiaApp({
      title: title => `${title} - ${appName}`,
      page,
      render: renderToString,
      resolve: async name => {
        let component

        try {
          component = await resolvePageComponent(`./pages/${name}.vue`, pages)
        } catch (e) {
          component = await resolvePageComponent(`./pages/${name}.md`, pages)
          component.default.layout = DocLayout
        }

        return component
      },
      setup({ App, props, plugin }) {
        return createSSRApp({
          render: () => h(App, props)
        })
          .use(plugin)
          .use(ssrPlugin)
          .use(ZoraSSR, Zora)
          .use(ZiggyVue, Ziggy)
      }
    }),
  import.meta.env.VITE_SSR_PORT
)
