import { motion as m } from 'framer-motion';

import { navigationMotionProps } from '../navigationMotionProps.ts';
import MenuContent from '../MenuContent/MenuContent.tsx';

/**
 * Renders the desktop view of the navigation menu.
 *
 * @returns The desktop navigation menu.
 */
export const DesktopMenu = () => {
  return (
    <ul aria-label={'Desktop menu'} className={'max-lg:hidden lg:flex lg:gap-6'}>
      <MenuContent />
    </ul>
  );
};

/**
 * Renders the mobile view of the navigation menu.
 *
 * @returns The mobile navigation menu.
 */
export const MobileMenu = () => (
  <m.ul
    aria-label={'Mobile menu'}
    className={
      'bg-gray-950/2 dark:bg-white/2 flex flex-col items-start gap-6 p-3 sm:flex-row sm:justify-center lg:hidden'
    }
    {...navigationMotionProps}
  >
    <MenuContent />
  </m.ul>
);
