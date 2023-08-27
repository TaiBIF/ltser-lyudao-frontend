import React, { Dispatch, SetStateAction, useRef } from 'react';

import { Link } from 'react-router-dom';

import { PaginationDataItem } from 'types/utils';

interface PaginationProps {
  scrollTargetRef?: any;
  currentPage: number;
  paginationData: PaginationDataItem;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = (props: PaginationProps) => {
  const {
    scrollTargetRef = null,
    currentPage,
    setCurrentPage,
    paginationData,
  } = props;
  const { totalPages, totalRecords } = paginationData;

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9.187"
              height="17.053"
              viewBox="0 0 9.187 17.053"
            >
              <g id="pre" transform="translate(111.483 17.054) rotate(180)">
                <g
                  id="Group_17"
                  data-name="Group 17"
                  transform="translate(102.297 0)"
                >
                  <path
                    id="Path_59"
                    data-name="Path 59"
                    d="M111.291,8.059,103.417.185a.656.656,0,0,0-.928.928L109.9,8.523l-7.411,7.411a.656.656,0,0,0,.928.928l7.874-7.874A.656.656,0,0,0,111.291,8.059Z"
                    transform="translate(-102.297 0)"
                    fill="#529a81"
                  />
                </g>
              </g>
            </svg>
            <p>上一頁</p>
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
            <p>下一頁</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9.187"
              height="17.053"
              viewBox="0 0 9.187 17.053"
            >
              <g id="next" transform="translate(-102.297 0)">
                <g
                  id="Group_17"
                  data-name="Group 17"
                  transform="translate(102.297 0)"
                >
                  <path
                    id="Path_59"
                    data-name="Path 59"
                    d="M111.291,8.059,103.417.185a.656.656,0,0,0-.928.928L109.9,8.523l-7.411,7.411a.656.656,0,0,0,.928.928l7.874-7.874A.656.656,0,0,0,111.291,8.059Z"
                    transform="translate(-102.297 0)"
                    fill="#529a81"
                  />
                </g>
              </g>
            </svg>
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

export default Pagination;
