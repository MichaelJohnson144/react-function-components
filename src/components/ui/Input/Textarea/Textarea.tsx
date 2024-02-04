import { TextareaHTMLAttributes, forwardRef, useRef, useEffect, useMemo } from 'react';
import cn from 'classnames';

import inputStyles from '../styles/inputStyles';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { disabled = false, error = false, color = 'primary', className, cols = 40, rows = 1, ...rest },
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

    const handleTextareaStyles = useMemo(() => {
      return cn(
        'flex items-center overflow-hidden rounded p-3 font-open-sans text-slate-900 dark:bg-inherit dark:text-slate-200',
        inputStyles({ disabled, error, color }),
        className,
      );
    }, [disabled, error, color, className]);

    const handleRef = (node: HTMLTextAreaElement) => {
      textareaRef.current = node;

      if (ref) {
        (typeof ref === 'function'
          ? ref
          : (reference: HTMLTextAreaElement) => (ref.current = reference))(node);
      }
    };

    return (
      <textarea
        disabled={disabled}
        color={color}
        className={handleTextareaStyles}
        cols={cols}
        ref={handleRef}
        rows={rows}
        {...rest}
      />
    );
  },
);

export default Textarea;

Textarea.displayName = 'Textarea';
