import React, { useState, useEffect } from 'react';
import TableTemplate from 'components/Dashboard/Template/Table';

import { socialInterviewDataColList } from 'data/dashboard';
import { SOCIAL_INTERVIEW_DATA_API_URL } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';
import usePage from 'hooks/utils/usePage';

const Content = () => {
  const PAGE: string = 'user';
  const [list, setList] = useState<any[]>([]);
  const { getList } = useDashboard();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  useEffect(() => {
    getList({
      url: SOCIAL_INTERVIEW_DATA_API_URL,
      setList: setList,
      params: { page: currentPage },
      setPaginationData,
    });
  }, [currentPage]);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={socialInterviewDataColList}
        data={list}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationData={paginationData}
      />
    </>
  );
};

export default Content;
