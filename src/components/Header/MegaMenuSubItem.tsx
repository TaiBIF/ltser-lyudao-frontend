import React, { useEffect, useState } from 'react';

import FinalItem from 'components/Header/FinalItem';

import { HeaderMenuItem } from 'types/common';

import { useHeaderContext } from 'context/HeaderContext';
import { gsapSlideToggle } from 'utils/animation';

interface MegaMenuSubItemProps {
  parentId: string;
  parentLink: string;
  data: HeaderMenuItem;
}

const MegaMenuSubItem = (props: MegaMenuSubItemProps) => {
  const { parentId, parentLink, data } = props;
  const { itemboxRefs, handleItemboxRef } = useHeaderContext();
  const [show, setShow] = useState<boolean>(false);

  const handleItemClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    const target =
      itemboxRefs.current && itemboxRefs.current[`${parentId}-${data.id}`];
    if (target) {
      if (show) {
        target.style.display = 'block';
        gsapSlideToggle('auto', target, show);
      } else {
        gsapSlideToggle('auto', target, show);
      }
    }
  }, [show]);

  return (
    <>
      <div className="item-set1">
        <div
          className={`titlebox ${show ? 'now' : ''}`}
          onClick={handleItemClick}
          data-target="itembox"
        >
          {data.title}
          <div className="mark"></div>
        </div>
        <div
          ref={handleItemboxRef(`${parentId}-${data.id}`)}
          className="itembox u-slide-toggle"
        >
          {data.list &&
            data.list.map((finalItem) => {
              return (
                <FinalItem
                  key={`${parentId}-${data.id}-${finalItem.id}`}
                  about={true}
                  parentId={`${parentId}-${data.id}`}
                  parentLink={`/${parentLink}/${data.link}`}
                  data={finalItem}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MegaMenuSubItem;
