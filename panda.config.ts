/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  strictPropertyValues: true,
  strictTokens: true,
  include: ['./src/**/*.{ts,svelte}'],
  importMap: '$lib/styled-system',
  outdir: 'src/lib/styled-system',
});
