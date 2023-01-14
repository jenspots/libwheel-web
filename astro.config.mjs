import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'min-light',
      wrap: true
    }
  },
  site: 'https://jenspots.github.io',
  base: '/libwheel-web'
});
