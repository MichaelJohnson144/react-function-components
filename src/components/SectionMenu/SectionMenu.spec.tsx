import { render, screen } from '@testing-library/react';

import { createTestMocks } from '@/mocks/testMocks';
import type { SectionMenuItemRecord } from './SectionMenuItem/SectionMenuItem';
import SectionMenu from './SectionMenu';

const menuItemsData: SectionMenuItemRecord[] = [
  { anchor: 'test-anchor', label: 'testLabel' },
  { anchor: 'test-anchor-two', label: 'testLabelTwo' },
  { anchor: 'test-anchor-three', label: 'testLabelThree' },
  { anchor: 'test-anchor-four', label: 'testLabelFour' },
];

describe('SectionMenu Component', () => {
  let mock = createTestMocks();

  beforeEach(() => {
    vi.clearAllMocks();
    mock = createTestMocks();
  });

  describe('Rendering', () => {
    it('renders the component container', () => {
      render(<SectionMenu items={menuItemsData} />);
      const sectionMenu = screen.getByRole('navigation');

      expect(sectionMenu).toBeInTheDocument();
    });

    it('renders all menu items', () => {
      render(<SectionMenu items={menuItemsData} />);

      menuItemsData.forEach((item) => {
        const menuItem = screen.getByRole('link', { name: item.label });

        expect(menuItem).toBeInTheDocument();
      });
    });
  });

  describe('Event Handler', () => {
    it('does not fire onChange upon initial page load', () => {
      render(<SectionMenu items={menuItemsData} onChange={mock.onChange} />);
      const menuItemElements = menuItemsData.map((item) => screen.getByRole('link', { name: item.label }));

      menuItemElements.forEach((menuItem) => {
        expect(menuItem).toBeInTheDocument();
      });
      expect(mock.onChange).not.toHaveBeenCalled();
    });

    it('fires onChange when a menu item is clicked', async () => {
      render(<SectionMenu items={menuItemsData} onChange={mock.onChange} />);

      for (const item of menuItemsData) {
        const menuItem = screen.getByRole('link', { name: item.label });

        await mock.user.click(menuItem);

        expect(mock.onChange).toHaveBeenCalledWith(item);
      }
    });
  });
});
