import { defineConfig } from 'tsup';

export default defineConfig([
  {
    format: ['cjs', 'esm'],
    entry: [
      './src/helpers/**.ts',
      './src/trackers/**.ts',
      './src/store/txTrackingStore.ts',
      './src/store/selectors/transactionsSelectors.ts',
    ],
    treeshake: true,
    sourcemap: true,
    minify: true,
    clean: true,
    dts: true,
  },
]);
