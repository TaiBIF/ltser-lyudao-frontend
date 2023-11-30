import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { HeaderMenuItem } from 'types/common';

import SecMenuSubItem from './SecMenuSubItem';

import { useHeaderContext } from 'context/HeaderContext';
import { gsapSlideToggle } from 'utils/animation';

interface SecMenuProps {
  data: HeaderMenuItem;
}

const SecMenu = (props: SecMenuProps) => {
  const { data } = props;
  const { handleMenuMouseLeave } = useHeaderContext();
  const { handleMenuClick, show, secMenuRef, isMobile } = useHeaderContext();

  useEffect(() => {
    const target = secMenuRef.current;
    if (target) {
      if (show.secMenu) {
        target.style.display = 'block';
        gsapSlideToggle('auto', target, show.secMenu);
      } else {
        gsapSlideToggle('auto', target, show.secMenu);
      }
    }
  }, [show.secMenu]);

  return (
    <>
      <p
        className={`big_title ${isMobile && show.secMenu ? 'now' : ''}`}
        onClick={handleMenuClick}
        data-target="secMenu"
      >
        {data.title}
        <span></span>
      </p>
      <div
        className="menu_2 u-slide-toggle"
        onMouseLeave={handleMenuMouseLeave}
        ref={secMenuRef}
      >
        <div className="w_bg">
          {data.list &&
            data.list.map((subItem) => {
              return subItem.list ? (
                <SecMenuSubItem
                  key={`${data.id}-${subItem.id}`}
                  parentId={`${data.id}`}
                  parentLink={`${data.link}`}
                  data={subItem}
                />
              ) : (
                <Link
                  key={`${data.id}-${subItem.id}`}
                  to={`/${data.link}/${subItem.link}`}
                >
                  {subItem.title}
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SecMenu;
