import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { typeColList, qaTypeList } from 'data/dashboard';

const Content = () => {
  const PAGE: string = 'qa-type';
  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={typeColList}
        data={qaTypeList}
        renderAction={() => <AddBtn page={PAGE} />}
      />
    </>
  );
};

export default Content;
