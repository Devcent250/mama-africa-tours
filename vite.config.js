import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mama-africa-tours/',  // Set the repository name here
  plugins: [react()],
})
