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
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "text-4xl font-bold font-heebo",
          h2: "text-2xl font-bold font-heebo",
          h3: "text-xl font-bold font-heebo",
          h4: "text-lg font-bold font-heebo",
          h5: "font-bold font-heebo",
          h6: "font-bold font-heebo",
          img: "border border-slate-300 dark:border-stone-700 rounded-xl mb-6",
          a: "underline underline-offset-2 hover:text-pink-500 decoration-pink-500",
        },
      ],
    ],
  },
});
