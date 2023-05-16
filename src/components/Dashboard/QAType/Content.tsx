import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';

import { typeColList, qaTypeList } from 'data/dashboard';

const Content = () => {
  return (
    <>
      <TableTemplate page="qa-type" cols={typeColList} data={qaTypeList} />
    </>
  );
};

export default Content;
