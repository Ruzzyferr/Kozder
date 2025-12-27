import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://koz-der.org', // Update with your actual domain
  integrations: [
    mdx(),
    tailwind(),
    sitemap()
  ],
  output: 'static',
  build: {
    assets: '_assets'
  }
});

