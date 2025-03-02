import { render, screen } from '@testing-library/react';

import { createTestMocks } from '@/mocks/testMocks';
import useRipple from './useRipple';
import Button, { type ButtonProps } from './Button';

vi.mock('./useRipple');

describe('Button UI component', () => {
  let mock = createTestMocks();

  beforeEach(() => {
    vi.clearAllMocks();
    mock = createTestMocks();

    (useRipple as typeof mock.fn).mockReturnValue({
      rippleEffects: [],
      addRippleEffect: mock.fn,
      removeRippleEffect: mock.fn,
    });
  });

  describe('Rendering', () => {
    it('renders the component', () => {
      render(<Button />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
    });
  });

  describe('Props Handling', () => {
    const containedColors: Array<{ color: NonNullable<ButtonProps['color']>; styles: string }> = [
      { color: 'vanilla', styles: '' },
      {
        color: 'default',
        styles:
          'bg-gray-950/10 text-gray-950 hover:bg-gray-950/15 dark:bg-white/10 dark:text-white hover:dark:bg-white/15',
      },
      {
        color: 'primary',
        styles:
          'bg-[#1976D2] text-white hover:bg-[#1565C0] dark:bg-[#90CAF9] dark:text-gray-950 hover:dark:bg-[#42A5F5]',
      },
      {
        color: 'secondary',
        styles:
          'bg-[#9C27B0] text-white hover:bg-[#7B1FA2] dark:bg-[#CE93D8] dark:text-gray-950 hover:dark:bg-[#AB47BC]',
      },
      {
        color: 'success',
        styles:
          'bg-[#2E7D32] text-white hover:bg-[#1B5E20] dark:bg-[#66BB6A] dark:text-gray-950 hover:dark:bg-[#388E3C]',
      },
      {
        color: 'error',
        styles: 'bg-[#D32F2F] text-white hover:bg-[#C62828] dark:bg-[#F44336] hover:dark:bg-[#D32F2F]',
      },
      {
        color: 'info',
        styles:
          'bg-[#0288D1] text-white hover:bg-[#01579B] dark:bg-[#29B6F6] dark:text-gray-950 hover:dark:bg-[#0288D1]',
      },
      {
        color: 'warning',
        styles: 'bg-[#FEDD00] text-gray-950 hover:bg-[#D1B000]',
      },
    ];

    it.each(containedColors)("renders the contained button's %s color", ({ color, styles }) => {
      render(<Button aria-label={'testAriaLabel'} variant={'contained'} color={color} />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      styles
        .split(' ')
        .filter(Boolean)
        .forEach((utilityClass: string) => {
          expect(button).toHaveClass(utilityClass);
        });
    });

    const sizeValues: Array<{ size: NonNullable<ButtonProps['size']>; styles: string }> = [
      { size: 'small', styles: 'px-[10px] py-[4px] text-sm' },
      { size: 'medium', styles: 'px-[16px] py-[6px]' },
      { size: 'large', styles: 'px-[22px] py-[8px] text-lg' },
    ];

    it.each(sizeValues.map(({ size, styles }) => [size, styles] as const))('renders the %s button', (size, styles) => {
      render(<Button size={size}>Test Button</Button>);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      styles
        .split(' ')
        .filter(Boolean)
        .forEach((utilityClass: string) => {
          expect(button).toHaveClass(utilityClass);
        });
    });
  });

  describe('Event Handler', () => {
    it('does not fire onClick when the page initially loads', () => {
      render(<Button onClick={mock.onClick} />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(mock.onClick).not.toHaveBeenCalled();
    });

    it('fires onClick when a user clicks the button, immediately triggering a ripple effect', async () => {
      render(<Button onClick={mock.onClick} />);
      const button = screen.getByRole('button');

      await mock.user.click(button);

      expect(button).toBeInTheDocument();
      expect(mock.onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('State Management', () => {
    const disabled = createTestMocks({ state: true });

    it('is enabled by default', () => {
      render(<Button disabled={mock.state} />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button).toBeEnabled();
    });

    it('can be disabled', () => {
      render(<Button disabled={disabled.state} />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
    });

    it('cannot be interacted with when disabled', async () => {
      render(<Button disabled={disabled.state} onClick={mock.onClick} />);
      const button = screen.getByRole('button');

      await mock.user.click(button);

      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
      expect(mock.onClick).not.toHaveBeenCalled();
    });
  });
});
