import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeToggler from './ThemeToggler';

describe('ThemeToggler Component', () => {
  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<ThemeToggler />);
    const themeToggler = screen.getByRole('button');
    expect(themeToggler).toBeInTheDocument();
  });

  /* Test that the theme-toggler can switch a system's state between light and dark mode, respectively: */
  it('can switch between light and dark modes on click, respectively', async () => {
    const root = document.documentElement;
    const user = userEvent.setup();

    render(<ThemeToggler />);
    const themeToggler = screen.getByRole('button', { name: 'Theme Toggler' });
    expect(themeToggler).toBeInTheDocument();

    // Given the initial state of a system's display,
    expect(root).not.toHaveClass('dark');

    // Clicking the button should switch the state of the system's initial display to `dark` mode:
    await user.click(themeToggler);
    expect(root).toHaveClass('dark');

    /* Clicking the button again should switch the state of the system's display back to `light` mode: */
    await user.click(themeToggler);
    expect(document.documentElement).not.toHaveClass('dark');
  });
});
