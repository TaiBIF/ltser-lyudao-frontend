import React from 'react';

import Pagination from 'components/Pagination';

import { ecoResultList, ecoSearchColList } from 'data/siteData';

const Result = () => {
  return (
    <>
      <div className="result-area">
        <div className="toptool">
          <div className="data-num">資料筆數：12345</div>
          <div className="btnr-box">
            <button className="dowapply">資料下載</button>
            <button>物種名錄下載</button>
          </div>
        </div>
        <div className="ovhbox">
          <table
            border={0}
            cellSpacing={0}
            cellPadding={0}
            className="table-style1"
          >
            <tbody>
              <tr>
                {ecoSearchColList.map((v) => {
                  const { id, title, show } = v;
                  return show && <td key={id}>{title}</td>;
                })}
              </tr>
              {ecoResultList.map((v) => {
                return (
                  <tr key={`${v.id}`}>
                    {Object.entries(v).map(([key, value], i) => {
                      const matchCol = ecoSearchColList.find(
                        (col) => col.id === key
                      );
                      return (
                        matchCol?.show && <td key={`${v.id}-${i}`}>{value}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default Result;
