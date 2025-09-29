// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/React_SyrianVisions/', // ← bytt til nøyaktig repo-namn
})
