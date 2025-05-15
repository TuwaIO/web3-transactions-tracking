import { defineConfig } from 'tsup';

export default defineConfig([
  {
    format: ['cjs', 'esm'],
    entry: [
      './src/hooks/useInitializeTransactionsPool.tsx',
      './src/store/**.ts',
      './src/trackers/evmTracker.ts',
      './src/trackers/gelatoTracker.ts',
      './src/trackers/safeTracker.ts',
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
