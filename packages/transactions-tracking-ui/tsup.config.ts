// еще нужно добавить переводы текстов (на несколько базовых языков по окончанию всех текстовых работ с пакетом)

import { defineConfig } from 'tsup';

export default defineConfig([
  {
    format: ['cjs', 'esm'],
    entry: [
      './src/components/**/**.tsx',
      './src/providers/TransactionsWidget.tsx',
      './src/utils/**.ts',
      './src/hooks/useCopyToClipboard.ts',
    ],
    treeshake: true,
    sourcemap: true,
    minify: true,
    clean: true,
    dts: true,
  },
]);
