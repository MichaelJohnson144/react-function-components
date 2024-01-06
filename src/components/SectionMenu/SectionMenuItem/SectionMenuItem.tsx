import cn from 'classnames';

export interface SectionMenuItemRecord {
  anchor: string;
  label: string;
}

interface SectionMenuItemProps {
  item: SectionMenuItemRecord;
  highlightedAnchor?: string;
  onClick?: (item: SectionMenuItemRecord) => void;
}

const SectionMenuItem = ({
  item: { anchor, label },
  highlightedAnchor,
  onClick,
}: SectionMenuItemProps) => {
  const isActive = anchor === highlightedAnchor;

  return (
    <a
      className={cn(
        'relative flex flex-col pb-1 font-bebas-neue tracking-widest text-slate-500 transition-all ease-in-out after:h-0.5 after:w-0 after:bg-blue-800 after:opacity-0 after:transition-all after:duration-150 hover:text-inherit hover:after:w-full hover:after:opacity-100 sm:text-3xl after:sm:h-[0.17rem] dark:text-slate-300 dark:after:bg-blue-600 hover:dark:text-white',
        {
          '!text-inherit after:left-0 after:w-full after:opacity-100 dark:!text-white': isActive,
        },
      )}
      href={`#${anchor}`}
      onClick={(event) => {
        event.preventDefault();
        /* Does the `onClick`
         function pass down as a prop to the component containing the `anchor`
         element exists?
         If so, then call it with an object containing two properties: `anchor`
         and `label,` else if it is undefined, then return the function: */
        onClick?.({ anchor, label });
      }}
    >
      {label}
    </a>
  );
};

export default SectionMenuItem;
