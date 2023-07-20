import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { aboutColList } from 'data/dashboard';
import { aboutList } from 'data/about';
import usePage from 'hooks/utils/usePage';
import { AboutItem } from 'types/about';
import { ABOUT_API_URL } from 'data/api';
import useDashboard from 'hooks/page/useDashboard';

const Content = () => {
  const PAGE: string = 'about';

  const [aboutList, setAboutList] = useState<AboutItem[]>([]);
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();
  const { getList } = useDashboard();

  useEffect(() => {
    getList({
      url: ABOUT_API_URL,
      setList: setAboutList,
      params: { page: currentPage },
      setPaginationData,
    });
  }, [currentPage]);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={aboutColList}
        data={aboutList}
        renderAction={() => <AddBtn page={PAGE} />}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationData={paginationData}
      />
    </>
  );
};

export default Content;
