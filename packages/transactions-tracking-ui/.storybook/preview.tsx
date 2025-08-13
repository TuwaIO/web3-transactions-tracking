import 'tailwindcss';
import '../src/styles/app.css';

import type { Preview } from '@storybook/react-vite';

import { defaultLabels } from '../src';
import { LabelsProvider } from '../src/providers';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <LabelsProvider labels={defaultLabels}>
        <Story />
      </LabelsProvider>
    ),
  ],
};

export default preview;
