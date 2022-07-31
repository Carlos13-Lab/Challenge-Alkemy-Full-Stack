import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@icons': path.resolve(__dirname, './src/assets/icons'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
    },
  },
  plugins: [react()]
})
