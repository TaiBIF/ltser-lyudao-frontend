import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { aboutColList } from 'data/dashboard';
import { aboutList } from 'data/about';

const Content = () => {
  const PAGE: string = 'about';
  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={aboutColList}
        data={aboutList}
        renderAction={() => <AddBtn page={PAGE} />}
      />
    </>
  );
};

export default Content;
