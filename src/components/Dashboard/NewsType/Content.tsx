import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { typeColList } from 'data/dashboard';
import { newsTypeList } from 'data/news';
import { NEWS_TYPE_API_URL } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';
import usePage from 'hooks/utils/usePage';

import { TypeItem } from 'types/utils';

const Content = () => {
  const PAGE: string = 'news-type';

  const [newsTypeList, setNewsTypeList] = useState<TypeItem[] | null>(null);

  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();
  const { getList } = useDashboard();

  useEffect(() => {
    getList({
      url: NEWS_TYPE_API_URL,
      setList: setNewsTypeList,
      params: { page: currentPage },
      setPaginationData,
    });
  }, [currentPage]);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={typeColList}
        data={newsTypeList}
        renderAction={() => <AddBtn page={PAGE} />}
      />
    </>
  );
};

export default Content;
