import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/James-Pratt-Conductor/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})
