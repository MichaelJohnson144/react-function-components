/* If you utilize this component in a Next.js application,
 you must replace the `<a>` tag with the framework's built-in `<Link>` tag. */

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
            'my-1.5 ml-2 rounded p-2 font-open-sans font-semibold text-slate-900 hover:animate-pulse hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-600 hover:!text-white dark:text-slate-200 sm:rounded-md sm:p-2'
          }
        >
          {item.label}
        </p>
      </a>
    </li>
  );
};

export default MenuItem;
