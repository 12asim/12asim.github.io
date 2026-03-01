// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

<<<<<<< HEAD
=======
import tailwindcss from '@tailwindcss/vite';

>>>>>>> 80bab45 (fix)
export default defineConfig({
  site: 'https://12asim.github.io',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
