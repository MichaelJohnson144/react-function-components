import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SectionMenuItemRecord } from './SectionMenuItem/SectionMenuItem';
import SectionMenu from './SectionMenu';

const menuItemsData: SectionMenuItemRecord[] = [
  {
    anchor: 'test-anchor',
    label: 'testLabel',
  },
  {
    anchor: 'test-anchor-two',
    label: 'testLabelTwo',
  },
  {
    anchor: 'test-anchor-three',
    label: 'testLabelThree',
  },
  {
    anchor: 'test-anchor-four',
    label: 'testLabelFour',
  },
];

describe('SectionMenu Component', () => {
  const fn = jest.fn();

  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<SectionMenu items={menuItemsData} />);
    const sectionMenu = screen.getByRole('navigation');
    expect(sectionMenu).toBeInTheDocument();
  });

  // Test the `items` prop:
  it('should render the items successfully', () => {
    render(<SectionMenu items={menuItemsData} />);
    menuItemsData.forEach((item) => {
      const menuItem = screen.getByRole('link', { name: item.label });
      expect(menuItem).toBeInTheDocument();
    });
  });

  // Test the `onChange` prop:
  it('should not fire onChange upon initial page load', () => {
    render(<SectionMenu items={menuItemsData} onChange={fn} />);
    menuItemsData.forEach((item) => {
      const menuItem = screen.getByRole('link', { name: item.label });
      expect(menuItem).toBeInTheDocument();
    });
    expect(fn).not.toHaveBeenCalled();
  });

  it('can fire onChange', async () => {
    const user = userEvent.setup();
    render(<SectionMenu items={menuItemsData} onChange={fn} />);
    for (const item of menuItemsData) {
      const menuItem = screen.getByRole('link', { name: item.label });
      expect(menuItem).toBeInTheDocument();
      await user.click(menuItem);
      expect(fn).toHaveBeenCalledWith(item);
      fn.mockClear();
    }
  });
});
