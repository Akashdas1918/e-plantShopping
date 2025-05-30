import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/e-plantShopping",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html', // Or './public/index.html'
    },
}})