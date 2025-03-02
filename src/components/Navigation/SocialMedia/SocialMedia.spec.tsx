import { render, screen } from '@testing-library/react';

import { createTestMocks } from '@/mocks/testMocks';
import SocialMedia from './SocialMedia';

describe('SocialMedia Component', () => {
  let mock = createTestMocks();

  beforeEach(() => {
    vi.clearAllMocks();
    mock = createTestMocks();
  });

  describe('Rendering', () => {
    it('renders the component with 2 social media links', () => {
      render(<SocialMedia />);
      const linkedInLink = screen.getByRole('link', { name: 'LinkedIn logomark link' });
      const gitHubLink = screen.getByRole('link', { name: 'GitHub logomark link' });

      expect(linkedInLink).toBeInTheDocument();
      expect(gitHubLink).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('opens a new tab when a social media logomark is clicked', async () => {
      render(<SocialMedia />);
      const linkedInLink = screen.getByRole('link', { name: 'LinkedIn logomark link' }) as HTMLAnchorElement;
      const gitHubLink = screen.getByRole('link', { name: 'GitHub logomark link' }) as HTMLAnchorElement;

      await mock.user.click(linkedInLink);

      expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com');
      expect(linkedInLink).toHaveAttribute('target', '_blank');

      await mock.user.click(gitHubLink);

      expect(gitHubLink).toHaveAttribute('href', 'https://github.com');
      expect(gitHubLink).toHaveAttribute('target', '_blank');
    });
  });
});
