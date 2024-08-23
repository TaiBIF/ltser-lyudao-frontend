import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderMenuItem } from 'types/common';
import { useHeaderContext } from 'context/HeaderContext';

interface FinalItemProps {
  about?: boolean;
  parentId: string;
  parentLink: string;
  data: HeaderMenuItem;
}

const FinalItem = (props: FinalItemProps) => {
  const { about = false, parentId, parentLink, data } = props;
  const { handleMenuClick } = useHeaderContext();
  const link = about
    ? `${parentLink}/${data.id}`
    : `${parentLink}/${data.link}`;
  return (
    <>
      <Link key={`${parentId}-${data.id}`} to={link} onClick={handleMenuClick} data-target="menuMega">
        {about ? data.name : data.title}
      </Link>
    </>
  );
};

export default FinalItem;
