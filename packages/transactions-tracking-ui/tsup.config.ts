import { defineConfig } from 'tsup';

export default defineConfig([
  {
    format: ['cjs', 'esm'],
    entry: [
      './src/components/index.ts',
      './src/hooks/useCopyToClipboard.ts',
      './src/i18n/en.ts',
      './src/i18n/types.ts',
      './src/providers/LabelsProvider.tsx',
      './src/providers/TransactionsWidget.tsx',
      './src/utils/cn.ts',
      './src/utils/deepMerge.ts',
      './src/utils/ensUtils.ts',
      './src/utils/textCenterEllipsis.ts',
    ],
    treeshake: true,
    sourcemap: true,
    minify: true,
    clean: true,
    dts: true,
  },
]);
