import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { QAItem } from 'types/qa';
import { ColItem } from 'types/utils';

import { qaColList } from 'data/dashboard';
import { qaList } from 'data/qa';
import {
  QA_DASHBOARD_API_URL,
  QA_DASHBOARD_PATH,
  QA_TYPE_DASHBOARD_API_URL,
} from 'data/api';

import useDashboard from 'hooks/useDashboard';

const Content = () => {
  const PAGE: string = QA_DASHBOARD_PATH;
  const [qaList, setQaList] = useState<QAItem[]>([]);
  const [colList, setColList] = useState<ColItem[]>([]);
  const { getList, handleRelate } = useDashboard();

  useEffect(() => {
    getList({
      url: QA_DASHBOARD_API_URL,
      setList: setQaList,
    });
    handleRelate({
      key: 'id',
      value: 'type_id',
      url: QA_TYPE_DASHBOARD_API_URL,
      prevList: qaColList,
      setList: setColList,
    });
  }, []);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={colList}
        data={qaList}
        renderAction={() => <AddBtn page={PAGE} />}
      />
    </>
  );
};

export default Content;
