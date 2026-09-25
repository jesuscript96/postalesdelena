import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Cambia esta URL por el dominio definitivo de Elena antes de publicar.
export default defineConfig({
  site: 'https://vivirdespacio.com',
  integrations: [tailwind(), sitemap()],
});
