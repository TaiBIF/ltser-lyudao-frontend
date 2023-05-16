import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';

import { qaColList, qaList } from 'data/dashboard';

const Content = () => {
  return (
    <>
      <TableTemplate page="qa" cols={qaColList} data={qaList} />
    </>
  );
};

export default Content;
