import { render, screen } from '@testing-library/react';

import { createTestMocks } from '@/mocks/testMocks';
import ThemeToggler from './ThemeToggler';

describe('ThemeToggler Component', () => {
  let mock = createTestMocks();

  beforeEach(() => {
    vi.clearAllMocks();
    mock = createTestMocks();
  });

  describe('Rendering', () => {
    it('renders the component', () => {
      render(<ThemeToggler />);
      const themeToggler = screen.getByRole('button');

      expect(themeToggler).toBeInTheDocument();
    });
  });

  describe('State Management', () => {
    it('switches between light and dark modes, respectively', async () => {
      const root = document.documentElement;
      render(<ThemeToggler />);
      const themeToggler = screen.getByRole('button', { name: 'Theme Toggler' });

      expect(root).not.toHaveClass('dark');

      await mock.user.click(themeToggler);

      expect(root).not.toHaveClass('dark');

      await mock.user.click(themeToggler);

      expect(root).toHaveClass('dark');
    });
  });
});
