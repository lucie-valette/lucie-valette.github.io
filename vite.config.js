import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: './', // IMPORTANT : permet de trouver les fichiers JS et CSS
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    outDir: 'docs', // IMPORTANT : crée le dossier que GitHub Pages utilise
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
