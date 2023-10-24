import React, { Dispatch, SetStateAction, useRef } from 'react';

import { useTranslation } from 'react-i18next';

import NextIcon from 'components/Pagination/NextIcon';
import PrevIcon from 'components/Pagination/PrevIcon';

import { PaginationDataItem } from 'types/utils';

interface PaginationProps {
  scrollTargetRef?: any;
  currentPage: number;
  paginationData: PaginationDataItem;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Content = (props: PaginationProps) => {
  const {
    scrollTargetRef = null,
    currentPage,
    setCurrentPage,
    paginationData,
  } = props;
  const { totalPages, totalRecords } = paginationData;

  const PAGE_NAME = 'common';
  const COMPONENT_NAME = 'Pagination';
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

  const { t } = useTranslation();

  const pageList = () => {
    let pageArr = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i < currentPage + 2 && i > currentPage - 2) {
        pageArr.push(i);
      }
    }
    return pageArr;
  };

  const prevs = currentPage - 2;
  const nexts = currentPage + 2;

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const isFirstPage = currentPage === 1 || prevs <= 1;
  const isLastPage = currentPage === totalPages || nexts >= totalPages;

  const handlePage = (page: number) => {
    setCurrentPage(page);
    if (scrollTargetRef) {
      (scrollTargetRef.current as HTMLElement).scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="page-num">
        {/*現在位置加now*/}
        {!isFirstPage && (
          <div
            onClick={() => {
              handlePage(1);
            }}
            className="num m-1"
          >
            1
          </div>
        )}
        {hasPrev && (
          <div
            onClick={() => {
              handlePage(currentPage - 1);
            }}
            className="back m-1"
          >
            <PrevIcon />
            <p>{t(`${I18N_KEY_PREFIX}.prevBtn`)}</p>
          </div>
        )}
        {pageList().map((v) => {
          return (
            <div
              key={v}
              className={`num m-1 ${currentPage === v ? 'now' : ''}`}
              onClick={() => {
                handlePage(v);
              }}
            >
              {v}
            </div>
          );
        })}
        {hasNext && (
          <div
            className="next m-1"
            onClick={() => {
              handlePage(currentPage + 1);
            }}
          >
            <p>{t(`${I18N_KEY_PREFIX}.nextBtn`)}</p>
            <NextIcon />
          </div>
        )}
        {!isLastPage && (
          <div
            className="num m-1"
            onClick={() => {
              handlePage(totalPages);
            }}
          >
            {totalPages}
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
