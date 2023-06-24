import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { Dictionary } from 'lodash';
import { useMap } from 'react-leaflet';

import CloseBtn from 'components/Home/LeafletMap/CloseBtn';
import ArrowIcon from 'components/Home/LeafletMap/ArrowIcon';

import { AnnualSeasonalItem, CountItem } from 'types/home';

import { surveyMapParams, surveyMapColList } from 'data/home/content';

import useWeather from 'hooks/useWeather';
import useSeaTemperature from 'hooks/useSeaTemperature';
import useCoralDiv from 'hooks/useCoralDiv';
import useCoralRec from 'hooks/useCoralRec';

type PopupLayoutProps = {
  setActive: Dispatch<SetStateAction<boolean>>;
  data: Dictionary<number | string>;
};

const PopupLayout = (props: PopupLayoutProps) => {
  const { setActive, data } = props;

  const map = useMap();
  const { detail: weatherDetail, getDataDetail: getWeatherDataDetail } =
    useWeather();
  const {
    detail: seaTemperatureDetail,
    getDataDetail: getSeaTemperatureDataDetail,
  } = useSeaTemperature();
  const { detail: coralDivDetail, getDataDetail: getCoralDivDataDetail } =
    useCoralDiv();
  const { detail: coralRecDetail, getDataDetail: getCoralRecDataDetail } =
    useCoralRec();
  const handleCloseClick = () => {
    if (map) {
      map.closePopup();
      map.setView(surveyMapParams.center, surveyMapParams.zoom);
    }
    setActive(false);
  };

  useEffect(() => {
    getWeatherDataDetail();
    getSeaTemperatureDataDetail();
    getCoralDivDataDetail();
    getCoralRecDataDetail();
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
                    let data;
                    switch (planId) {
                      case 'weather':
                        data = (weatherDetail as AnnualSeasonalItem).annual[
                          colId
                        ];
                        break;
                      case 'seaTemperature':
                        data = (seaTemperatureDetail as AnnualSeasonalItem)
                          .annual[colId];
                        break;
                      case 'coralDiv':
                        data = (coralDivDetail as CountItem).count;
                        break;
                      case 'coralRec':
                        data = (coralRecDetail as CountItem).count;
                        break;
                      default:
                        return;
                    }
                    return data === null ? '-' : data;
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
              <ArrowIcon />
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
