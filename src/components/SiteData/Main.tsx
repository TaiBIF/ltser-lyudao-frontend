import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';

import Title from 'components/SiteData/Title';
import Chart from 'components/SiteData/Chart';
import Search from 'components/SiteData/Search';
import Result from 'components/SiteData/Result';
import EchartsChart from 'components/SiteData/EchartsChart/Content';

import { ContextItem } from 'types/utils';

import { useDataContext } from 'context/DataContext';

const Main = () => {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const page = queryParams.page ? queryParams.page : 1;
  const { pathname } = location;
  const paths = pathname.split('/');
  const item = paths[paths.length - 1];
  const contextData = useDataContext().find((v: ContextItem) => v.id === item);

  const isWeather = item === 'weather';

  useEffect(() => {
    contextData.getFields();
  }, [pathname]);

  return (
    <>
      <div className="right-infbox">
        <Title paths={paths} />
        {isWeather ? <EchartsChart /> : <Chart />}
        <div className="data-searchbox">
          <Search item={item} />
          <Result item={item} />
        </div>
      </div>
    </>
  );
};

export default Main;
