import { useAuthContext } from 'context/AuthContext';
import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderMenuItem } from 'types/common';

interface ItemProps {
  data: HeaderMenuItem;
}

const Item = (props: ItemProps) => {
  const { data } = props;
  const { auth } = useAuthContext();

  return (
    <>
      {data.show === 'auth' ? (
        auth ? (
          <li>
            <Link to={`/${data.link}`} className="big_title">
              {data.title}
              <span></span>
            </Link>
          </li>
        ) : (
          <></>
        )
      ) : (
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
