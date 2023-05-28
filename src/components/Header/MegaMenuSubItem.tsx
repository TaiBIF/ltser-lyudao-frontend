import React from 'react';

import FinalItem from 'components/Header/FinalItem';

import { HeaderMenuItem } from 'types/common';

interface MegaMenuSubItemProps {
  parentId: string;
  parentLink: string;
  data: HeaderMenuItem;
}

const MegaMenuSubItem = (props: MegaMenuSubItemProps) => {
  const { parentId, parentLink, data } = props;
  return (
    <>
      <div key={`${parentId}-${data.id}`} className="item-set1">
        <div className="titlebox">
          {data.title}
          <div className="mark"></div>
        </div>
        <div className="itembox">
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

export default MegaMenuSubItem;
