import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderMenuItem } from 'types/common';

interface ItemProps {
  data: HeaderMenuItem;
}

const Item = (props: ItemProps) => {
  const { data } = props;
  return (
    <>
      <li>
        <Link to={`/${data.link}`} className="big_title">
          {data.title}
          <span></span>
        </Link>
      </li>
    </>
  );
};

export default Item;
