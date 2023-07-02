import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { Dictionary } from 'lodash';
import { useMap } from 'react-leaflet';

import CloseBtn from 'components/Home/LeafletMap/CloseBtn';
import ArrowIcon from 'components/Home/LeafletMap/ArrowIcon';

import { AnnualSeasonalItem, CountItem } from 'types/detail';

import { surveyMapParams, surveyMapColList } from 'data/home/content';

import { useSurveyMapContext } from 'context/SurveyMapContext';
import { useNavigate } from 'react-router-dom';
import { useDataContext } from 'context/DataContext';
import { ContextItem } from 'types/utils';

type PopupLayoutProps = {
  setActive: Dispatch<SetStateAction<boolean>>;
  data: Dictionary<number | string>;
  items: string[];
};

const PopupLayout = (props: PopupLayoutProps) => {
  const { setActive, data, items } = props;
  const { setFilter, setIdData } = useSurveyMapContext();
  const map = useMap();
  const navigate = useNavigate();
  const { filter } = useSurveyMapContext();
  const contextData = useDataContext();

  const handleCloseClick = () => {
    if (map) {
      map.closePopup();
      map.setView(surveyMapParams.center, surveyMapParams.zoom);
    }
    setActive(false);
  };

  const handleMoreClick = () => {
    setFilter({ ...filter, chart: true });
    navigate('#chart');
  };

  const itemList = [
    'weather',
    'sea-temperature',
    'coral-div',
    'coral-rec',
    'zoobenthos',
    'plant',
    'bird-net-sound',
    'fish-div',
  ];

  useEffect(() => {
    return () => {
      setIdData({ ...data });
      itemList.forEach((item) => {
        contextData.find((v: ContextItem) => v.id === item).getDetail();
      });
    };
  }, [filter.id]);

  return (
    <>
      <div className="wbox-cont">
        <div className="rel">
          <CloseBtn onClick={handleCloseClick} />
          <h3 className="item-title">{data.verbatimLocality} - 實時觀測資料</h3>
          <table
            className="map-tablestyle"
            border={0}
            cellPadding={0}
            cellSpacing={0}
          >
            <tbody>
              <tr>
                <td>觀測項目</td>
                <td></td>
              </tr>
              {surveyMapColList.map((v) => {
                const { id, plan, col, title } = v;
                const renderRow = () => {
                  if (id === 'year') {
                    return (
                      <tr key={id}>
                        <td>{title}</td>
                        <td>{filter.year}</td>
                      </tr>
                    );
                  } else {
                    if (!plan) {
                      return (
                        <tr key={id}>
                          <td>{title}</td>
                          <td>{data[col]}</td>
                        </tr>
                      );
                    } else {
                      if (items.includes(plan)) {
                        let data;
                        const matchContext = contextData.find(
                          (v: ContextItem) => v.id === plan
                        ).detail;
                        switch (plan) {
                          case 'weather':
                          case 'sea-temperature':
                            data = matchContext.annual[col];
                            break;
                          case 'coral-div':
                          case 'coral-rec':
                            data = matchContext.count;
                            break;
                          default:
                            return;
                        }
                        return (
                          <tr key={id}>
                            <td>{title}</td>
                            <td>{data === null ? '-' : data}</td>
                          </tr>
                        );
                      } else {
                        return <></>;
                      }
                    }
                  }
                };
                return renderRow();
              })}
            </tbody>
          </table>
          <div className="align-center">
            <button
              type="button"
              className="link-more"
              onClick={handleMoreClick}
            >
              <p>查看圖表</p>
              <ArrowIcon />
            </button>
          </div>
          <div className="arr">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11.804"
              height="8.934"
              viewBox="0 0 11.804 8.934"
            >
              <path
                id="Polygon_9"
                data-name="Polygon 9"
                d="M5.9,0l5.9,8.934H0Z"
                transform="translate(11.804 8.934) rotate(180)"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupLayout;
