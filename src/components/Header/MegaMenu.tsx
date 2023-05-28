import React from 'react';

import MegaMenuSubItem from 'components/Header/MegaMenuSubItem';

import { HeaderMenuItem } from 'types/common';

interface MegaMenuProps {
  data: HeaderMenuItem;
}

const MegaMenu = (props: MegaMenuProps) => {
  const { data } = props;
  return (
    <>
      <div className="big_title">
        {data.title}
        <span></span>
      </div>
      <div className="menu_mega">
        <div className="w_bg">
          <div className="main-1240">
            {data.list &&
              data.list.map((subItem) => {
                return (
                  <MegaMenuSubItem
                    key={subItem.id}
                    parentId={`${data.id}`}
                    parentLink={`${data.link}`}
                    data={subItem}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
