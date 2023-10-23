import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Search from 'components/SiteData/Search';
import Result from 'components/SiteData/Result';
import Title from 'components/SiteData/Title';

import { ContextItem } from 'types/utils';

import { useDataContext } from 'context/DataContext';
import usePage from 'hooks/utils/usePage';

const Content = ({ PAGE_NAME }: { PAGE_NAME: string }) => {
  const I18N_KEY_PREFIX = `${PAGE_NAME}`;

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
        <Title
          paths={paths}
          url={contextData.depositarUrl}
          PAGE_NAME={PAGE_NAME}
        />
        <div className="data-searchbox">
          <Search
            item={item}
            isDoneFetching={isDoneFetching}
            setPaginationData={setPaginationData}
            I18N_KEY_PREFIX={I18N_KEY_PREFIX}
          />
          <Result
            item={item}
            isDoneFetching={isDoneFetching}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            paginationData={paginationData}
            setPaginationData={setPaginationData}
            I18N_KEY_PREFIX={I18N_KEY_PREFIX}
          />
        </div>
      </div>
    </>
  );
};

export default Content;
