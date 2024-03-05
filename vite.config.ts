import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  clearScreen: false,
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['./config', './strings'],
    },
  },
  test: {
    include: ['src/**/*.{test,spec}.ts'],
  },
});
