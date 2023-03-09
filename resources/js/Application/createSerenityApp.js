import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { serenity } from '@/Application/plugin.js'
import DefaultLayout from '../Components/Layouts/MainLayout.vue'
import { modal } from 'momentum-modal'

const pages = import.meta.glob('../Pages/**/*.vue')

export default async function createSerenityApp({ appName }) {
  return createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // resolve: (name) => {
    //   const page = pages[`../Pages/${name}.vue`]

    //   if (!page) {
    //     throw new Error(`Unknown page ${name}. Is it located in resources/js/Pages with a .vue extension?`)
    //   }

    //   page.layout = page.layout || DefaultLayout

    //   return page().then((module) => module.default)
    // },
    resolve: (name) => resolvePageComponent(`../Pages/${name}.vue`, pages),
    setup({ el, app, props, plugin }) {
      return createApp({ render: () => h(app, props) })
        .use(modal, {
          resolve: (name) => resolvePageComponent(`../Pages/${name}.vue`, pages),
        })
        .use(plugin)
        .use(serenity)
        .mount(el)
    },
  })
}
