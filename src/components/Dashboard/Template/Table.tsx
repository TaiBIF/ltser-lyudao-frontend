import Pagination from 'components/Pagination';
import Placeholder from 'components/Placeholder';
import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { ColItem, PaginationDataItem } from 'types/utils';
import { ItemTypes } from 'types/utils';
import { IMAGE_URL } from 'utils/config';
import ViewIcon from '../ViewIcon';
import EditIcon from '../EditIcon';

interface TableTemplateProps<T> {
  page: string;
  cols: ColItem[];
  data: T[] | null;
  renderAction: () => React.ReactElement | null;
  currentPage?: number;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
  paginationData?: PaginationDataItem;
}

const TableTemplate = <T extends ItemTypes>(props: TableTemplateProps<T>) => {
  const {
    page,
    cols,
    data,
    renderAction,
    currentPage,
    setCurrentPage,
    paginationData,
  } = props;

  const isFetchingData = data === null;
  const hasNoData = data?.length === 0;
  const hasNoAction = renderAction() === null;

  return (
    <>
      <div className="c-title">
        <h1 className="c-title__text">後台</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 18 18"
          className="c-title__circle"
        >
          <g
            id="Ellipse_2931"
            data-name="Ellipse 2931"
            fill="none"
            stroke="#e8d06a"
            strokeWidth={4}
          >
            <circle cx={9} cy={9} r={9} stroke="none" />
            <circle cx={9} cy={9} r={7} fill="none" />
          </g>
        </svg>
      </div>
      <div className="d-flex flex-column justify-content-between">
        {!isFetchingData ? (
          <>
            <div className="mb-3">
              {renderAction()}
              <div className="c-table">
                <table className="c-table__container">
                  <thead>
                    <tr className="c-table__tr c-table__tr--head">
                      {cols.map((v) => {
                        const { id, title, show } = v;
                        return (
                          show && (
                            <th key={id} className="c-table__th">
                              <p className="text-nowrap">{title}</p>
                            </th>
                          )
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {!hasNoData &&
                      data.map((v) => {
                        const { id } = v;
                        return (
                          <tr key={id} className="c-table__tr">
                            {Object.entries(v).map(([key, value]) => {
                              const matchCol = cols.find(
                                (col) => col.id === key
                              );
                              if (matchCol && matchCol.show) {
                                if (
                                  matchCol.param &&
                                  (typeof value === 'string' ||
                                    typeof value === 'number')
                                ) {
                                  return (
                                    <td key={key}>
                                      <div className="c-table__td">
                                        <Link
                                          className="e-link"
                                          to={`/dashboard/${page}/edit/${value}`}
                                        >
                                          <EditIcon />
                                          {value}
                                        </Link>
                                      </div>
                                    </td>
                                  );
                                }
                                if (matchCol.id === 'cover') {
                                  return <td key={key}></td>;
                                }
                                const formatSpaceClass = () => {
                                  switch (matchCol.space) {
                                    case 'text':
                                      return 'c-table__td c-table__td--text';
                                    case 'date':
                                    case 'nowrap':
                                      return 'c-table__td text-nowrap';
                                    default:
                                      return 'c-table__td';
                                  }
                                };
                                const renderTd = () => {
                                  if (Array.isArray(value)) {
                                    if (value.length !== 0) {
                                      return (
                                        <ul className="list-unstyled">
                                          {value.map((v, i) => {
                                            if (matchCol.relate) {
                                              const matchRelate =
                                                matchCol.relate.find(
                                                  (relateV) => relateV.id === v
                                                );
                                              return (
                                                matchRelate && (
                                                  <li key={i}>
                                                    {matchRelate.title}
                                                  </li>
                                                )
                                              );
                                            } else {
                                              return <li key={i}>{v}</li>;
                                            }
                                          })}
                                        </ul>
                                      );
                                    } else {
                                      return (
                                        <td className="d-flex justify-content-center">
                                          -
                                        </td>
                                      );
                                    }
                                  } else if (value === null) {
                                    return (
                                      <td className="d-flex justify-content-center">
                                        -
                                      </td>
                                    );
                                  } else {
                                    if (matchCol.relate) {
                                      const matchRelate = matchCol.relate.find(
                                        (v) => v.id === value
                                      );
                                      return (
                                        matchRelate &&
                                        (matchRelate.title
                                          ? matchRelate.title
                                          : matchRelate.name)
                                      );
                                    } else {
                                      switch (key) {
                                        case 'image':
                                        case 'file':
                                          return (
                                            <div className="c-tabe__td">
                                              <a
                                                href={`${IMAGE_URL}${value}`}
                                                className="e-link"
                                                target="_blank"
                                                rel="noreferrer"
                                              >
                                                <ViewIcon />
                                                查看
                                              </a>
                                            </div>
                                          );
                                        default:
                                          return value;
                                      }
                                    }
                                  }
                                };
                                return (
                                  <td key={key}>
                                    <div className={`${formatSpaceClass()}`}>
                                      {renderTd()}
                                    </div>
                                  </td>
                                );
                              }
                            })}
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
            {currentPage && setCurrentPage && paginationData && (
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                paginationData={paginationData}
              />
            )}
          </>
        ) : (
          <>
            {!hasNoAction && <Placeholder layout="inline" dir="end" />}
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

export default TableTemplate;
