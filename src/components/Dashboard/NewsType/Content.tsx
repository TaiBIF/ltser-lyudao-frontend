import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';

import { typeColList, newsTypeList } from 'data/dashboard';

const Content = () => {
  return (
    <>
      <TableTemplate page="news-type" cols={typeColList} data={newsTypeList} />
    </>
  );
};

export default Content;
