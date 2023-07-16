import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PageDataItem } from 'types/utils';

import { defaultPageData } from 'data/utils';

const usePage = () => {
  const { pathname, search } = useLocation();
  const currentPage = new URLSearchParams(search).get('page');
  const [page, setPage] = useState<number>(1);
  const [pageData, setPageData] = useState<PageDataItem>({
    ...defaultPageData,
  });

  useEffect(() => {
    if (currentPage) {
      setPage(Number(currentPage));
    } else {
      setPage(1);
    }
  }, [currentPage]);

  return { pathname, page, pageData, setPageData };
};

export default usePage;
