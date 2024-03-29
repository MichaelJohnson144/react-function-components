/* If you utilize this component in a Next.js application, you must add React's `use client`
 directive above these import statements or a parent's you may subject it to since the new App Router
 (`app`) leverage React Server Components by default. */

import { useState, useCallback } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';

import { menuItemProps } from './MenuItem/menuItemProps';
import MenuItem from './MenuItem';
import ThemeToggler from '../ui/ThemeToggler';
import SocialMedia from './SocialMedia';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import { navigationMotionProps } from './navigationMotionProps';

/* Since the `menuItems`
 list is a static array that never changes and thereby does not need to be memorized,
 it does not need to be recreated every time the `navigation` component renders,
 so it was predefined outside the parent component and imported as a constant: */
const menuItemsList = (
  <>
    {menuItemProps.map((item) => (
      // Use a unique identifier,`href` or `link` to identify each `MenuItem` data:
      <MenuItem item={item} key={item.href ?? item.link} />
    ))}
    <li className={'ml-4 mt-4 flex-col items-center md:mt-0 md:flex md:flex-row md:space-x-10'}>
      <ThemeToggler className={'!p-0'} />
      <SocialMedia />
    </li>
  </>
);

const Navigation = () => {
  const [isShowing, setIsShowing] = useState(false);

  /* Memorize the `handleOnClick` function,
   thereby preserving its identity and preventing unnecessary re-renders of the `MobileMenuButton`
   child component: */
  const handleOnClick = useCallback(() => {
    setIsShowing((prevIsShowing) => !prevIsShowing);
  }, []);

  return (
    <header
      className={
        'sticky right-0 top-0 z-10 h-fit w-full bg-black/5 backdrop-blur dark:bg-white/5 lg:flex lg:items-center'
      }
    >
      <div className={'w-full lg:mx-2'}>
        <nav className={'lg:flex lg:items-center lg:justify-between'}>
          <div className={'flex items-center justify-between'}>
            <Logo />
            <MobileMenuButton menuIsOpened={isShowing} onClick={handleOnClick} />
          </div>
          <AnimatePresence>
            <m.ul
              className={`items-start md:items-center md:justify-center md:space-x-8 lg:flex ${
                isShowing ? 'flex flex-col md:flex-row' : 'hidden'
              }`}
              key={
                isShowing
                  ? // Mobile display
                    'flex flex-col md:flex-row'
                  : // Desktop display
                    'items-start md:items-center md:justify-center md:space-x-8 lg:flex'
              }
              {...(isShowing && navigationMotionProps)}
            >
              {menuItemsList}
            </m.ul>
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
