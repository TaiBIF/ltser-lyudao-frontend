import React, { useState, useEffect } from 'react';
import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { LiteratureItem } from 'types/literature';

import { literatureColList } from 'data/dashboard';
import { literatureList } from 'data/literature';

import useDashboard from 'hooks/useDashboard';

const Content = () => {
  const PAGE: string = 'related-literature';
  const [literatureList, setLiteratureList] = useState<LiteratureItem[]>([]);
  const { getList } = useDashboard();

  useEffect(() => {
    getList({
      url: 'literatures',
      setList: setLiteratureList,
    });
  }, []);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={literatureColList}
        data={literatureList}
        renderAction={() => <AddBtn page={PAGE} />}
      />
    </>
  );
};

export default Content;
