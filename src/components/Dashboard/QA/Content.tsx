import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { QAItem } from 'types/qa';

import { qaColList } from 'data/dashboard';
import { qaList } from 'data/qa';

import useDashboard from 'hooks/useDashboard';
import { QA_DASHBOARD_API_URL } from 'data/api';

const Content = () => {
  const PAGE: string = 'qa';
  const [qaList, setQaList] = useState<QAItem[]>([]);
  const { getList } = useDashboard();

  useEffect(() => {
    getList({
      url: QA_DASHBOARD_API_URL,
      setList: setQaList,
    });
  }, []);

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
