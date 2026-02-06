import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ fallback: '404.html' }),
    prerender: {
      handleHttpError: ({ status, path, referrer }) => {
        if (status === 404) return; // ignore missing assets/links
        throw new Error(`${status} ${path} (linked from ${referrer})`);
      }
    }
  }
};

export default config;
