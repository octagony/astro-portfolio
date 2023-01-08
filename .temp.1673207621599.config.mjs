import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import addClasses from "rehype-add-classes";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/octagony",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    tailwind(),
  ],
});
