import { MouseEventHandler } from 'react';
import { MenuOpenRounded, MenuRounded } from '@mui/icons-material';

import Button from '../../ui/Button';

interface MobileMenuButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  menuIsOpened?: boolean;
}

const MobileMenuButton = ({ onClick, menuIsOpened }: MobileMenuButtonProps) => {
  return (
    <Button
      aria-label={'Toggle between the mobile menu navigation states'}
      className={'size-[52px] rounded-full !p-0 text-slate-900 lg:hidden dark:!text-slate-200 '}
      id={'mobileMenuButton'}
      name={'mobileMenuButton'}
      onClick={onClick}
      variant={null}
    >
      {menuIsOpened ? (
        <MenuOpenRounded className={'!text-4xl'} />
      ) : (
        <MenuRounded className={'!text-4xl'} />
      )}
    </Button>
  );
};

export default MobileMenuButton;
