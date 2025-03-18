import React, { useState, useEffect } from 'react';
import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { VisitorItem } from 'types/visitors';

import { VisitorColList } from 'data/dashboard';
import { VISITORS_API_URL } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';
import usePage from 'hooks/utils/usePage';

const Content = () => {
  const PAGE: string = 'visitors';
  const [visitorList, setVistiorList] = useState<VisitorItem[]>([]);
  const { getList } = useDashboard();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  useEffect(() => {
    getList({
      url: VISITORS_API_URL,
      setList: setVistiorList,
      params: { page: currentPage },
      setPaginationData,
      withHeaders: true,
    });
  }, [currentPage]);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={VisitorColList}
        data={visitorList}
        renderAction={() => <AddBtn page={PAGE} />}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationData={paginationData}
      />
    </>
  );
};

export default Content;
