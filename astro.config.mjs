// @ts-check
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [tailwind(), sitemap()],
});
