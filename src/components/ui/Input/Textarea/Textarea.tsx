import { type TextareaHTMLAttributes, forwardRef, useEffect, useMemo, useRef } from 'react';
import cn from 'classnames';

import inputStyles from '../styles/inputStyles';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  color?: 'vanilla' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id = 'textarea',
      name = 'textarea',
      'aria-label': ariaLabel = 'Textarea',
      placeholder = 'Placeholder',
      disabled = false,
      error = false,
      color = 'primary',
      className,
      cols = 40,
      rows = 1,
      ...rest
    },
    ref,
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      const updateHeight = () => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      };

      textarea.addEventListener('input', updateHeight);
      updateHeight();

      return () => {
        textarea.removeEventListener('input', updateHeight);
      };
    }, []);

    const handleTextareaStyles = useMemo(
      () =>
        cn(
          'font-open-sans flex items-center overflow-hidden rounded-sm p-3 text-gray-700 dark:text-white',
          inputStyles({ disabled, error, color }),
          className,
        ),
      [disabled, error, color, className],
    );

    const handleRef = (node: HTMLTextAreaElement) => {
      textareaRef.current = node;
      if (ref) {
        if (typeof ref === 'function') {
          ref(node);
        } else {
          ref.current = node;
        }
      }
    };

    return (
      <textarea
        id={id}
        name={name}
        aria-label={ariaLabel}
        placeholder={placeholder}
        disabled={disabled}
        color={color}
        className={handleTextareaStyles}
        cols={cols}
        rows={rows}
        ref={handleRef}
        {...rest}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
