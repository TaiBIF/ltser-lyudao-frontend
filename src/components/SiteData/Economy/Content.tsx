import React, { useEffect } from 'react';

import Search from 'components/SiteData/Search';
import Result from 'components/SiteData/Result';
import Title from 'components/SiteData/Title';
import { useLocation } from 'react-router-dom';
import { useDataContext } from 'context/DataContext';
import { ContextItem } from 'types/utils';
import usePage from 'hooks/utils/usePage';

const Content = () => {
  const location = useLocation();
  const { pathname } = location;
  const paths = pathname.split('/');
  const item = paths[paths.length - 1];

  const contextData = useDataContext().find((v: ContextItem) => v.id === item);
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  const isFetchingFields = contextData.fields.length === 0;
  const isFetchingRaws = contextData.raws === null;
  const isDoneFetching = !isFetchingFields && !isFetchingRaws;

  useEffect(() => {
    contextData.getFields();
  }, [pathname]);

  return (
    <>
      <div className="right-infbox">
        <Title paths={paths} url={contextData.depositarUrl} />
        <div className="data-searchbox">
          <Search
            item={item}
            isDoneFetching={isDoneFetching}
            setPaginationData={setPaginationData}
          />
          <Result
            item={item}
            isDoneFetching={isDoneFetching}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            paginationData={paginationData}
            setPaginationData={setPaginationData}
          />
        </div>
      </div>
    </>
  );
};

export default Content;
