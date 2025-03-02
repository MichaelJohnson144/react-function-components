import React, { useCallback, useState } from 'react';

import SectionMenuItem, { type SectionMenuItemRecord } from './SectionMenuItem/SectionMenuItem';

export interface SectionMenuProps {
  items: SectionMenuItemRecord[];
  onChange?: (item: SectionMenuItemRecord) => void;
  selectedAnchor?: string;
}

const SectionMenu = ({ items, onChange, selectedAnchor }: SectionMenuProps) => {
  const [selectedSectionMenuItem, setSelectedSectionMenuItem] = useState(selectedAnchor);

  const handleOnClick = useCallback(
    (clickedSectionMenuItem: SectionMenuItemRecord) => {
      if (selectedSectionMenuItem !== clickedSectionMenuItem.anchor) {
        setSelectedSectionMenuItem(clickedSectionMenuItem.anchor);
        onChange?.(clickedSectionMenuItem);
      }
    },
    [selectedSectionMenuItem, onChange],
  );

  return (
    <nav className={'flex items-center gap-3 whitespace-nowrap'}>
      {items.map((item, index) => (
        <React.Fragment key={item.anchor}>
          {index ? <span className={'mb-1.5 size-1 rounded-full bg-gray-400'} /> : null}
          <SectionMenuItem item={item} highlightedAnchor={selectedSectionMenuItem} onClick={handleOnClick} />
        </React.Fragment>
      ))}
    </nav>
  );
};

SectionMenu.displayName = 'SectionMenu';

export default SectionMenu;
