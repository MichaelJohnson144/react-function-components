import { render, screen } from '@testing-library/react';

import { createTestMocks } from '@/mocks/testMocks';
import SectionMenuItem, { type SectionMenuItemRecord } from './SectionMenuItem';

const menuItemData: SectionMenuItemRecord = {
  anchor: 'test-anchor',
  label: 'testLabel',
};

describe('SectionMenuItem Component', () => {
  let mock = createTestMocks();

  beforeEach(() => {
    vi.clearAllMocks();
    mock = createTestMocks();
  });

  describe('Rendering', () => {
    it('renders the component', () => {
      render(<SectionMenuItem item={menuItemData} />);
      const sectionMenuItem = screen.getByRole('link');

      expect(sectionMenuItem).toBeInTheDocument();
    });

    it('renders an item with a hash and label', () => {
      render(<SectionMenuItem item={menuItemData} />);
      const menuItem = screen.getByRole('link', { name: menuItemData.label }) as HTMLAnchorElement;

      expect(menuItem).toBeInTheDocument();
      expect(menuItem.hash).toBe(`#${menuItemData.anchor}`);
    });
  });

  describe('Event Handler', () => {
    it('does not fire onClick upon initial page load', () => {
      render(<SectionMenuItem item={menuItemData} onClick={mock.onClick} />);
      const menuItem = screen.getByRole('link', { name: menuItemData.label });

      expect(menuItem).toBeInTheDocument();
      expect(mock.onClick).not.toHaveBeenCalled();
    });

    it('fires onClick when the item is clicked', async () => {
      render(<SectionMenuItem item={menuItemData} onClick={mock.onClick} />);
      const menuItem = screen.getByRole('link', { name: menuItemData.label });

      expect(menuItem).toBeInTheDocument();

      await mock.user.click(menuItem);

      expect(mock.onClick).toHaveBeenCalledWith(menuItemData);
    });
  });
});
