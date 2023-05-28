import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderMenuItem } from 'types/common';

import { useHeaderContext } from 'context/HeaderContext';
import SecMenuSubItem from './SecMenuSubItem';

interface SecMenuProps {
  data: HeaderMenuItem;
}

const SecMenu = (props: SecMenuProps) => {
  const { data } = props;
  const { handleMenuMouseLeave } = useHeaderContext();
  return (
    <>
      <p className="big_title">
        {data.title}
        <span></span>
      </p>
      <div className="menu_2" onMouseLeave={handleMenuMouseLeave}>
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
