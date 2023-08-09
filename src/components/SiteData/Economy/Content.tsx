import React, { useEffect } from 'react';

import Search from 'components/SiteData/Search';
import Result from 'components/SiteData/Result';
import Title from 'components/SiteData/Title';
import { useLocation } from 'react-router-dom';
import { useDataContext } from 'context/DataContext';
import { ContextItem } from 'types/utils';

const Content = () => {
  const location = useLocation();
  const { pathname } = location;
  const paths = pathname.split('/');
  const item = paths[paths.length - 1];

  const contextData = useDataContext().find((v: ContextItem) => v.id === item);

  const isFetchingFields = contextData.fields.length === 0;
  const isFetchingRaws = contextData.raws.length === 0;
  const isDoneFetching = !isFetchingFields && !isFetchingRaws;

  useEffect(() => {
    contextData.getFields();
  }, [pathname]);

  return (
    <>
      <div className="right-infbox">
        <Title paths={paths} />
        <div className="data-searchbox">
          <Search item={item} isDoneFetching={isDoneFetching} />
          <Result item={item} isDoneFetching={isDoneFetching} />
        </div>
      </div>
    </>
  );
};

export default Content;
