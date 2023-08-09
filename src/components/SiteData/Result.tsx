import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import Pagination from 'components/Pagination';

import { useEcoContext } from 'context/EcoContext';
import { useDataContext } from 'context/DataContext';

import { ShowState, ContextItem, PaginationDataItem } from 'types/utils';

import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import usePage from 'hooks/utils/usePage';
import { useSiteDataContext } from 'context/SiteDataContext';
import Placeholder from 'components/Placeholder';
import { useLocation } from 'react-router-dom';

interface ResultProps {
  item: string;
  isDoneFetching: boolean;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  paginationData: PaginationDataItem;
  setPaginationData: Dispatch<SetStateAction<PaginationDataItem>>;
}

const Result = (props: ResultProps) => {
  const {
    item,
    isDoneFetching,
    currentPage,
    setCurrentPage,
    paginationData,
    setPaginationData,
  } = props;
  const { show, handleDownloadPopup } = useEcoContext();
  const contextData = useDataContext().find((v: ContextItem) => v.id === item);

  const { query, setQuery } = useSiteDataContext();
  const { pathname } = useLocation();
  const scrollTargetRef = useRef(null);

  const hasNoRaws = isDoneFetching && contextData.raws.length === 0;

  useEffect(() => {
    setQuery({});
  }, [item]);

  useEffect(() => {
    if (contextData.raws !== undefined) {
      contextData.getRaws({
        params: { ...query, page: currentPage },
        setPaginationData,
      });
    }
  }, [currentPage, pathname]);

  return (
    <>
      <div className="result-area" ref={scrollTargetRef}>
        {isDoneFetching ? (
          <>
            <div className="toptool">
              <div className="data-num">
                資料筆數：{paginationData?.totalRecords}
              </div>
              <div className="btnr-box">
                <button
                  type="button"
                  className="dowapply"
                  onClick={() => {
                    handleDownloadPopup('show');
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
                  {!hasNoRaws ? (
                    contextData.raws.map((v: RawItemTypes, index: number) => {
                      return (
                        <tr key={`${index}`}>
                          {Object.entries(v).map(([key, value], i) => {
                            return <td key={`${index}-${i}`}>{value}</td>;
                          })}
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={contextData.fields.length}>
                        目前沒有資料。
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <Pagination
              scrollTargetRef={scrollTargetRef}
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
