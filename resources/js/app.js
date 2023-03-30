window.locale = document.getElementsByTagName('html')[0].getAttribute('lang')

import '../css/app.css'

import { createSerenityApp } from '@/serenity'

const appName = import.meta.env.VITE_APP_NAME

createSerenityApp({ appName: appName || 'Serenity' })
