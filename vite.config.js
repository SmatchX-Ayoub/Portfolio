import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/portfolio/", // ⚠️ IMPORTANT : nom EXACT du repo (en minuscule)

  plugins: [react()],

  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000
  },

  server: {
    port: 3000,
    open: true,
  }
})