import type { Meta, StoryObj } from '@storybook/react';

import Form from './Form';
import { handlers } from '@/mocks/handlers';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    msw: {
      handlers: [...handlers],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {};
