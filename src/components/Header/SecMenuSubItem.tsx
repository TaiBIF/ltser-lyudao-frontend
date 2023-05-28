import React from 'react';

import FinalItem from './FinalItem';

import { HeaderMenuItem } from 'types/common';
import { useHeaderContext } from 'context/HeaderContext';

interface SecMenuSubItemProps {
  parentId: string;
  parentLink: string;
  data: HeaderMenuItem;
}

const SecMenuSubItem = (props: SecMenuSubItemProps) => {
  const { parentId, parentLink, data } = props;
  const { show, m3titleRef, menu3Ref, handleMenuClick } = useHeaderContext();
  return (
    <>
      <div key={`${parentId}-${data.id}`} className="m3titlebox">
        <div
          className={`m3title ${show.menu3 ? 'now' : ''}`}
          ref={m3titleRef}
          onClick={handleMenuClick}
          data-target="menu3"
        >
          {data.title}
        </div>
        <div className="menu_3" ref={menu3Ref}>
          {data.list &&
            data.list.map((finalItem) => {
              return (
                <FinalItem
                  key={`${parentId}-${data.id}-${finalItem.id}`}
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

export default SecMenuSubItem;
