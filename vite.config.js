import dotenv from 'dotenv'
import expandDotenv from 'dotenv-expand'
import { homedir } from 'os'
import fs from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'

const env = expandDotenv.expand(dotenv.config()).parsed

export default defineConfig(({ command }) => {
  return {
    plugins: [
      laravel({
        input: 'resources/js/app.js',
        ssr: 'resources/js/ssr.js',
        refresh: true,
      }),
      vue({
        template: {
          transformAssetUrls: {
            base: null,
            includeAbsolute: false,
          },
        },
      }),
    ],
    ssr: {
      noExternal: ['vue', '@protonemedia/laravel-splade'],
    },
    resolve: {
      alias: {
        vue: resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
        splade: resolve(__dirname, 'node_modules/@protonemedia/laravel-splade/dist/protone-media-laravel-splade.js'),
      },
    },
    server: command === 'serve' ? makeServer(command) : null,
  }
})

export const makeServer = (command) => {
  if (env.VITE_HTTPS == 'true') {
    const certPath = resolve(homedir(), env.VITE_CERTPATH)

    return {
      https: {
        key: fs.readFileSync(resolve(certPath, `${env.VITE_DOMAIN}.key`)),
        cert: fs.readFileSync(resolve(certPath, `${env.VITE_DOMAIN}.crt`)),
      },
      host: env.VITE_DOMAIN,
    }
  }

  return {
    https: false,
  }
}
