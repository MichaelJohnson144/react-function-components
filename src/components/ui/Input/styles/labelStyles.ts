import { InputProps } from '../Input';

const styles = {
  theme: {
    color: {
      inherit: 'text-slate-900 dark:text-slate-200',
      primary: 'text-[#1976D2] dark:text-[#90CAF9]',
      secondary: 'text-[#9C27B0] dark:text-[#CE93D8]',
      success: 'text-[#2E7D32] dark:text-[#66BB6A]',
      error: 'text-[#D32F2F] dark:text-[#F44336]',
      info: 'text-[#0288D1] dark:text-[#29B6F6]',
      warning: 'text-[#ED6C02] dark:text-[#FFA726]',
    },
  },
};

const handleLabelStyles = ({ disabled, error, color }: InputProps) => {
  const themeStyles = styles.theme;

  if (disabled) {
    return 'text-black/[0.15] dark:text-white/30';
  }

  if (error) {
    return themeStyles.color.error;
  }

  return color ? themeStyles.color[color] : 'text-slate-900 dark:text-slate-200';
};

const labelStyles = (stylesProps: InputProps) => {
  return handleLabelStyles(stylesProps);
};

export default labelStyles;
