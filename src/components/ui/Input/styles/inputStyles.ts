import { InputProps } from '../Input';

const styles = {
  theme: {
    color: {
      inherit: 'focus:outline-slate-900 dark:focus:outline-slate-200',
      primary: 'focus:outline-[#1976D2] dark:focus:outline-[#90CAF9]',
      secondary: 'focus:outline-[#9C27B0] dark:focus:outline-[#CE93D8]',
      success: 'focus:outline-[#2E7D32] dark:focus:outline-[#66BB6A]',
      error: 'focus:outline-[#D32F2F] dark:focus:outline-[#F44336]',
      info: 'focus:outline-[#0288D1] dark:focus:outline-[#29B6F6]',
      warning: 'focus:outline-[#ED6C02] dark:focus:outline-[#FFA726]',
    },
  },
};

const handleInputStyles = ({ disabled, error, color }: InputProps) => {
  const themeStyles = styles.theme;

  if (disabled) {
    return 'outline outline-1 outline-black/[0.15] dark:outline-white/30';
  }

  if (error) {
    return 'outline outline-1 outline-[#D32F2F] focus:outline-2 dark:outline-[#F44336] dark:focus:outline-[#F44336]';
  }

  return color
    ? `${themeStyles.color[color]} outline outline-1 outline-black/[0.15] hover:outline-slate-900 focus:outline-2 dark:outline-white/30 dark:hover:outline-slate-200`
    : 'outline outline-1 outline-black/[0.15] hover:outline-slate-900 focus:outline-2 focus:outline-slate-900 dark:outline-white/30 dark:hover:outline-slate-200 dark:focus:outline-slate-200';
};

const inputStyles = (stylesProps: InputProps) => {
  return handleInputStyles(stylesProps);
};

export default inputStyles;
