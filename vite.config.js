// Configuración de Vite para el proyecto Vue 3
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    // Habilita el soporte de componentes de un solo archivo (.vue)
    vue(),
  ],
  resolve: {
    alias: {
      // Alias para importaciones absolutas desde src/
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    // Entorno de pruebas que simula el DOM
    environment: 'jsdom',
  },
})
