import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';

describe('Input UI Component', () => {
  const stateIsFalse = false;
  const stateIsTrue = true;
  let fn = jest.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    fn = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
    fn.mockClear();
  });

  // Test that the `Input` ui component renders:
  it('should render the component successfully', () => {
    render(<Input aria-label={'testAriaLabel'} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
  });

  // Test the `autoComplete` prop:
  it('can set autoComplete', () => {
    const autocompleteValues = [
      'name',
      'given-name',
      'additional-name',
      'family-name',
      'nickname',
      'email',
      'username',
      'new-password',
      'current-password',
      'one-time-code',
      'organization-title',
      'organization',
      'street-address',
      'address-line1',
      'address-line2',
      'address-line3',
      'address-level1',
      'address-level2',
      'address-level3',
      'address-level4',
      'country',
      'country-name',
      'postal-code',
      'cc-name',
      'cc-given-name',
      'cc-additional-name',
      'cc-family-name',
      'cc-number',
      'cc-exp',
      'cc-exp-month',
      'cc-exp-year',
      'cc-csc',
      'cc-type',
      'transaction-currency',
      'transaction-amount',
      'language',
      'bday',
      'bday-day',
      'bday-month',
      'bday-year',
      'sex',
      'tel',
      'tel-country-code',
      'tel-national',
      'tel-area-code',
      'tel-local',
      'tel-local-prefix',
      'tel-local-suffix',
      'tel-extension',
      'impp',
      'url',
      'photo',
      'webauthn',
    ];
    for (const autocomplete of autocompleteValues) {
      render(<Input aria-label={`testAriaLabel${autocomplete}`} autoComplete={autocomplete} />);
      const input = screen.getByLabelText(`testAriaLabel${autocomplete}`);
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('autoComplete', autocomplete);
    }
  });

  // Test the `aria-label` prop:
  it('can set an aria-label', () => {
    render(<Input aria-label={'testAriaLabel'} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
  });

  // Test the `color` prop:
  it('can change the color', () => {
    const colorValues: (
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'error'
      | 'info'
      | 'warning'
    )[] = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'];
    for (const color of colorValues) {
      render(<Input aria-label={'testAriaLabel'} color={color} />);
      const inputs = screen.getAllByRole('textbox');
      inputs.forEach((input) => {
        expect(input).toHaveAttribute('aria-label', 'testAriaLabel');
        const expectedColor =
          color === 'inherit'
            ? 'text-zinc-700'
            : `text-[#${color === 'primary' ? '1976D2' : color}]`;
        expect(input).toHaveStyle(`color: ${expectedColor};`);
      });
    }
  });

  // Test the `disabled` prop:
  it('should not be disabled by default', () => {
    render(<Input aria-label={'testAriaLabel'} disabled={stateIsFalse} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();
  });

  it('can be disabled', () => {
    render(<Input aria-label={'testAriaLabel'} disabled={stateIsTrue} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });

  it('cannot be interfaced with if disabled', async () => {
    render(<Input disabled={stateIsTrue} aria-label={'testAriaLabel'} onBlur={fn} onChange={fn} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
    await user.click(input);
    await user.click(document.body);
    await user.tab({ shift: false });
    expect(fn).toHaveBeenCalledTimes(0);
  });

  // Test the `error` prop:
  it('should not be set to error by default', () => {
    render(<Input aria-label={'testAriaLabel'} error={stateIsFalse} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
  });

  it('can be set to error', () => {
    render(<Input aria-label={'testAriaLabel'} error={stateIsTrue} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
  });

  // Test the `id` prop:
  it('can set an id', () => {
    render(<Input aria-label={'testAriaLabel'} id={'testId'} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'testId');
  });

  // Test the 'maxLength` prop:
  it('can set a maxLength', () => {
    render(<Input aria-label={'testAriaLabel'} maxLength={100} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('maxLength', '100');
  });

  // Test the `minLength` prop:
  it('can set a minLength', () => {
    render(<Input aria-label={'testAriaLabel'} minLength={10} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('minLength', '10');
  });

  // Test the `name` prop:
  it('can set a name', () => {
    render(<Input aria-label={'testAriaLabel'} name={'testName'} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'testName');
  });

  // Test the `onBlur` prop:
  it('Should not fire onBlur upon initial page load', () => {
    render(<Input aria-label={'testAriaLabel'} onBlur={fn} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it('can fire onBlur', async () => {
    render(<Input aria-label={'testAriaLabel'} onBlur={fn} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    await user.click(input);
    await user.click(document.body);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  // Test the `onChange` prop:
  it('Should not fire onChange upon initial page load', () => {
    render(<Input aria-label={'testAriaLabel'} onChange={fn} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it('can fire onChange', async () => {
    render(<Input aria-label={'testAriaLabel'} onChange={fn} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    await user.type(input, 'testText');
    expect(fn).toHaveBeenCalledTimes(8);
  });

  // Test the `pattern` prop:
  it('can set a pattern', async () => {
    render(<Input aria-label={'testAriaLabel'} onChange={fn} pattern={'^[A-Za-z .s_-]+$'} />);
    const input: HTMLInputElement = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    await user.type(input, 'testValidValue');
    expect(input.checkValidity()).toBeTruthy();
    await user.clear(input);
    await user.type(input, '+e$tInvalidVa!ue');
    expect(input.checkValidity()).toBeFalsy();
  });

  // Test the `placeholder` prop:
  it('can set a placeholder', () => {
    render(<Input aria-label={'testAriaLabel'} placeholder={'testPlaceholder'} />);
    const input: HTMLInputElement = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(input.placeholder).toBe('testPlaceholder');
  });

  // Test the `readOnly` prop:
  it('should not be readonly by default', () => {
    render(<Input aria-label={'testAriaLabel'} readOnly={stateIsFalse} />);
    const input: HTMLInputElement = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(input.readOnly).toBeFalsy();
  });

  it('can be set to readonly', () => {
    render(<Input aria-label={'testAriaLabel'} readOnly={stateIsTrue} />);
    const input: HTMLInputElement = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(input.readOnly).toBeTruthy();
  });

  // Test the `ref` prop:
  it('can set a ref', async () => {
    render(<Input aria-label={'testAriaLabel'} ref={fn} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  // Test the `required` prop:
  it('should not be required by default', () => {
    render(<Input aria-label={'testAriaLabel'} required={stateIsFalse} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(input).not.toBeRequired();
  });

  it('can be required', () => {
    render(<Input aria-label={'testAriaLabel'} required={stateIsTrue} />);
    const input = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(input).toBeRequired();
  });

  // Test the `size` prop:
  it('can change the size', () => {
    const sizeValues: (10 | 20 | 40)[] = [10, 20, 40];
    for (const size of sizeValues) {
      render(<Input size={size} />);
      const inputs = screen.queryAllByRole('textbox');
      inputs.forEach((input) => {
        expect(input).toBeInTheDocument();
      });
    }
  });

  // Test the `type` prop:
  it('can set a type', () => {
    const typeValues: (
      | 'email'
      | 'hidden'
      | 'number'
      | 'password'
      | 'search'
      | 'submit'
      | 'tel'
      | 'text'
      | 'time'
      | 'url'
    )[] = [
      'email',
      'hidden',
      'number',
      'password',
      'search',
      'submit',
      'tel',
      'text',
      'time',
      'url',
    ];
    for (const type of typeValues) {
      render(<Input aria-label={`testAriaLabel${type}`} type={type} />);
      const input: HTMLInputElement = screen.getByLabelText(`testAriaLabel${type}`);
      expect(input).toBeInTheDocument();
      expect(input.type).toBe(type);
    }
  });

  // Test the `value` prop:
  it('can set a value', async () => {
    render(<Input aria-label={'testAriaLabel'} onChange={fn} value={'testValue'} />);
    const input: HTMLInputElement = screen.getByLabelText('testAriaLabel');
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('testValue');
    expect(fn).not.toHaveBeenCalled();
  });
});
