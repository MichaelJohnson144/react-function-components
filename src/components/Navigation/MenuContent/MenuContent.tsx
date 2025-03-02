import MenuItem from '../MenuItem/MenuItem.tsx';
import { menuItemProps } from '../MenuItem/menuItemProps';

/**
 * Renders the static content of the navigation menu.
 *
 * @returns The navigation menu's content.
 */
const MenuContent = () => {
  const menuItems = (
    <>
      {menuItemProps.map((item) => (
        <MenuItem key={item.href} item={item} />
      ))}
    </>
  );

  return <>{menuItems}</>;
};

MenuContent.displayName = 'MenuContent';

export default MenuContent;
