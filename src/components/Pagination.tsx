import React from 'react';

import { Link } from 'react-router-dom';

import { PageDataItem } from 'types/utils';

interface PaginationProps {
  page: number;
  pageData: PageDataItem;
}

const Pagination = (props: PaginationProps) => {
  const { page, pageData } = props;
  const { totalPages, totalRecords } = pageData;
  const pageList = () => {
    let pageArr = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i < page + 2 && i > page - 2) {
        pageArr.push(i);
      }
    }
    return pageArr;
  };

  const prevs = page - 2;
  const nexts = page + 2;

  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  const isFirstPage = page === 1 || prevs <= 1;
  const isLastPage = page === totalPages || nexts >= totalPages;
  return (
    <>
      <div className="page-num">
        {/*現在位置加now*/}
        {!isFirstPage && (
          <Link to={`?page=1`} className="num">
            1
          </Link>
        )}
        {hasPrev && (
          <Link to={`?page=${page - 1}`} className="back">
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
          </Link>
        )}
        {pageList().map((v) => {
          return (
            <Link
              key={v}
              to={`?page=${v}`}
              className={`num ${page === v ? 'now' : ''}`}
            >
              {v}
            </Link>
          );
        })}
        {hasNext && (
          <Link to={`?page=${page + 1}`} className="next">
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
          </Link>
        )}
        {!isLastPage && (
          <Link to={`?page=${totalPages}`} className="num">
            {totalPages}
          </Link>
        )}
      </div>
    </>
  );
};

export default Pagination;
