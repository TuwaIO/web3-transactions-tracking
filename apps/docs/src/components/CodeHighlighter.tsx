import { useTheme } from 'next-themes';
import { Prism } from 'react-syntax-highlighter';

export function CodeHighlighter({ children, language }: { children: string | string[]; language?: string }) {
  const { resolvedTheme } = useTheme();

  return (
    <div className="border-t-[1px] border-gray-200">
      <Prism
        children={children}
        language={language ?? 'bash'}
        customStyle={{ margin: 0 }}
        style={
          resolvedTheme === 'dark'
            ? // eslint-disable-next-line @typescript-eslint/no-require-imports
              require('react-syntax-highlighter/dist/esm/styles/prism').materialOceanic
            : // eslint-disable-next-line @typescript-eslint/no-require-imports
              require('react-syntax-highlighter/dist/esm/styles/prism').materialLight
        }
      />
    </div>
  );
}
