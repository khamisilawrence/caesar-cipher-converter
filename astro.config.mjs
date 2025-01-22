// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import astroMetaTags from "astro-meta-tags";

import pageInsight from "astro-page-insight";

// https://astro.build/config
export default defineConfig({
  output: "server",
  // adapter: netlify(),
  integrations: [tailwind(), sitemap(), astroMetaTags(), pageInsight()],
});
