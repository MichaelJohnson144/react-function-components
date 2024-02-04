/* If you utilize this component in a Next.js application, you must add React's `use client`
 directive above these import statements or a parent's you may subject it to since Next.js's new App Router
 (`app`) leverage React Server Components by default. */

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
      className={`${className ?? ''} size-[52px] rounded-full`}
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
