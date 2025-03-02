import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'select',
      options: ['email', 'hidden', 'number', 'password', 'search', 'submit', 'tel', 'text', 'time', 'url'],
    },
    size: {
      control: 'radio',
      options: [10, 30],
    },
    disabled: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
