import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { serenityssr } from '@/serenity/ssrPlugin.js'

createServer(
  (page) =>
    createInertiaApp({
      title: (title) => `${title} - ${import.meta.env.VITE_APP_NAME}`,
      page,
      render: renderToString,
      resolve: (name) => require(`./pages/${name}.vue`),
      setup({ App, props, plugin }) {
        return createSSRApp({
          render: () => h(App, props),
        })
          .use(plugin)
          .use(serenityssr)
      },
    }),
  import.meta.env.VITE_SSR_PORT
)
