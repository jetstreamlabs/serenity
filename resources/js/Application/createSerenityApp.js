import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { serenity } from '@/Application/plugin.js'

const pages = import.meta.glob('../Pages/**/*.vue')

export default async function createSerenityApp({ appName }) {
  return createInertiaApp({
    progress: {
      color: '#00b4e2',
    },
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`../Pages/${name}.vue`, pages),
    setup({ el, App, props, plugin }) {
      return createApp({ render: () => h(App, props) })
        .use(plugin)
        .use(serenity)
        .mount(el)
    },
  })
}
