import { type MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

import type { ButtonProps } from './Button';
import { rippleColorStyles } from './styles/typeStyles';

interface RippleStateProps {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

const useRipple = ({ variant, color }: ButtonProps) => {
  const [rippleEffects, setRippleEffects] = useState<RippleStateProps[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const counter = useRef(0);

  const removeEffect = (id: string) =>
    setRippleEffects((previousRippleEffects) => previousRippleEffects.filter((ripple) => ripple.id !== id));

  const getRippleColor = useCallback(() => {
    const handleVariant = variant ?? 'text';
    const handleColor = color ?? 'primary';
    const handleRippleColor = rippleColorStyles.get(handleVariant);

    if (!handleRippleColor) {
      console.warn(`${handleVariant} is an unknown variant. Defaulting to 'text' variant.`);
      const fallbackRippleColor = rippleColorStyles.get('text');
      return fallbackRippleColor?.get(handleColor) ?? '';
    }

    return handleRippleColor?.get(handleColor) ?? '';
  }, [variant, color]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        counter.current = 0;
      }
    };
  }, []);

  const addRippleEffect = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const rippleEffectContainer = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rippleEffectContainer.x;
      const y = event.clientY - rippleEffectContainer.y;
      const size = Math.max(rippleEffectContainer.width, rippleEffectContainer.height) * 2;

      counter.current += 1;
      const id = `${Date.now()}-${counter.current}`;
      const rippleColor = getRippleColor();

      setRippleEffects((previousRippleEffects) => [
        ...previousRippleEffects,
        {
          id,
          x,
          y,
          size,
          color: rippleColor,
        },
      ]);
      timerRef.current = setTimeout(() => removeEffect(id), 700);
    },
    [getRippleColor],
  );

  return { rippleEffects, addRippleEffect };
};

export default useRipple;
