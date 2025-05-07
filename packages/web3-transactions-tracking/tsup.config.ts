import { defineConfig } from 'tsup';

export default defineConfig([
  {
    format: ['cjs', 'esm'],
    entry: [
      './src/hooks/useInitializeTransactionsPool.tsx',
      './src/store/txTrackingStore.ts',
      './src/store/selectors/transactionsSelectors.ts',
      './src/trackers/**.ts',
      './src/utils/**.ts',
      './src/types.ts',
    ],
    treeshake: true,
    sourcemap: true,
    minify: true,
    clean: true,
    dts: true,
  },
]);
