// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links';
import { remarkReadingTime } from './remark-reading-time.mjs';
import icon from 'astro-icon';

/** @type {import('astro').RemarkPlugins} */
const markdownRemarkPlugins = [remarkReadingTime];

/** @type {import('astro').RehypePlugins} */
const markdownRehypePlugins = [[rehypeExternalLinks, {
  content: { type: 'text', value: ' ↗' },
  target: '_blank',
  rel: ['nofollow', 'noopener', 'noreferrer'],
}]];

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
    {
      provider: fontProviders.local(),
      name: 'PP Editorial New',
      cssVariable: '--font-editorial-new',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: [
              './src/assets/fonts/PPEditorialNew-Bold.woff2',
              './src/assets/fonts/PPEditorialNew-Bold.woff',
            ],
            weight: '700',
            style: 'normal',
          },
          {
            src: [
              './src/assets/fonts/PPEditorialNew-Regular.woff2',
              './src/assets/fonts/PPEditorialNew-Regular.woff',
            ],
            weight: '400',
            style: 'normal',
          },
          {
            src: [
              './src/assets/fonts/PPEditorialNew-BoldItalic.woff2',
              './src/assets/fonts/PPEditorialNew-BoldItalic.woff',
            ],
            weight: '700',
            style: 'italic',
          }
        ],
      },
    },
  ],

  markdown: {
    processor: unified({
      remarkPlugins: markdownRemarkPlugins,
      rehypePlugins: markdownRehypePlugins,
    })
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx({
      processor: unified({
        remarkPlugins: markdownRemarkPlugins,
        rehypePlugins: markdownRehypePlugins,
      })
    }),
    icon({
      iconDir: './src/assets/icons',
    }),
  ],
});
