import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { Dictionary } from 'lodash';
import { useMap } from 'react-leaflet';

import CloseBtn from 'components/Home/LeafletMap/CloseBtn';

import {
  surveyMapParams,
  surveyMapColList,
  weatherAllSites,
} from 'data/home/content';
import useRender from 'hooks/useRender';
import useWeather from 'hooks/useWeather';

type PopupLayoutProps = {
  setActive: Dispatch<SetStateAction<boolean>>;
  data: Dictionary<number | string>;
};

const PopupLayout = (props: PopupLayoutProps) => {
  const { setActive, data } = props;

  const map = useMap();
  const { detail, getWeatherDetail } = useWeather({
    id: String(data.locationID),
    year: '2023',
  });

  const handleCloseClick = () => {
    if (map) {
      map.closePopup();
      map.setView(surveyMapParams.center, surveyMapParams.zoom);
    }
    setActive(false);
  };

  useEffect(() => {
    getWeatherDetail();
  }, []);

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
                const { id, planId, colId, title, unit } = v;
                const matchValue = () => {
                  if (!planId) {
                    return data[colId];
                  } else {
                    switch (planId) {
                      case 'weather':
                        return detail.annual[colId];
                      default:
                        return;
                    }
                  }
                };
                return (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{matchValue()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="align-center">
            <a href="/" className="link-more">
              <p>查看圖表</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.207"
                height="9.414"
                viewBox="0 0 31.207 9.414"
              >
                <g
                  id="Group_212"
                  data-name="Group 212"
                  transform="translate(-274 -1559.793)"
                >
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2={30}
                    transform="translate(274.5 1568.5)"
                    fill="none"
                    stroke="#529A81"
                    strokeLinecap="round"
                    strokeWidth={1}
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x2={8}
                    y2={8}
                    transform="translate(296.5 1560.5)"
                    fill="none"
                    stroke="#529A81"
                    strokeLinecap="round"
                    strokeWidth={1}
                  />
                </g>
              </svg>
            </a>
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
