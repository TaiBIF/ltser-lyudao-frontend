import Pagination from 'components/Pagination';
import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { ColItem, PaginationDataItem } from 'types/utils';
import { ItemTypes } from 'types/utils';

interface TableTemplateProps<T> {
  page: string;
  cols: ColItem[];
  data: T[];
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
  const isFetchingData = data.length === 0;

  return (
    <>
      {renderAction()}
      <div className="overflow-auto">
        <table className="table table-hover c-table">
          <thead>
            <tr>
              {cols.map((v) => {
                const { id, title, show } = v;
                return (
                  show && (
                    <th key={id}>
                      <p className="text-nowrap">{title}</p>
                    </th>
                  )
                );
              })}
            </tr>
          </thead>
          <tbody>
            {!isFetchingData &&
              data.map((v) => {
                const { id } = v;
                return (
                  <tr key={id}>
                    {Object.entries(v).map(([key, value]) => {
                      const matchCol = cols.find((col) => col.id === key);
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
                                  className="link-primary"
                                  to={`/dashboard/${page}/edit/${value}`}
                                >
                                  {value}
                                </Link>
                              </div>
                            </td>
                          );
                        }
                        if (matchCol.id === 'cover') {
                          console.log('cover');
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
                            return (
                              <ul className="list-unstyled">
                                {value.map((v, i) => {
                                  if (matchCol.relate) {
                                    const matchRelate = matchCol.relate.find(
                                      (relateV) => relateV.id === v
                                    );
                                    return (
                                      matchRelate && (
                                        <li key={i}>{matchRelate.title}</li>
                                      )
                                    );
                                  } else {
                                    return <li key={i}>{v}</li>;
                                  }
                                })}
                              </ul>
                            );
                          } else {
                            if (matchCol.relate) {
                              const matchRelate = matchCol.relate.find(
                                (v) => v.id === value
                              );
                              return matchRelate && matchRelate.title;
                            } else {
                              return value;
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
      {currentPage && setCurrentPage && paginationData && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          paginationData={paginationData}
        />
      )}
    </>
  );
};

export default TableTemplate;
