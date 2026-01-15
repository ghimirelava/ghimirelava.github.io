// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://ghimirelava.github.io",
  base: "/",               
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  trailingSlash: "always", 
});
