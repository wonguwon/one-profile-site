import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://edu.oneground.ai.kr',
  integrations: [tailwind()],
  output: 'static',
});
