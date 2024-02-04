/* If you utilize this component in a Next.js application, you must add React's `use client`
 directive above these import statements or a parent's you may subject it to since Next.js's new App Router
 (`app`) leverage React Server Components by default. */

import {
  InputHTMLAttributes,
  FocusEventHandler,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  forwardRef,
  useMemo,
} from 'react';
import cn from 'classnames';

import labelStyles from './styles/labelStyles';
import inputStyles from './styles/inputStyles';
import Textarea from './Textarea';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  label?: string;
  multiline?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: HTMLInputTypeAttribute;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled = false,
      error = false,
      color = undefined,
      className,
      size = 30,
      label,
      multiline = false,
      onBlur,
      onChange,
      readOnly = false,
      type = 'text',
      ...rest
    },
    ref,
  ) => {
    const handleLabelStyles = useMemo(
      () =>
        cn('flex items-center font-semibold', labelStyles({ disabled, error, color }), className),
      [disabled, error, color, className],
    );

    const handleInputStyles = useMemo(() => {
      const inputSize: { [key: number]: string } = { 10: 'py-[4px] px-[12px]', 30: 'p-3' };

      return cn(
        'rounded font-open-sans text-slate-900 dark:bg-inherit dark:text-slate-200',
        inputStyles({ disabled, error, color }),
        inputSize[size],
        className,
      );
    }, [disabled, error, color, size, className]);

    return (
      <div className={`flex ${label ? 'space-x-4' : null}`}>
        {label && <label className={handleLabelStyles}>{label}</label>}
        {multiline ? (
          <Textarea
            disabled={disabled}
            color={color}
            error={error}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={'Placeholder'}
            readOnly={readOnly}
          />
        ) : (
          <input
            disabled={disabled}
            className={handleInputStyles}
            onBlur={onBlur}
            onChange={onChange}
            readOnly={readOnly}
            ref={ref}
            type={type}
            {...rest}
          />
        )}
      </div>
    );
  },
);

/* Depending on your context of later use and real-world performance metrics,
 you may have to wrap this component with the `memo` HOC. */
export default Input;

Input.displayName = 'Input';
