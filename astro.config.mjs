import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import addClasses from "rehype-add-classes";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/octagony",
  integrations: [mdx(), sitemap(), react(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "text-4xl font-bold font-hind",
          h2: "text-2xl font-bold font-hind",
          h3: "text-xl font-bold font-hind",
          h4: "text-lg font-bold font-hind",
          h5: "font-bold font-hind",
          h6: "font-bold font-hind",
          img: "border border-slate-300 dark:border-neutral-700 rounded-xl mb-6",
          a: "underline underline-offset-2 hover:text-pink-500 decoration-pink-500",
        },
      ],
    ],
  },
});
