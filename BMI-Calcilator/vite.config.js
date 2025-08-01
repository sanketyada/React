import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: "/React_mini_Project/",
  plugins: [
    tailwindcss(),
  ],
})