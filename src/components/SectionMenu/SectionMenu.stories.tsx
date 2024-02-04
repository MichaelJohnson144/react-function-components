import type { Meta, StoryObj } from '@storybook/react';

import SectionMenu from './SectionMenu';

const meta: Meta<typeof SectionMenu> = {
  title: 'Components/SectionMenu',
  component: SectionMenu,
  argTypes: { onChange: { action: 'changed' } },
};

export default meta;
type Story = StoryObj<typeof SectionMenu>;

const items = [
  {
    anchor: 'docs',
    label: 'Docs',
  },
  {
    anchor: 'components',
    label: 'Components',
  },
  {
    anchor: 'blog',
    label: 'Blog',
  },
  {
    anchor: 'showcase',
    label: 'Showcase',
  },
];

export const Default: Story = {
  render: (args) => <SectionMenu {...args} />,
  args: {
    items,
    selectedAnchor: 'docs',
  },
};
