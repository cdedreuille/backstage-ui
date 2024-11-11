import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({ exclude: ['**/*.stories.ts', '**/*.stories.tsx', '**/*.css.ts'] }),
    vanillaExtractPlugin(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'backstage-ui',
      formats: ['es'],
      fileName: 'main',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', /\.css\.ts$/],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
      },
    },
  },
});
