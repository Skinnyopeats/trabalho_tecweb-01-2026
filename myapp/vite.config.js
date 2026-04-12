import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        adicionar: resolve(__dirname, 'adicionar.html'),
        consultar: resolve(__dirname, 'consultar.html'),
      }
    }
  }
})
