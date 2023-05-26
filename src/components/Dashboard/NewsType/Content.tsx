import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { typeColList, newsTypeList } from 'data/dashboard';

const Content = () => {
  const PAGE: string = 'news-type';
  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={typeColList}
        data={newsTypeList}
        renderAction={() => <AddBtn page={PAGE} />}
      />
    </>
  );
};

export default Content;
