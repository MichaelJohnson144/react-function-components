import { render, screen } from '@testing-library/react';

import { createTestMocks } from '@/mocks/testMocks';
import MobileMenuButton from './MobileMenuButton';

describe('MobileMenuButton Component', () => {
  let mock = createTestMocks();

  beforeEach(() => {
    vi.clearAllMocks();
    mock = createTestMocks();
  });

  describe('Rendering', () => {
    it('renders the component', () => {
      render(<MobileMenuButton />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
    });
  });

  describe('State Management', () => {
    it('toggles the mobile menu icon after its a user clicks its default counterpart', async () => {
      render(<MobileMenuButton menuIsOpened={mock.state} onClick={mock.onClick} />);
      const defaultMobileMenuIcon = screen.getByRole('button');

      expect(defaultMobileMenuIcon).toBeInTheDocument();

      await mock.user.click(defaultMobileMenuIcon);

      expect(mock.onClick).toHaveBeenCalledTimes(1);

      const openMobileMenuIcon = screen.getByRole('button');

      expect(openMobileMenuIcon).toBeInTheDocument();
    });
  });

  describe('Event Handler', () => {
    it('does not fire onClick when the page initially loads', () => {
      render(<MobileMenuButton onClick={mock.onClick} />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(mock.onClick).not.toHaveBeenCalled();
    });

    it('fires onClick when a user clicks the button', async () => {
      render(<MobileMenuButton onClick={mock.onClick} />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();

      await mock.user.click(button);

      expect(mock.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
