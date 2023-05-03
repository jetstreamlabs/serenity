import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { serenityssr } from '@/serenity/ssrPlugin.js'
import DocLayout from './components/Layouts/DocLayout.vue'

const pages = import.meta.glob('./pages/**/*.{vue,md}', { eager: true })
const appName = import.meta.env.VITE_APP_NAME

createServer(
  page =>
    createInertiaApp({
      title: title => `${title} - ${appName}`,
      page,
      render: renderToString,
      resolve: name => {
        if (name.startsWith('Docs/')) {
          let page = pages[`./pages/${name}.md`]
          page.default.layout = DocLayout

          return page
        } else {
          let page = resolvePageComponent(`./pages/${name}.vue`, pages)

          return page
        }
      },
      setup({ App, props, plugin }) {
        return createSSRApp({
          render: () => h(App, props)
        })
          .use(plugin)
          .use(serenityssr)
      }
    }),
  import.meta.env.VITE_SSR_PORT
)
