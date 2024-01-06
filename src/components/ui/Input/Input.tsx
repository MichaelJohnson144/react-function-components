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
            onBlur={onBlur}
            onChange={onChange}
            placeholder={'Placeholder'}
          />
        ) : (
          <input
            disabled={disabled}
            className={handleInputStyles}
            onBlur={onBlur}
            onChange={onChange}
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
