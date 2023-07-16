import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';

import Title from 'components/SiteData/Title';
import Chart from 'components/SiteData/Chart';
import Search from 'components/SiteData/Search';
import Result from 'components/SiteData/Result';
import Select from 'components/SiteData/Select';
import EchartsChart from 'components/SiteData/EchartsChart/Content';

import { ContextItem, SelectItem } from 'types/utils';

import { useDataContext } from 'context/DataContext';
import { useSiteDataContext } from 'context/SiteDataContext';

const Main = () => {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const page = queryParams.page ? queryParams.page : 1;
  const { pathname } = location;
  const paths = pathname.split('/');
  const item = paths[paths.length - 1];
  const contextData = useDataContext().find((v: ContextItem) => v.id === item);
  const { filter, setFilter } = useSiteDataContext();

  const isWeather = item === 'weather';

  const isFetchingSites = contextData.sites.length === 0;

  useEffect(() => {
    contextData.getFields();
    contextData.getSites();
  }, [pathname]);

  return (
    <>
      <div className="right-infbox">
        <Title paths={paths} />
        {!isFetchingSites && (
          <Select
            title="測站/樣區"
            options={contextData.sites}
            filter={filter}
            setFilter={setFilter}
          />
        )}
        <EchartsChart item={item} />
        <div className="data-searchbox">
          <Search item={item} />
          <Result item={item} />
        </div>
      </div>
    </>
  );
};

export default Main;
