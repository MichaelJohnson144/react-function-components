import { type ButtonHTMLAttributes, type ReactNode, forwardRef, useMemo } from 'react';
import cn from 'classnames';

import variantTypes from './variantTypes';
import useRipple from './useRipple';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  disableRipple?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'vanilla' | 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id = 'button',
      name = 'button',
      type = 'button',
      'aria-label': ariaLabel = 'Button',
      children,
      onClick,
      disabled = false,
      disableRipple = false,
      variant = 'text',
      color = 'primary',
      size = 'medium',
      className,
      ...rest
    },
    ref,
  ) => {
    const styles = useMemo(() => {
      const buttonSize: Record<NonNullable<ButtonProps['size']>, string> = {
        small: 'px-[10px] py-[4px] text-sm',
        medium: 'px-[16px] py-[6px]',
        large: 'px-[22px] py-[8px] text-lg',
      };

      return cn(
        'font-semibold relative flex items-center justify-center overflow-hidden rounded-sm font-medium transition-all duration-200 ease-in-out',
        variantTypes({ disabled, variant, color }),
        buttonSize[size as NonNullable<ButtonProps['size']>],
        className,
      );
    }, [disabled, variant, color, size, className]);

    const { addRippleEffect, rippleEffects } = useRipple({ variant, color, disableRipple });

    return (
      <button
        id={id}
        name={name}
        type={type}
        aria-label={ariaLabel}
        onClick={(event) => {
          onClick?.(event);
          if (!disableRipple) {
            addRippleEffect(event);
          }
        }}
        disabled={disabled}
        color={color}
        className={styles}
        ref={ref}
        {...rest}
      >
        {children}
        {rippleEffects.map((rippleEffect) => (
          <span
            key={rippleEffect.id}
            style={{
              top: `${rippleEffect.y - rippleEffect.size / 2}px`,
              left: `${rippleEffect.x - rippleEffect.size / 2}px`,
              width: `${rippleEffect.size}px`,
              height: `${rippleEffect.size}px`,
            }}
            className={`animate-ripple absolute rounded-full ${rippleEffect.color} opacity-30`}
          />
        ))}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
