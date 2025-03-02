import type { InputProps } from '../Input';

const styles: Record<NonNullable<InputProps['color']>, string> = {
  vanilla: 'focus:outline-gray-600 dark:focus:outline-gray-300',
  primary: 'focus:outline-[#1976D2] dark:focus:outline-[#90CAF9]',
  secondary: 'focus:outline-[#9C27B0] dark:focus:outline-[#CE93D8]',
  success: 'focus:outline-[#2E7D32] dark:focus:outline-[#66BB6A]',
  error: 'focus:outline-[#D32F2F] dark:focus:outline-[#F44336]',
  info: 'focus:outline-[#0288D1] dark:focus:outline-[#29B6F6]',
  warning: 'focus:outline-[#ED6C02] dark:focus:outline-[#FFA726]',
};

const handleInputStyles = ({ disabled, error, color }: InputProps) => {
  if (disabled) {
    return 'border border-gray-300/60 dark:border-gray-600/60';
  }

  if (error) {
    return `border border-[#D32F2F] focus:outline-2 ${styles.error} dark:border-[#F44336]`;
  }

  return `${styles[color!]} border border-gray-300 hover:border-gray-600 focus:outline-2 dark:border-gray-600 dark:hover:border-gray-300`;
};

const inputStyles = (props: InputProps) => {
  return handleInputStyles(props);
};

export default inputStyles;
