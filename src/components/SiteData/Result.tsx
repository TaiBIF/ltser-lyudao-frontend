import React, { useEffect } from 'react';

import Pagination from 'components/Pagination';

import { useEcoContext } from 'context/EcoContext';
import { useDataContext } from 'context/DataContext';

import { ShowState } from 'types/siteData';
import { ContextItem } from 'types/utils';

import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import usePage from 'hooks/utils/usePage';
import { useSiteDataContext } from 'context/SiteDataContext';
import Placeholder from 'components/Placeholder';
import { useLocation } from 'react-router-dom';

interface ResultProps {
  item: string;
  isFetchingFields: boolean;
  isFetchingRaws: boolean;
}

const Result = (props: ResultProps) => {
  const { item, isFetchingFields, isFetchingRaws } = props;
  const { show, handleLoginClick } = useEcoContext();
  const contextData = useDataContext().find((v: ContextItem) => v.id === item);
  const { currentPage, setCurrentPage, paginationData, setPaginationData } =
    usePage();
  const { query, setQuery } = useSiteDataContext();
  const { pathname } = useLocation();

  const isDoneFetching = !isFetchingFields && !isFetchingRaws;

  useEffect(() => {
    setQuery({});
  }, [item]);

  useEffect(() => {
    if (contextData.raws) {
      contextData.getRaws({
        params: { ...query, page: currentPage },
        setPaginationData,
      });
    }
  }, [currentPage, pathname]);

  return (
    <>
      <div className="result-area">
        {isDoneFetching ? (
          <>
            <div className="toptool">
              <div className="data-num">
                資料筆數：{paginationData.totalRecords}
              </div>
              <div className="btnr-box">
                <button
                  type="button"
                  className="dowapply"
                  onClick={() => {
                    handleLoginClick('show');
                  }}
                >
                  資料下載
                </button>
                <button>物種名錄下載</button>
              </div>
            </div>
          </>
        ) : (
          <div className="d-flex">
            <Placeholder layout="inline" />
            <Placeholder layout="inline" />
            <Placeholder layout="inline" />
          </div>
        )}
        {isDoneFetching ? (
          <>
            <div className="ovhbox" style={{ overflowX: 'scroll' }}>
              <table
                border={0}
                cellSpacing={0}
                cellPadding={0}
                className="table-style1"
              >
                <tbody>
                  <tr>
                    {contextData.fields.map((v: RawFieldItem) => {
                      const { id } = v;
                      return <td key={id}>{id}</td>;
                    })}
                  </tr>
                  {contextData.raws.map((v: RawItemTypes, index: number) => {
                    return (
                      <tr key={`${index}`}>
                        {Object.entries(v).map(([key, value], i) => {
                          return <td key={`${index}-${i}`}>{value}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              paginationData={paginationData}
            />
          </>
        ) : (
          <>
            <Placeholder layout="line" />
            <Placeholder layout="line" />
            <Placeholder layout="line" />
            <Placeholder layout="line" />
            <Placeholder layout="line" />
          </>
        )}
      </div>
    </>
  );
};

export default Result;
