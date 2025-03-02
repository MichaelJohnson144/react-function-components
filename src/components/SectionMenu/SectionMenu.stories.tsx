import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import SectionMenu from './SectionMenu';

const meta: Meta<typeof SectionMenu> = {
  title: 'Components/SectionMenu',
  component: SectionMenu,
};

export default meta;

type Story = StoryObj<typeof SectionMenu>;

const items = [
  { anchor: 'docs', label: 'Docs' },
  { anchor: 'components', label: 'Components' },
  { anchor: 'blog', label: 'Blog' },
  { anchor: 'showcase', label: 'Showcase' },
];

export const Default: Story = {
  args: {
    items,
    onChange: fn(),
    selectedAnchor: 'docs',
  },
};
