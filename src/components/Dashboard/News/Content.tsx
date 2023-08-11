import React, { useState, useEffect } from 'react';

import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { NewsItem } from 'types/news';

import { newsColList } from 'data/dashboard';
import { newsList } from 'data/news';
import { NEWS_API_URL, NEWS_TYPE_API_URL } from 'data/api';

import usePage from 'hooks/utils/usePage';
import useDashboard from 'hooks/page/useDashboard';
import { ColItem, TypeItem } from 'types/utils';

const Content = () => {
  const PAGE: string = 'news';
  const [newsList, setNewsList] = useState<NewsItem[] | null>(null);
  const [colList, setColList] = useState<ColItem[]>([]);

  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();
  const { getList, handleRelate } = useDashboard();

  useEffect(() => {
    getList({
      url: NEWS_API_URL,
      setList: setNewsList,
      params: { page: currentPage },
      setPaginationData,
    });
  }, [currentPage]);

  useEffect(() => {
    handleRelate({
      key: 'id',
      value: 'type',
      url: NEWS_TYPE_API_URL,
      prevList: newsColList,
      setList: setColList,
      relateKey: 'relate',
    });
  }, []);

  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={colList}
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
