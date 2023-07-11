import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import { Dictionary } from 'lodash';
import { useMap } from 'react-leaflet';

import CloseBtn from 'components/Home/LeafletMap/CloseBtn';
import ArrowIcon from 'components/Home/LeafletMap/ArrowIcon';
import PopupArrow from 'components/Home/LeafletMap/PopupArrow';
import ProgressBar from 'components/Home/LeafletMap/ProgressBar';

import { ContextItem, SiteObservationItem } from 'types/utils';

import { surveyMapParams, surveyMapColList } from 'data/home/content';

import { useSurveyMapContext } from 'context/SurveyMapContext';
import { useDataContext } from 'context/DataContext';
import { useDownload } from 'hooks/api/useDownload';

type PopupLayoutProps = {
  setActive: Dispatch<SetStateAction<boolean>>;
  data: Dictionary<number | string>;
  items: SiteObservationItem[];
};

const PopupLayout = (props: PopupLayoutProps) => {
  const { setActive, data, items } = props;
  const { setFilter, setIdData } = useSurveyMapContext();
  const map = useMap();
  const navigate = useNavigate();
  const { filter } = useSurveyMapContext();
  const contextData = useDataContext();
  const [downloading, setDownloading] = useState(false);
  const { handleDownload } = useDownload();

  const handleDownloadClick = () => {
    setDownloading(true);
    handleDownload({ url: 'site', id: filter.id, year: filter.year });
  };

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

  const planList = [
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
      planList.forEach((plan) => {
        contextData.find((v: ContextItem) => v.id === plan).getDetail();
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
                      if (items.find((v) => v.plan === plan)) {
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
                        return <React.Fragment key={id}></React.Fragment>;
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
            {!downloading ? (
              <button
                type="button"
                className="link-more e-btn e-btn--outline"
                onClick={handleDownloadClick}
              >
                <p>下載樣區資料</p>
              </button>
            ) : (
              <ProgressBar downloading={downloading} />
            )}
          </div>
          <PopupArrow />
        </div>
      </div>
    </>
  );
};

export default PopupLayout;
