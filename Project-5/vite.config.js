import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  theme:{
    extend:{
      gray:"#5A5959",
      yellow:"#FFEAAE",
      "dark-yellow":"#FCCA#F",
      orange:"#F6820C"
    }
  }
})