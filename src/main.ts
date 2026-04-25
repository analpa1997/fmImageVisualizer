/**
 * main.ts - Punto de entrada de la aplicación Vue
 */

import { createApp } from 'vue'
import App from './App.vue'
import './assets/estilos/global.css'

const aplicacion = createApp(App)

aplicacion.mount('#app')
