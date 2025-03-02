import { handleOnClickPlaceholder } from '@/utils/placeholderEventHandler';

export interface MenuItemRecord {
  href: string;
  label: string;
}

interface MenuItemProps {
  item: MenuItemRecord;
}

const MenuItem = ({ item: { href, label } }: MenuItemProps) => {
  return (
    <li>
      <a href={href} onClick={handleOnClickPlaceholder}>
        <span
          className={
            'font-open-sans rounded-sm p-2 font-semibold text-gray-700 hover:animate-pulse hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-600 hover:text-white sm:rounded-md dark:text-gray-300'
          }
        >
          {label}
        </span>
      </a>
    </li>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
