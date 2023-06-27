import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { Dictionary } from 'lodash';
import { useMap } from 'react-leaflet';

import CloseBtn from 'components/Home/LeafletMap/CloseBtn';
import ArrowIcon from 'components/Home/LeafletMap/ArrowIcon';

import { AnnualSeasonalItem, CountItem } from 'types/home';

import { surveyMapParams, surveyMapColList } from 'data/home/content';

import { useSurveyMapContext } from 'context/SurveyMapContext';
import { useNavigate } from 'react-router-dom';
import { useDataContext } from 'context/DataContext';

type PopupLayoutProps = {
  setActive: Dispatch<SetStateAction<boolean>>;
  data: Dictionary<number | string>;
};

const PopupLayout = (props: PopupLayoutProps) => {
  const { setActive, data } = props;
  const { setFilter } = useSurveyMapContext();
  const map = useMap();
  const navigate = useNavigate();
  const { filter } = useSurveyMapContext();
  const {
    weatherDetail,
    seaTemperatureDetail,
    coralDivDetail,
    coralRecDetail,
    getWeatherDataDetail,
    getSeaTemperatureDataDetail,
    getCoralDivDataDetail,
    getCoralRecDataDetail,
    getZoobenthosDataDetail,
    getPlantDataDetail,
    getBirdNetSoundDataDetail,
    getFishDivDataDetail,
  } = useDataContext();

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

  useEffect(() => {
    return () => {
      getWeatherDataDetail();
      getSeaTemperatureDataDetail();
      getCoralDivDataDetail();
      getCoralRecDataDetail();
      getZoobenthosDataDetail();
      getPlantDataDetail();
      getBirdNetSoundDataDetail();
      getFishDivDataDetail();
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
                const { id, plan, col, title, unit } = v;
                const matchValue = () => {
                  if (!plan) {
                    return data[col];
                  } else {
                    let data;
                    switch (plan) {
                      case 'weather':
                        data = (weatherDetail as AnnualSeasonalItem).annual[
                          col
                        ];
                        break;
                      case 'seaTemperature':
                        data = (seaTemperatureDetail as AnnualSeasonalItem)
                          .annual[col];
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
