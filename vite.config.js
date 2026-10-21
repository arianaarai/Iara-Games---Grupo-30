import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        loja: resolve(import.meta.dirname, 'pages/loja.html'),
        login: resolve(import.meta.dirname, 'pages/login.html'),
      },
    },
  },
})
