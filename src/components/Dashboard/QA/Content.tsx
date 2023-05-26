import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { qaColList, qaList } from 'data/dashboard';

const Content = () => {
  const PAGE: string = 'qa';
  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={qaColList}
        data={qaList}
        renderAction={() => <AddBtn page={PAGE} />}
      />
    </>
  );
};

export default Content;
