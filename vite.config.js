// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    define: {
      'import.meta.env.DEV': true // Set DEV to true for development
    }
  }

  if (command !== 'serve') {
    config.base = '/leceipt-exercies/'
  }

  return config
})