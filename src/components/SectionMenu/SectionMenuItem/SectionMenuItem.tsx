import cn from 'classnames';

export interface SectionMenuItemRecord {
  anchor: string;
  label: string;
}

interface SectionMenuItemProps {
  item: SectionMenuItemRecord;
  onClick?: (item: SectionMenuItemRecord) => void;
  highlightedAnchor?: string;
}

const SectionMenuItem = ({ item: { anchor, label }, onClick, highlightedAnchor }: SectionMenuItemProps) => {
  const isActive = anchor === highlightedAnchor;

  return (
    <a
      href={`#${anchor}`}
      onClick={(event) => {
        event.preventDefault();
        onClick?.({ anchor, label });
      }}
      className={cn(
        'font-bebas-neue relative flex flex-col text-lg tracking-widest text-gray-700 transition-all ease-in-out after:h-0.5 after:w-0 after:bg-blue-800 after:opacity-0 after:transition-all after:duration-150 hover:text-gray-950 hover:after:w-full hover:after:opacity-100 sm:text-3xl after:sm:h-[0.17rem] dark:text-gray-300 dark:after:bg-blue-600 hover:dark:text-white',
        {
          'text-gray-950 after:left-0 after:w-full after:opacity-100 dark:!text-white': isActive,
        },
      )}
    >
      {label}
    </a>
  );
};

SectionMenuItem.displayName = 'SectionMenuItem';

export default SectionMenuItem;
