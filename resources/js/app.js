window.locale = document.getElementsByTagName('html')[0].getAttribute('lang')

import '../css/app.css'

import { createSerenityApp } from '@/Application'
import { InertiaProgress } from '@inertiajs/progress'

const appName = import.meta.env.VITE_APP_NAME

createSerenityApp({ appName: appName || 'Serenity' })

InertiaProgress.init({ color: '#7E22CE' })
