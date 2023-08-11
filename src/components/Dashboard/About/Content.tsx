import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { AboutItem } from 'types/about';

import { aboutColList } from 'data/dashboard';
import { aboutList } from 'data/about';
import { ABOUT_API_URL, ABOUT_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';
import usePage from 'hooks/utils/usePage';

const Content = () => {
  const PAGE: string = ABOUT_PATH;

  const [aboutList, setAboutList] = useState<AboutItem[] | null>(null);

  const { getList } = useDashboard();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

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
