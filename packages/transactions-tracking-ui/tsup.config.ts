import { defineConfig } from 'tsup';

export default defineConfig([
  {
    format: ['cjs', 'esm'],
    entry: ['./src/components/**.tsx', './src/providers/**.tsx'],
    treeshake: true,
    sourcemap: true,
    minify: true,
    clean: true,
    dts: true,
  },
]);
