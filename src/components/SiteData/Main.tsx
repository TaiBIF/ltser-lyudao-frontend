import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';

import Title from 'components/SiteData/Title';
import Search from 'components/SiteData/Search';
import Result from 'components/SiteData/Result';
import Select from 'components/SiteData/Select';
import EchartsChart from 'components/SiteData/EchartsChart/Content';
import DownloadPopup from 'components/SiteData/DownloadPopup';

import { ContextItem, SelectItem } from 'types/utils';

import { useDataContext } from 'context/DataContext';
import { useSiteDataContext } from 'context/SiteDataContext';
import Placeholder from 'components/Placeholder';
import usePage from 'hooks/utils/usePage';

interface MainProps {
  paths: string[];
  item: string;
  pathname: string;
}

const Main = (props: MainProps) => {
  const { paths, item, pathname } = props;

  const contextData = useDataContext().find((v: ContextItem) => v.id === item);
  const { filter, setFilter } = useSiteDataContext();
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();

  const isFetchingSites = contextData.sites === null;
  const hasNoSites = !isFetchingSites && contextData.sites.length === 0;
  const isFetchingFields = contextData.fields === null;
  const isFetchingRaws = contextData.raws === null;
  const isDoneFetching = !isFetchingFields && !isFetchingRaws;

  const isHabitat = item === 'habitat';

  useEffect(() => {
    contextData.getFields();
    contextData.getSites();
  }, [pathname]);

  return (
    <>
      <div className="right-infbox">
        <Title paths={paths} url={contextData.depositarUrl} />
        <div className="u-section">
          {!isHabitat &&
            (!isFetchingSites ? (
              !hasNoSites ? (
                <Select
                  title="測站/樣區"
                  options={contextData.sites}
                  filter={filter}
                  setFilter={setFilter}
                />
              ) : (
                <>目前沒有測站資料。</>
              )
            ) : (
              <Placeholder layout="inline" />
            ))}
          <EchartsChart item={item} isHabitat={isHabitat} />
        </div>
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

export default Main;
