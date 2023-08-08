import React, { useEffect } from 'react';

import MegaMenuSubItem from 'components/Header/MegaMenuSubItem';

import { HeaderMenuItem } from 'types/common';

import { HEADER_ABOUT_API_URL } from 'data/api';
import { headerAboutData } from 'data/about';

import useRender from 'hooks/page/useRender';
import { useHeaderContext } from 'context/HeaderContext';

interface MegaMenuProps {
  data: HeaderMenuItem;
}

const MegaMenu = (props: MegaMenuProps) => {
  const { data } = props;
  const { getDetail } = useRender();
  const { setAbout } = useHeaderContext();

  const handleHeaderAboutHover = () => {
    getDetail({
      url: HEADER_ABOUT_API_URL,
      setData: setAbout,
      defaultData: headerAboutData,
    });
  };

  return (
    <>
      <div className="big_title" onMouseEnter={handleHeaderAboutHover}>
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
