import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { NewsItem } from 'types/news';

import { newsColList } from 'data/dashboard';
import { newsList } from 'data/news';
import { NEWS_API_URL, NEWS_TYPE_API_URL } from 'data/api';

import usePage from 'hooks/utils/usePage';
import useDashboard from 'hooks/page/useDashboard';
import { TypeItem } from 'types/utils';

const Content = () => {
  const PAGE: string = 'news';
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [typeList, setTypeList] = useState<TypeItem[]>([]);

  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();
  const { getList } = useDashboard();

  useEffect(() => {
    getList({
      url: NEWS_TYPE_API_URL,
      setList: setTypeList,
    });
  }, []);

  useEffect(() => {
    getList({
      url: NEWS_API_URL,
      setList: setNewsList,
      params: { page: currentPage },
      setPaginationData,
    });
  }, [currentPage]);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={newsColList}
        data={newsList}
        renderAction={() => <AddBtn page={PAGE} />}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationData={paginationData}
      />
    </>
  );
};

export default Content;
