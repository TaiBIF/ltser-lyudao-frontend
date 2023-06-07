import React, { useState, useEffect } from 'react';
import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { LiteratureItem } from 'types/literature';

import { literatureColList } from 'data/dashboard';
import { LITERATURE_DASHBOARD_API_URL } from 'data/api';

import useDashboard from 'hooks/useDashboard';

const Content = () => {
  const PAGE: string = 'related-literature';
  const [literatureList, setLiteratureList] = useState<LiteratureItem[]>([]);
  const { getList } = useDashboard();

  useEffect(() => {
    getList({
      url: LITERATURE_DASHBOARD_API_URL,
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
