import { createRequire } from 'node:module';
import { dirname } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const _require = createRequire(import.meta.url);
const getAbsolutePath = (packageName: string) => {
  try {
    return dirname(_require.resolve(`${packageName}/package.json`));
  } catch (error) {
    console.error(`Failed to resolve package: ${packageName}`, error);
    throw error;
  }
};

const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  core: {
    builder: getAbsolutePath('@storybook/builder-vite'),
  },
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
};

export default config;
