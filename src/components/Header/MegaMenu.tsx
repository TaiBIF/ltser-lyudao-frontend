import React, { useEffect } from 'react';

import MegaMenuSubItem from 'components/Header/MegaMenuSubItem';

import { HeaderMenuItem } from 'types/common';

import { HEADER_ABOUT_API_URL } from 'data/api';
import { headerAboutData } from 'data/about';

import useRender from 'hooks/page/useRender';
import { useHeaderContext } from 'context/HeaderContext';
import { gsapSlideToggle } from 'utils/animation';

interface MegaMenuProps {
  data: HeaderMenuItem;
}

const MegaMenu = (props: MegaMenuProps) => {
  const { data } = props;
  const { getHeaderDetail } = useRender();
  const { setAbout, handleMenuClick, show, menuMegaRef, isMobile } =
    useHeaderContext();

  const handleHeaderAboutHover = () => {
    getHeaderDetail({
      url: HEADER_ABOUT_API_URL,
      setData: setAbout,
      defaultData: headerAboutData,
    });
  };

  useEffect(() => {
    const target = menuMegaRef.current;
    if (target) {
      if (show.menuMega) {
        target.style.display = 'block';
        gsapSlideToggle('auto', target, show.menuMega);
      } else {
        gsapSlideToggle('auto', target, show.menuMega);
      }
    }
  }, [show.menuMega]);

  return (
    <>
      <div
        className={`big_title ${isMobile && show.menuMega ? 'now' : ''}`}
        onMouseEnter={handleHeaderAboutHover}
        onClick={handleMenuClick}
        data-target="menuMega"
      >
        {data.title}
        <span></span>
      </div>
      <div
        className="menu_mega u-slide-toggle c-menu c-menu--mega"
        ref={menuMegaRef}
      >
        <div className="w_bg c-menu__content">
          <div className="main-1240 c-menu__block">
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
