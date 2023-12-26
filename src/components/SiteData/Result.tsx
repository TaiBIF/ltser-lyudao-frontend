import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { useTranslation } from 'react-i18next';

import Pagination from 'components/Pagination/Content';

import { useEcoContext } from 'context/EcoContext';
import { useDataContext } from 'context/DataContext';

import { ShowState, ContextItem, PaginationDataItem } from 'types/utils';

import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import { useSiteDataContext } from 'context/SiteDataContext';
import Placeholder from 'components/Placeholder';
import { useLocation } from 'react-router-dom';
import { useDownload } from 'hooks/api/useDownload';
import { useAuthContext } from 'context/AuthContext';
import RecordSelect from './RecordSelect';

interface ResultProps {
  item: string;
  isDoneFetching: boolean;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  paginationData: PaginationDataItem;
  setPaginationData: Dispatch<SetStateAction<PaginationDataItem>>;
  I18N_KEY_PREFIX: string;
  currentRecordsPerPage: number;
  setCurrentRecordsPerPage: Dispatch<SetStateAction<number>>;
}

const Result = (props: ResultProps) => {
  const {
    item,
    isDoneFetching,
    currentPage,
    setCurrentPage,
    paginationData,
    setPaginationData,
    currentRecordsPerPage,
    setCurrentRecordsPerPage,
    I18N_KEY_PREFIX,
  } = props;

  const { t } = useTranslation();

  const { show, setDownloadTarget, handleDownloadPopup, handleDownloadParams } =
    useEcoContext();
  const contextData = useDataContext().find((v: ContextItem) => v.id === item);

  const { query, setQuery } = useSiteDataContext();
  const { pathname, search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const locationID = queryParams.get('locationID');
  const scrollTargetRef = useRef(null);
  const { handleDownload } = useDownload();
  const { auth } = useAuthContext();

  const hasNoRaws = isDoneFetching && contextData.raws.length === 0;
  const hasData =
    contextData.raws !== null &&
    contextData.raws !== undefined &&
    contextData.raws[0] !== null &&
    contextData.raws[0] !== undefined;

  const handleDownloadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.dataset.target;
    setDownloadTarget(target);
    if (auth) {
      const { url, fileName } = handleDownloadParams({
        item,
        target,
      });
      handleDownload({
        url,
        fileName,
        params: { ...query },
        withHeaders: true,
      });
    } else {
      handleDownloadPopup('show');
    }
  };

  useEffect(() => {
    setDownloadTarget('');
    setQuery({});
  }, [pathname]);

  useEffect(() => {
    if (contextData.raws !== undefined) {
      if (locationID) {
        contextData.getRaws({
          params: {
            locationID,
            page: currentPage,
            page_size: currentRecordsPerPage,
          },
          setPaginationData,
        });
      } else {
        contextData.getRaws({
          params: {
            ...query,
            page: currentPage,
            page_size: currentRecordsPerPage,
          },
          setPaginationData,
        });
      }
    }
  }, [currentPage, pathname, currentRecordsPerPage]);

  return (
    <>
      <div className="result-area" ref={scrollTargetRef}>
        {isDoneFetching ? (
          <>
            <div className="toptool">
              <div className="d-flex flex-column">
                <div className="data-num">
                  {t(`${I18N_KEY_PREFIX}.recordsText`, {
                    records: paginationData?.totalRecords,
                  })}
                </div>
                <RecordSelect
                  paginationData={paginationData}
                  currentRecordsPerPage={currentRecordsPerPage}
                  setCurrentRecordsPerPage={setCurrentRecordsPerPage}
                />
              </div>
              <div className="btnr-box">
                <button
                  type="button"
                  className="dowapply"
                  onClick={handleDownloadClick}
                  data-target="all"
                >
                  {t(`${I18N_KEY_PREFIX}.dataDownloadBtn`)}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadClick}
                  data-target="species"
                >
                  {t(`${I18N_KEY_PREFIX}.speciesDownloadBtn`)}
                </button>
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
                    {hasData ? (
                      Object.keys(contextData.raws[0]).map((key, i) => {
                        const matchField = contextData.fields.find(
                          (v: RawFieldItem) => key === v.id
                        );
                        return (
                          matchField && <td key={key}>{matchField.title}</td>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={contextData.fields.length}>
                          {t(`${I18N_KEY_PREFIX}.dataEmptyStateText`)}
                        </td>
                      </tr>
                    )}
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
                        {t(`${I18N_KEY_PREFIX}.dataEmptyStateText`)}
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
