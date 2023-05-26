import React from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { newsColList } from 'data/dashboard';
import { newsList } from 'data/news';

const Content = () => {
  const PAGE: string = 'news';
  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={newsColList}
        data={newsList}
        renderAction={() => <AddBtn page={PAGE} />}
      />
    </>
  );
};

export default Content;
