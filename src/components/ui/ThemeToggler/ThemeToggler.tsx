import { LightMode, DarkMode } from '@mui/icons-material';

import useTheme from './useTheme';
import Button from '../Button/Button';

interface ThemeTogglerProp {
  className?: string;
}

const ThemeToggler = ({ className }: ThemeTogglerProp) => {
  const { mode, toggleMode } = useTheme({});

  return (
    <Button
      aria-label={'Theme Toggler'}
      className={`${className ?? ''} h-[52px] w-[52px] rounded-full`}
      id={'themeToggler'}
      name={'themeToggler'}
      onClick={toggleMode}
      variant={null}
    >
      {mode === 'light' ? (
        <LightMode className={'text-[#FDB813]'} fontSize={'large'} />
      ) : (
        <DarkMode className={'text-[#F6F1D5]'} fontSize={'large'} />
      )}
    </Button>
  );
};

export default ThemeToggler;
