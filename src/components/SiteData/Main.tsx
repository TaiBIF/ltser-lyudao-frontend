import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useTranslation } from 'react-i18next';

import Title from 'components/SiteData/Title';
import Search from 'components/SiteData/Search';
import Result from 'components/SiteData/Result';
import SiteSelect from 'components/SiteData/SiteSelect';
import EchartsChart from 'components/SiteData/EchartsChart/Content';
import Placeholder from 'components/Placeholder';

import { ContextItem } from 'types/utils';

import { useDataContext } from 'context/DataContext';
import { useSiteDataContext } from 'context/SiteDataContext';
import usePage from 'hooks/utils/usePage';
import { useLangContext } from 'context/LangContext';

interface MainProps {
  paths: string[];
  item: string;
  pathname: string;
  PAGE_NAME: string;
}

const Main = (props: MainProps) => {
  const { paths, item, pathname, PAGE_NAME } = props;

  const I18N_KEY_PREFIX = `${PAGE_NAME}`;

  const { t } = useTranslation();

  const { lang } = useLangContext();

  const contextData = useDataContext().find((v: ContextItem) => v.id === item);
  const { filter, setFilter } = useSiteDataContext();
  const {
    currentPage,
    setCurrentPage,
    paginationData,
    setPaginationData,
    currentRecordsPerPage,
    setCurrentRecordsPerPage,
  } = usePage();
  const isFetchingSites = contextData.sites === null;
  const hasNoSites = !isFetchingSites && contextData.sites.length === 0;
  const isFetchingFields = contextData.fields === null;
  const isFetchingRaws = contextData.raws === null;
  const isDoneFetching = !isFetchingFields && !isFetchingRaws;

  const isHabitat = item === 'habitat';

  useEffect(() => {
    contextData.getFields();
    contextData.getSites();
  }, [pathname, lang]);

  return (
    <>
      <div className="right-infbox">
        <Title
          paths={paths}
          url={contextData.depositarUrl}
          PAGE_NAME={PAGE_NAME}
        />
        <div className="u-section">
          {!isHabitat &&
            (!isFetchingSites ? (
              !hasNoSites ? (
                <SiteSelect
                  title={t(`${I18N_KEY_PREFIX}.siteLabel1`)}
                  options={contextData.sites}
                  filter={filter}
                  setFilter={setFilter}
                  I18N_KEY_PREFIX={I18N_KEY_PREFIX}
                />
              ) : (
                <>{t(`${I18N_KEY_PREFIX}.siteEmptyStateText`)}</>
              )
            ) : (
              <Placeholder layout="inline" />
            ))}
          <EchartsChart
            item={item}
            isHabitat={isHabitat}
            I18N_KEY_PREFIX={I18N_KEY_PREFIX}
          />
        </div>
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
            currentRecordsPerPage={currentRecordsPerPage}
            setCurrentRecordsPerPage={setCurrentRecordsPerPage}
            I18N_KEY_PREFIX={I18N_KEY_PREFIX}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
