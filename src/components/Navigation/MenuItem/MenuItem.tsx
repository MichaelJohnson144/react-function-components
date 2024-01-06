// Feel free to integrate and configure this component with "react-router-dom" at your own leisure

import { handleOnClickPlaceholder } from '../../../utils/placeholderEventHandlers';

export interface MenuItemRecord {
  href: string;
  link: string;
  label: string;
}

interface MenuItemProp {
  item: MenuItemRecord;
}

const MenuItem = ({ item }: MenuItemProp) => {
  return (
    <li>
      <a href={item.href ? item.href : `/${item.link}`} onClick={handleOnClickPlaceholder}>
        <p
          className={
            'my-1.5 ml-2 rounded p-2 font-open-sans font-semibold text-slate-900 hover:animate-pulse hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-600 hover:!text-white sm:rounded-md sm:p-2 dark:text-slate-200'
          }
        >
          {item.label}
        </p>
      </a>
    </li>
  );
};

export default MenuItem;
