import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Logo from './Logo/Logo';
import MobileMenuButton from './MobileMenuButton/MobileMenuButton';
import { DesktopMenu, MobileMenu } from './MenuType/MenuType';
import ThemeToggler from '../ui/ThemeToggler/ThemeToggler';
import SocialMedia from './SocialMedia/SocialMedia';

const Navigation = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleOnClick = useCallback(() => {
    setIsShowing((prevIsShowing) => !prevIsShowing);
  }, []);

  return (
    <header className={'sticky right-0 top-0 z-10 border-b border-gray-950/5 backdrop-blur dark:border-white/10'}>
      <div className={'bg-gray-950/5 dark:bg-gray-950'}>
        <nav aria-label={'Navigation MenuType'}>
          <div className={'flex h-14 items-center justify-between gap-8 pl-3 lg:px-6'}>
            <Logo />
            <div className={'flex items-center gap-1 sm:gap-3'}>
              <DesktopMenu />
              <div className={'flex gap-1 sm:gap-3'}>
                <ThemeToggler />
                <SocialMedia />
              </div>
              <MobileMenuButton onClick={handleOnClick} menuIsOpened={isShowing} />
            </div>
          </div>
          <AnimatePresence>{isShowing && <MobileMenu />}</AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

Navigation.displayName = 'Navigation';

export default Navigation;
