import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: '/adbang/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ['jquery'],
  },
  server: {
    mimeTypes: {
      '.ttf': 'font/ttf',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2',
    },
  },
})
