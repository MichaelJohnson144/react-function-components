import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SectionMenuItem, { SectionMenuItemRecord } from './SectionMenuItem';

/* If you utilize this component in a Next.js application,
 you must mock the `<Link>` component from `next/link`
 to prevent `jest` from raising a `console.error` like this:

 jest.mock('next/link', () => {
   return ({ href, children }: { href: string; children: ReactNode }) => {
     return <a href={href}>{children}</a>;
   };
 });
*/

const menuItemData: SectionMenuItemRecord = {
  anchor: 'test-anchor',
  label: 'testLabel',
};

describe('SectionMenuItem Component', () => {
  const fn = jest.fn();

  // Test that component renders:
  it('should render the component successfully', () => {
    render(<SectionMenuItem item={menuItemData} />);
    const sectionMenuItem = screen.getByRole('link');
    expect(sectionMenuItem).toBeInTheDocument();
  });

  // Test the `item` prop:
  it('should render an item with a hash and label successfully', () => {
    render(<SectionMenuItem item={menuItemData} />);
    const menuItem: HTMLAnchorElement = screen.getByRole('link', {
      name: menuItemData.label,
    });
    expect(menuItem).toBeInTheDocument();
    expect(menuItem.hash).toBe(`#${menuItemData.anchor}`);
  });

  // Test the `onClick` prop:
  it('Should not fire onClick upon initial page load', () => {
    render(<SectionMenuItem item={menuItemData} onClick={fn} />);
    const menuItem = screen.getByRole('link', { name: menuItemData.label });
    expect(menuItem).toBeInTheDocument();
    expect(fn).not.toHaveBeenCalled();
  });

  it('can fire onClick', async () => {
    const user = userEvent.setup();
    render(<SectionMenuItem item={menuItemData} onClick={fn} />);
    const menuItem = screen.getByRole('link', { name: menuItemData.label });
    expect(menuItem).toBeInTheDocument();
    await user.click(menuItem);
    expect(fn).toHaveBeenCalledWith(menuItemData);
    fn.mockClear();
  });
});
