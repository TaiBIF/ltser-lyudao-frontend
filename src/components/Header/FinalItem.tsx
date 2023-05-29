import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderMenuItem } from 'types/common';

interface FinalItemProps {
  parentId: string;
  parentLink: string;
  data: HeaderMenuItem;
}

const FinalItem = (props: FinalItemProps) => {
  const { parentId, parentLink, data } = props;
  return (
    <>
      <Link key={`${parentId}-${data.id}`} to={`${parentLink}/${data.link}`}>
        {data.title}
      </Link>
    </>
  );
};

export default FinalItem;
