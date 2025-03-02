import { render, screen } from '@testing-library/react';

import { createTestMocks } from '@/mocks/testMocks';
import Input, { type InputProps } from './Input';
import { fullNamePattern } from '../../Form/FormField/regEx';

describe('Input UI Component', () => {
  let mock = createTestMocks();

  beforeEach(() => {
    vi.clearAllMocks();
    mock = createTestMocks();
  });

  describe('Rendering', () => {
    it('renders the component', () => {
      render(<Input aria-label={'testAriaLabel'} />);
      const input = screen.getByLabelText('testAriaLabel');

      expect(input).toBeInTheDocument();
    });
  });

  describe('Props Handling', () => {
    const labelColors: Array<{
      color: NonNullable<InputProps['color']>;
      styles: string;
    }> = [
      { color: 'vanilla', styles: 'text-gray-700 dark:text-white' },
      { color: 'primary', styles: 'text-[#1976D2] dark:text-[#90CAF9]' },
      { color: 'secondary', styles: 'text-[#9C27B0] dark:text-[#CE93D8]' },
      { color: 'success', styles: 'text-[#2E7D32] dark:text-[#66BB6A]' },
      { color: 'error', styles: 'text-[#D32F2F] dark:text-[#F44336]' },
      { color: 'info', styles: 'text-[#0288D1] dark:text-[#29B6F6]' },
      { color: 'warning', styles: 'text-[#ED6C02] dark:text-[#FFA726]' },
    ];

    it.each(labelColors.map(({ color, styles }) => [color, styles] as const))(
      "renders the label's %s text color",
      (color, styles) => {
        render(<Input aria-label={'testAriaLabel'} label='Test Label' color={color} />);
        const label = screen.getByText('Test Label');

        styles.split(' ').forEach((utilityClass: string) => {
          expect(label).toHaveClass(utilityClass);
        });
      },
    );

    const sizeValues: Array<{ size: number; styles: string }> = [
      { size: 10, styles: 'py-[4px] px-[12px]' },
      { size: 30, styles: 'p-3' },
    ];

    it.each(sizeValues.map(({ size, styles }) => [size, styles] as const))('renders the %s input', (size, styles) => {
      render(<Input aria-label={'testAriaLabel'} size={size} />);
      const input = screen.getByLabelText('testAriaLabel');

      styles.split(' ').forEach((utilityClass: string) => {
        expect(input).toHaveClass(utilityClass);
      });
    });

    it('validates input against a regular expression', async () => {
      render(<Input aria-label={'testAriaLabel'} pattern={fullNamePattern.source} onChange={mock.onChange} />);
      const input = screen.getByLabelText('testAriaLabel') as HTMLInputElement;

      await mock.user.type(input, 'testValidValue');

      expect(input.checkValidity()).toBeTruthy();

      await mock.user.clear(input);
      await mock.user.type(input, '+e$tInvalidVa!ue');

      expect(input.checkValidity()).toBeFalsy();
    });
  });

  describe('State Management', () => {
    const disabled = createTestMocks({ state: true });

    it('is enabled by default', () => {
      render(<Input aria-label={'testAriaLabel'} disabled={mock.state} />);
      const input = screen.getByLabelText('testAriaLabel');

      expect(input).toBeInTheDocument();
      expect(input).toBeEnabled();
    });

    it('can be disabled', () => {
      render(<Input aria-label={'testAriaLabel'} disabled={disabled.state} />);
      const input = screen.getByLabelText('testAriaLabel');

      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
    });

    it('cannot be interacted with when disabled', async () => {
      render(<Input aria-label={'testAriaLabel'} disabled={disabled.state} onChange={mock.onChange} />);
      const input = screen.getByLabelText('testAriaLabel');

      await mock.user.type(input, 'a');

      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
      expect(mock.onChange).not.toHaveBeenCalled();
    });
  });
});
