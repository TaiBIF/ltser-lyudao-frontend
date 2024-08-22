import { useAuthContext } from 'context/AuthContext';
import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderMenuItem } from 'types/common';

interface ItemProps {
  data: HeaderMenuItem;
}

const Item = (props: ItemProps) => {
  const { data } = props;
  const { auth, group } = useAuthContext();

  const shouldShowItem = () => {
    if (data.show === 'auth' && !auth) {
      return false; // 未登入用戶不顯示項目
    }
    if (data.requiredGroup && !data.requiredGroup.includes(group)) {
      return false; // 不在分組內不顯示項目
    }
    return true; // 顯示項目
  };

  return (
    <>
      {shouldShowItem() && (
        <li>
          <Link to={`/${data.link}`} className="big_title">
            {data.title}
            <span></span>
          </Link>
        </li>
      )}
    </>
  );
};

export default Item;
