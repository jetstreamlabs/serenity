import './bootstrap'
import '../css/app.css'

import Switcher from './components/ThemeSwitcher.vue'

import { createApp } from 'vue'
import { renderSpladeApp, SpladePlugin } from 'splade'

const el = document.getElementById('app')

createApp({
  render: renderSpladeApp({ el }),
})
  .use(SpladePlugin, {
    max_keep_alive: 20,
    transform_anchors: false,
    progress_bar: true,
  })
  .component('Switcher', Switcher)
  .mount(el)
