import type { ButtonProps } from './Button';
import { variantTypeStyles } from './styles/typeStyles';

export const handleVariantTypes = ({ disabled, variant, color }: ButtonProps) => {
  const typeStyle = variantTypeStyles.get(variant ?? 'text');
  if (!typeStyle) {
    console.warn(`${variant} is an unknown variant. Defaulting to 'text' variant.`);
    const fallbackTypeStyle = variantTypeStyles.get('text');
    return fallbackTypeStyle?.get('primary') ?? '';
  }

  if (disabled) {
    switch (variant) {
      case 'contained':
        return typeStyle?.get('disabled');
      case 'outlined':
        return `${typeStyle?.get('disabled')} outline outline-1`;
      case 'text':
        return typeStyle?.get('disabled');
    }
  }

  const typeStyleColor = typeStyle?.get(color!);
  if (variant === 'outlined') {
    return color === 'vanilla'
      ? `${typeStyleColor} text-gray-950 dark:text-white`
      : `${typeStyleColor} outline outline-1`;
  }
  return typeStyleColor;
};

const variantTypes = ({ disabled, variant, color }: ButtonProps) => {
  if (variant && !color) {
    switch (variant) {
      case 'contained':
      case 'outlined':
      case 'text':
        return handleVariantTypes({ disabled, variant, color: 'primary' });
      default:
        return 'text';
    }
  }
  return handleVariantTypes({ disabled, variant, color });
};

export default variantTypes;
