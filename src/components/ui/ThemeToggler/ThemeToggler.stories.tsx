import type { Meta, StoryObj } from '@storybook/react';

import ThemeToggler from './ThemeToggler';

const meta: Meta<typeof ThemeToggler> = {
  title: 'Components/ThemeToggler',
  component: ThemeToggler,
};

export default meta;

type Story = StoryObj<typeof ThemeToggler>;

export const Default: Story = {};
