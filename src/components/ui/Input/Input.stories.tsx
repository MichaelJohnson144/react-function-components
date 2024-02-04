import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';
import { handleOnChangePlaceholder } from '../../../utils/placeholderEventHandlers';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    multiline: { control: 'boolean' },
    onBlur: { action: 'blurred' },
    onChange: { action: 'changed' },
    size: { control: 'radio', options: [10, 30] },
    type: {
      control: 'select',
      options: [
        'email',
        'hidden',
        'number',
        'password',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input onChange={handleOnChangePlaceholder} {...args} />,
  args: {
    multiline: false,
    disabled: false,
    error: false,
    color: 'primary',
    size: 30,
    label: 'Label',
    placeholder: 'Placeholder',
    readOnly: false,
    type: 'text',
  },
};
