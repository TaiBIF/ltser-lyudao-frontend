import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';

import { newsColList, newsList } from 'data/dashboard';

const Content = () => {
  return (
    <>
      <TableTemplate page="news" cols={newsColList} data={newsList} />
    </>
  );
};

export default Content;
