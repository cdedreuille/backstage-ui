import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'backstage-ui',
      formats: ['es'],
      fileName: 'backstage-ui',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
});
