import { homedir } from 'os'
import fs from 'fs'
import { resolve } from 'path'
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import laravel from 'laravel-vite-plugin'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import Markdown from 'vite-plugin-vue-markdown'
import anchor from 'markdown-it-anchor'
import MarkdownItContainer from 'markdown-it-container'
import MarkdownItAttrs from 'markdown-it-attrs'
import { tocPlugin } from '@mdit-vue/plugin-toc'
import { componentPlugin } from '@mdit-vue/plugin-component'
import Shiki from 'markdown-it-shiki'

let env

export default defineConfig(({ command, mode }) => {
  env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      viteCommonjs(),
      splitVendorChunkPlugin(),
      laravel({
        input: 'resources/js/app.js',
        ssr: 'resources/js/ssr.js',
        refresh: true
      }),
      Vue({
        include: [/\.vue$/, /\.md$/],
        template: {
          transformAssetUrls: {
            base: null,
            includeAbsolute: false
          }
        }
      }),
      Markdown({
        markdownItOptions: {
          html: false,
          xhtmlOut: true,
          linkify: true,
          typographer: true
        },
        markdownItSetup(md) {
          md.use(MarkdownItAttrs)
          md.use(anchor, {
            permalink: anchor.permalink.ariaHidden({
              placement: 'before'
            }),
            permalinkSymbol: '#',
            level: [2, 3]
          })
          md.use(MarkdownItContainer, 'note', {
            validate: function (params) {
              return params.trim().match(/^note\s+(.*)$/)
            },
            render: function (tokens, idx) {
              var m = tokens[idx].info.trim().match(/^note\s+(.*)$/)

              if (tokens[idx].nesting === 1) {
                // opening tag
                return (
                  '<div class="custom-block note">\n' +
                  '  <h4>' +
                  md.utils.escapeHtml(m[1]).toUpperCase() +
                  '</h4>\n'
                )
              } else {
                // closing tag
                return '</div>\n'
              }
            }
          })
          md.use(MarkdownItContainer, 'info', {
            validate: function (params) {
              return params.trim().match(/^info\s+(.*)$/)
            },
            render: function (tokens, idx) {
              var m = tokens[idx].info.trim().match(/^info\s+(.*)$/)

              if (tokens[idx].nesting === 1) {
                // opening tag
                return (
                  '<div class="custom-block info">\n' +
                  '  <h4>' +
                  md.utils.escapeHtml(m[1]).toUpperCase() +
                  '</h4>\n'
                )
              } else {
                // closing tag
                return '</div>\n'
              }
            }
          })
          md.use(MarkdownItContainer, 'warning', {
            validate: function (params) {
              return params.trim().match(/^warning\s+(.*)$/)
            },
            render: function (tokens, idx) {
              var m = tokens[idx].info.trim().match(/^warning\s+(.*)$/)

              if (tokens[idx].nesting === 1) {
                // opening tag
                return (
                  '<div class="custom-block warning">\n' +
                  '  <h4>' +
                  md.utils.escapeHtml(m[1]).toUpperCase() +
                  '</h4>\n'
                )
              } else {
                // closing tag
                return '</div>\n'
              }
            }
          })
          md.use(MarkdownItContainer, 'tip', {
            validate: function (params) {
              return params.trim().match(/^tip\s+(.*)$/)
            },
            render: function (tokens, idx) {
              var m = tokens[idx].info.trim().match(/^tip\s+(.*)$/)

              if (tokens[idx].nesting === 1) {
                // opening tag
                return (
                  '<div class="custom-block tip">\n' +
                  '  <h4>' +
                  md.utils.escapeHtml(m[1]).toUpperCase() +
                  '</h4>\n'
                )
              } else {
                // closing tag
                return '</div>\n'
              }
            }
          })
          md.use(MarkdownItContainer, 'danger', {
            validate: function (params) {
              return params.trim().match(/^danger\s+(.*)$/)
            },
            render: function (tokens, idx) {
              var m = tokens[idx].info.trim().match(/^danger\s+(.*)$/)

              if (tokens[idx].nesting === 1) {
                // opening tag
                return (
                  '<div class="custom-block danger">\n' +
                  '  <h4>' +
                  md.utils.escapeHtml(m[1]).toUpperCase() +
                  '</h4>\n'
                )
              } else {
                // closing tag
                return '</div>\n'
              }
            }
          })
          md.use(tocPlugin, {
            containerTag: 'ul',
            containerClass: 'lg:hidden toc'
          })
          md.use(componentPlugin)
          md.use(Shiki, {
            theme: 'css-variables'
          })
        },
        wrapperClasses: ''
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true
      }),
      AutoImport({
        include: [
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        imports: [
          'vue',
          'pinia',
          '@vueuse/core',
          {
            '@inertiajs/vue3': ['router', 'useForm', 'usePage', 'useRemember'],
            composable: [
              'useTrans',
              'useRoutes',
              'useDayjs',
              'useClientOnly',
              'usePermissions'
            ],
            store: ['useCoreStore', 'useDocStore']
          }
        ],
        dts: 'auto-imports.d.ts'
      }),
      Components({
        dirs: ['resources/js/components'],
        resolvers: [
          HeadlessUiResolver(),
          IconsResolver({
            prefix: 'icon',
            enabledCollections: ['heroicons-outline', 'heroicons-solid'],
            alias: {
              outline: 'heroicons-outline',
              solid: 'heroicons-solid'
            }
          })
        ],
        dts: 'components.d.ts'
      })
    ],
    ssr: {
      noExternal: ['@inertiajs/server']
    },
    optimizeDeps: {
      include: ['vue', 'pinia', '@inertiajs/vue3', '@headlessui/vue', 'axios'],
      esbuildOptions: {
        target: 'esnext'
      }
    },
    resolve: {
      alias: {
        '@/': resolve(__dirname, 'resources/js/'),
        '@/storage': resolve(__dirname, 'storage/app/public'),
        ziggy: resolve(__dirname, 'vendor/tightenco/ziggy/dist/vue.es.js'),
        zora: resolve(__dirname, 'vendor/jetstreamlabs/zora/dist/index.js'),
        tableTranslations: resolve(__dirname, 'resources/js/translations.js'),
        composable: resolve(__dirname, 'resources/js/composable/index.js'),
        store: resolve(__dirname, 'resources/js/store/index.js')
      }
    },
    server: command === 'serve' ? makeServer() : null
  }
})

export const makeServer = () => {
  if (env.VITE_HTTPS == 'true') {
    const certPath = resolve(homedir(), env.VITE_CERTPATH)

    return {
      https: {
        key: fs.readFileSync(resolve(certPath, `${env.VITE_DOMAIN}.key`)),
        cert: fs.readFileSync(resolve(certPath, `${env.VITE_DOMAIN}.crt`))
      },
      host: env.VITE_DOMAIN
    }
  } else {
    return {
      https: false,
      server: {
        hmr: {
          host: '0.0.0.0'
        },
        watch: {
          usePolling: true
        }
      }
    }
  }
}
