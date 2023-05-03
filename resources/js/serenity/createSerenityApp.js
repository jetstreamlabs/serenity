import { createSSRApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { serenity } from './plugin.js'
import DocLayout from '../components/Layouts/DocLayout.vue'
import DefaultLayout from '../components/Layouts/MainLayout.vue'

const pages = import.meta.glob('../pages/**/*.{vue,md}', { eager: true })

export default async function createSerenityApp({ appName }) {
  return createInertiaApp({
    title: title => `${title} - ${appName}`,
    resolve: name => {
      if (name.startsWith('Docs/')) {
        let page = pages[`../pages/${name}.md`]
        page.default.layout = DocLayout

        return page
      } else {
        let page = resolvePageComponent(`../pages/${name}.vue`, pages)

        return page
      }
    },
    setup({ el, App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) })
        .use(plugin)
        .use(serenity)
        .mount(el)
    },
    progress: {
      color: '#00b4e2'
    }
  })
}
