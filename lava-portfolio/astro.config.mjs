// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://ghimirelava.github.io",
  base: "/",               // Since it's a user/organization page, "/" is fine
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
