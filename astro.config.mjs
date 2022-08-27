import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import readTimePlugin from './src/lib/readTimePlugin.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({ remarkPlugins: { extends: [readTimePlugin] } }), sitemap()],
  markdown: {
    drafts: true,
    remarkPlugins: [readTimePlugin],
  },
  site: 'https://zynh.me/'
});