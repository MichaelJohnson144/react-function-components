import type { MouseEventHandler } from 'react';
import { MenuOpenRounded, MenuRounded } from '@mui/icons-material';

import Button from '../../ui/Button/Button';

interface MobileMenuButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  menuIsOpened?: boolean;
}

const MobileMenuButton = ({ onClick, menuIsOpened }: MobileMenuButtonProps) => {
  return (
    <Button
      id={'mobileMenuButton'}
      name={'mobileMenuButton'}
      type={'button'}
      aria-label={'Toggle between the mobile menu navigation states'}
      aria-expanded={menuIsOpened}
      onClick={onClick}
      color={'vanilla'}
      className={'size-[44px] !rounded-full text-gray-950 lg:hidden dark:text-white'}
    >
      {menuIsOpened ? <MenuOpenRounded /> : <MenuRounded />}
    </Button>
  );
};

MobileMenuButton.displayName = 'MobileMenuButton';

export default MobileMenuButton;
