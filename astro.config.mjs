// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import rehypeExternalLinks from 'rehype-external-links';
import { remarkReadingTime } from './remark-reading-time.mjs';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://juanturk.com',

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Mona Sans',
      cssVariable: '--font-mona-sans',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: [
              './src/assets/fonts/MonaSansVF[wdth,wght,opsz,ital].woff2',
              './src/assets/fonts/MonaSansVF[wdth,wght,opsz,ital].woff',
            ],
            weight: '200 900',
            style: 'normal',
            stretch: '75% 125%',
          },
          {
            src: [
              './src/assets/fonts/MonaSansVF[wdth,wght,opsz,ital].woff2',
              './src/assets/fonts/MonaSansVF[wdth,wght,opsz,ital].woff',
            ],
            weight: '200 900',
            style: 'italic',
            stretch: '75% 125%',
          },
        ],
      },
    },
  ],

  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [[rehypeExternalLinks, {
      content: { type: 'text', value: ' ↗' },
      target: '_blank',
      rel: ['nofollow', 'noopener', 'noreferrer'],
    }]],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    icon({
      iconDir: './src/assets/icons',
    }),
  ],

  adapter: cloudflare(),
});
