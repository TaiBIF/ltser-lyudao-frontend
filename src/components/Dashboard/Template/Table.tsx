import React from 'react';
import { Link } from 'react-router-dom';

import { ItemTypes, ColItem } from 'types/dashboard';

interface TableTemplateProps<T> {
  page: string;
  cols: ColItem[];
  data: T[];
}

const TableTemplate = <T extends ItemTypes>(props: TableTemplateProps<T>) => {
  const { page, cols, data } = props;

  return (
    <>
      <div className="d-flex justify-content-end">
        <Link className="btn btn-primary" to={`/dashboard/${page}/add`}>
          新增
        </Link>
      </div>
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
            {data.map((v) => {
              const { id } = v;
              return (
                <tr key={id}>
                  {Object.entries(v).map(([key, value]) => {
                    const matchCol = cols.find((col) => col.id === key);
                    const isId = key === 'id';
                    return (
                      matchCol &&
                      matchCol.show &&
                      (isId ? (
                        <td key={key}>
                          <Link
                            className="link-primary"
                            to={`/dashboard/${page}/edit/${value}`}
                          >
                            {value}
                          </Link>
                        </td>
                      ) : (
                        <td key={key}>
                          <div
                            className={`${
                              matchCol.space === 'text'
                                ? 'c-table__td c-table__td--text'
                                : 'c-table__td'
                            } ${
                              matchCol.space === 'date' ? 'text-nowrap' : ''
                            }`}
                          >
                            {Array.isArray(value) ? (
                              <ul className="list-unstyled">
                                {value.map((v, i) => {
                                  return <li key={i}>{v}</li>;
                                })}
                              </ul>
                            ) : (
                              value
                            )}
                          </div>
                        </td>
                      ))
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableTemplate;
