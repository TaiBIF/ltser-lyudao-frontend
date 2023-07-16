import React, { useEffect } from 'react';

import Pagination from 'components/Pagination';

import { useEcoContext } from 'context/EcoContext';
import { useDataContext } from 'context/DataContext';

import { ShowState } from 'types/siteData';
import { ContextItem } from 'types/utils';

import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';
import { useLocation } from 'react-router-dom';
import { useSiteDataContext } from 'context/SiteDataContext';

const Result = ({ item }: { item: string }) => {
  const { show, handleLoginClick } = useEcoContext();
  const { pathname } = useLocation();
  const contextData = useDataContext().find((v: ContextItem) => v.id === item);
  const { filter } = useSiteDataContext();

  useEffect(() => {
    if (contextData.raws) {
      contextData.getRaws();
    }
  }, [pathname]);

  return (
    <>
      <div className="result-area">
        <div className="toptool">
          <div className="data-num">資料筆數：{contextData.raws.length}</div>
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
        <Pagination />
      </div>
    </>
  );
};

export default Result;
