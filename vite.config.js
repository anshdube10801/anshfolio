import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable external access
    allowedHosts: ['bbbe-2409-40c0-7c-13d4-41a1-29f8-866e-c4d2.ngrok-free.app'], // Add the specific ngrok host
  },
})
