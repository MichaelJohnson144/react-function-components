import { initialize, mswLoader } from 'msw-storybook-addon';
import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '@/index.css';
import useTheme from '@/components/ui/ThemeToggler/useTheme';

initialize();

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  tags: ['autodocs'],
  loaders: [mswLoader],
  decorators: [
    (Story) => {
      useTheme();
      return <Story />;
    },
  ],
};

export default preview;
