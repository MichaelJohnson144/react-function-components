import { render, screen } from '@testing-library/react';

import MenuItem, { type MenuItemRecord } from './MenuItem';

const menuItemData: MenuItemRecord = { href: 'test-href', label: 'testLabel' };

describe('MenuItem Component', () => {
  it('renders the component', () => {
    render(<MenuItem item={menuItemData} />);
    const menuItem = screen.getByRole('link');

    expect(menuItem).toBeInTheDocument();
  });

  it('renders the items', () => {
    render(<MenuItem item={menuItemData} />);
    const menuItem: HTMLAnchorElement = screen.getByRole('link', { name: menuItemData.label });

    expect(menuItem).toBeInTheDocument();
    const menuItemURL = new URL(menuItem.href).pathname;
    expect(menuItemURL).toBe(`/${menuItemData.href}`);
  });
});
