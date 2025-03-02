import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    cols: {
      control: {
        type: 'range',
        min: 1,
        max: 40,
        step: 3,
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
