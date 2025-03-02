import { DarkMode, LightMode, SettingsBrightnessTwoTone } from '@mui/icons-material';

import useTheme from './useTheme';
import Button from '../Button/Button';

interface ThemeTogglerProp {
  className?: string;
}

const ThemeToggler = ({ className }: ThemeTogglerProp) => {
  const { userPreference, cycleThroughPreference } = useTheme();

  const modeIcons = {
    system: <SettingsBrightnessTwoTone className={'text-slate-600 dark:text-[#DAD9D7]'} />,
    light: <LightMode className={'text-[#FFCC33]'} />,
    dark: <DarkMode className={'text-[#DAD9D7]'} />,
  };

  const mode = modeIcons[userPreference];

  return (
    <Button
      id={'themeToggler'}
      name={'themeToggler'}
      type={'button'}
      aria-label={'Theme Toggler'}
      onClick={cycleThroughPreference}
      color={'vanilla'}
      className={`${className ?? ''} size-[44px] !rounded-full`}
    >
      {mode}
    </Button>
  );
};

ThemeToggler.displayName = 'ThemeToggler';

export default ThemeToggler;
