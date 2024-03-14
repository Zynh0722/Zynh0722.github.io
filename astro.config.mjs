import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";

import readTimePlugin from "./src/lib/readTime.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({ remarkPlugins: [readTimePlugin] }),
    sitemap(),
    compress(),
    robotsTxt(),
  ],
  markdown: {
    remarkPlugins: [readTimePlugin],
  },
  site: "https://zynh.me/",
});
