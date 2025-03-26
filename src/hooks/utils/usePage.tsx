import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PaginationDataItem } from 'types/utils';

import { defaultPaginationData } from 'data/utils';

const usePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentCursor, setCurrentCursor] = useState<string>('*');
  const [paginationData, setPaginationData] = useState<PaginationDataItem>({
    ...defaultPaginationData,
  });
  const [currentRecordsPerPage, setCurrentRecordsPerPage] =
    useState<number>(10);

  const { pathname } = useLocation();

  useEffect(() => {
    setPaginationData({ ...defaultPaginationData });
  }, [pathname]);

  return {
    currentPage,
    setCurrentPage,
    paginationData,
    setPaginationData,
    currentRecordsPerPage,
    setCurrentRecordsPerPage,
    currentCursor,
    setCurrentCursor,
  };
};

export default usePage;
