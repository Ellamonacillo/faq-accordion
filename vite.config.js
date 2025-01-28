import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/faq-accordion.github.io/', 
  build: {
    outDir: 'dist',
  },
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
