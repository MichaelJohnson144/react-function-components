import { type InputHTMLAttributes, forwardRef, useId, useMemo } from 'react';
import cn from 'classnames';

import labelStyles from './styles/labelStyles';
import inputStyles from './styles/inputStyles';
import Textarea from './Textarea/Textarea';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  multiline?: boolean;
  placeholder?: string;
  error?: boolean;
  color?: 'vanilla' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id = 'input',
      name = 'input',
      'aria-label': ariaLabel = 'Input',
      label = 'Label',
      multiline = false,
      type = 'text',
      placeholder = 'Placeholder',
      disabled = false,
      readOnly = false,
      error = false,
      size = 30,
      color = 'primary',
      className,
      ...rest
    },
    ref,
  ) => {
    const generateUniqueID = useId();
    const elementID = id ?? generateUniqueID;

    const handleLabelStyles = useMemo(
      () => cn('flex items-center font-semibold', labelStyles({ disabled, error, color }), className),
      [disabled, error, color, className],
    );

    const handleInputStyles = useMemo(() => {
      const inputSize: Record<NonNullable<InputProps['size']>, string> = {
        10: 'py-[4px] px-[12px]',
        30: 'p-3',
      };

      return cn(
        'font-open-sans rounded-sm text-gray-700 placeholder:text-gray-400 dark:text-white',
        inputStyles({ disabled, error, color }),
        inputSize[size as NonNullable<InputProps['size']>],
        className,
      );
    }, [disabled, error, color, size, className]);

    return (
      <div className={cn('flex', { 'gap-4': label })}>
        {label && (
          <label htmlFor={elementID} className={handleLabelStyles}>
            {label}
          </label>
        )}

        {multiline ? (
          <Textarea
            id={elementID}
            name={name}
            aria-label={ariaLabel}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            error={error}
            color={color}
          />
        ) : (
          <input
            id={elementID}
            name={name}
            aria-label={ariaLabel}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            className={handleInputStyles}
            ref={ref}
            {...rest}
          />
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
