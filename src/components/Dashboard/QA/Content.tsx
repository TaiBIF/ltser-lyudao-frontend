import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { QAItem } from 'types/qa';
import { ColItem } from 'types/utils';

import { qaColList } from 'data/dashboard';
import { qaList } from 'data/qa';
import { QA_API_URL, QA_PATH, QA_TYPE_API_URL } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';
import usePage from 'hooks/utils/usePage';

const Content = () => {
  const PAGE: string = QA_PATH;

  const [qaList, setQaList] = useState<QAItem[]>([]);
  const [colList, setColList] = useState<ColItem[]>([]);

  const { getList, handleRelate } = useDashboard();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  useEffect(() => {
    getList({
      url: QA_API_URL,
      setList: setQaList,
      params: { page: currentPage },
      setPaginationData,
    });
  }, [currentPage]);

  useEffect(() => {
    handleRelate({
      key: 'id',
      value: 'type_id',
      url: QA_TYPE_API_URL,
      prevList: qaColList,
      setList: setColList,
      relateKey: 'relate',
    });
  }, []);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={colList}
        data={qaList}
        renderAction={() => <AddBtn page={PAGE} />}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationData={paginationData}
      />
    </>
  );
};

export default Content;
