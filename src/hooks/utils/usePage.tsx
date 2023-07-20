import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PaginationDataItem } from 'types/utils';

import { defaultPaginationData } from 'data/utils';

const usePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginationData, setPaginationData] = useState<PaginationDataItem>({
    ...defaultPaginationData,
  });

  return {
    currentPage,
    setCurrentPage,
    paginationData,
    setPaginationData,
  };
};

export default usePage;
