import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './Textarea';
import { handleOnChangePlaceholder } from '../../../../utils/placeholderEventHandlers';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    onBlur: { action: 'blurred' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => <Textarea onChange={handleOnChangePlaceholder} {...args} />,
  args: {
    disabled: false,
    error: false,
    color: 'primary',
    placeholder: 'Placeholder',
  },
};
