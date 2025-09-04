import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import * as path from "path"   // ✅ this is the correct import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],

  server: {
    host: '0.0.0.0',
    port: 5177,
    strictPort: true,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },


})
