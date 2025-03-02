import type { InputProps } from '../Input';

const styles: Record<NonNullable<InputProps['color']>, string> = {
  vanilla: 'text-gray-700 dark:text-white',
  primary: 'text-[#1976D2] dark:text-[#90CAF9]',
  secondary: 'text-[#9C27B0] dark:text-[#CE93D8]',
  success: 'text-[#2E7D32] dark:text-[#66BB6A]',
  error: 'text-[#D32F2F] dark:text-[#F44336]',
  info: 'text-[#0288D1] dark:text-[#29B6F6]',
  warning: 'text-[#ED6C02] dark:text-[#FFA726]',
};

const handleLabelStyles = ({ disabled, error, color }: InputProps) => {
  if (disabled) {
    return 'text-gray-950/15 dark:text-white/30';
  }

  if (error) {
    return styles.error;
  }

  return color ? styles[color as NonNullable<InputProps['color']>] : 'text-gray-700 dark:text-white';
};

const labelStyles = (props: InputProps) => {
  return handleLabelStyles(props);
};

export default labelStyles;
