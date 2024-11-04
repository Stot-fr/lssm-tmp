import { defineConfig } from 'tsup';

export default defineConfig((_options) => ({
  clean: true,
  sourcemap: true,
  dts: false,
  bundle: false,
  splitting: true,
  minify: true,
  format: ['esm', 'cjs'],
  // format: ['esm'],
  target: 'esnext',
  external: ['next', 'react', 'react-dom', 'server-only'],
  entry: [
    'src',
    '!src/**/*.stories.tsx',
    '!src/**/*.stories.tsx.snap',
    '!src/**/README.md',
  ],
}));
