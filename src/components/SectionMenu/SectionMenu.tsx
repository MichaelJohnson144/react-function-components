import React, { useState, useCallback } from 'react';

import SectionMenuItem, { SectionMenuItemRecord } from './SectionMenuItem/SectionMenuItem';

export interface SectionMenuProps {
  selectedAnchor?: string;
  onChange?: (item: SectionMenuItemRecord) => void;
  items: SectionMenuItemRecord[];
}

const SectionMenu = ({ selectedAnchor, onChange, items }: SectionMenuProps) => {
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
    <nav className={'mb-5 flex items-center space-x-3 whitespace-nowrap'}>
      {items.map((item, index) => (
        <React.Fragment key={item.anchor}>
          {index ? <span className={'mb-1 size-1 rounded-full bg-neutral-400'} /> : null}
          <SectionMenuItem
            highlightedAnchor={selectedSectionMenuItem}
            onClick={handleOnClick}
            item={item}
          />
        </React.Fragment>
      ))}
    </nav>
  );
};

export default SectionMenu;
