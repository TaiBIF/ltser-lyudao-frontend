import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import { Dictionary } from 'lodash';
import { useMap } from 'react-leaflet';

import CloseBtn from 'components/Home/LeafletMap/CloseBtn';
import ArrowIcon from 'components/Home/LeafletMap/ArrowIcon';
import PopupArrow from 'components/Home/LeafletMap/PopupArrow';
import ProgressBar from 'components/Home/LeafletMap/ProgressBar';

import { ContextItem, SiteObservationItem } from 'types/utils';

import {
  surveyMapParams,
  surveyMapColList,
  surveyMapItemList,
} from 'data/home/content';
import itemList from 'data/home/items.json';

import { useSurveyMapContext } from 'context/SurveyMapContext';
import { useDataContext } from 'context/DataContext';
import { useDownload } from 'hooks/api/useDownload';
import { useAuthContext } from 'context/AuthContext';

type PopupLayoutProps = {
  data: Dictionary<number | string>;
};

const PopupLayout = (props: PopupLayoutProps) => {
  const { data } = props;

  const map = useMap();
  const navigate = useNavigate();

  const { filter, setFilter, setIdData, handleDownloadPopup } =
    useSurveyMapContext();
  const contextData = useDataContext();
  const { handleDownload, progress } = useDownload();
  const { auth } = useAuthContext();

  const [downloading, setDownloading] = useState(false);
  const [items, setItems] = useState<SiteObservationItem[]>([]);

  const handleDownloadClick = () => {
    if (auth) {
      const fileName = `${filter.id}_${filter.year}`;
      setDownloading(true);
      handleDownload({
        url: 'site',
        fileName,
        params: {
          locationID: filter.id,
          year: filter.year,
        },
      });
    } else {
      handleDownloadPopup('show');
    }
  };

  const handleCloseClick = () => {
    if (map) {
      map.closePopup();
      map.setView(surveyMapParams.center, surveyMapParams.zoom);
    }
    setFilter({ ...filter, id: '' });
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

  const isFetchingItems = items.length === 0;

  useEffect(() => {
    const matchFilter = itemList
      .find((v) => v.site === filter.id)
      ?.years.find((v) => v.year === filter.year)?.items;
    if (matchFilter) {
      const matchItem = matchFilter.flatMap((item) =>
        surveyMapItemList.filter((v) => v.plan === item)
      );
      setItems([...matchItem]);
    }
  }, [filter.id]);

  useEffect(() => {
    if (!isFetchingItems) {
      setIdData({ ...data });
      items.forEach((item, i) => {
        const matchData = contextData.find(
          (v: ContextItem) => v.id === item.plan
        );
        if (i === 0) {
          matchData.getDetail();
        }
      });
    }
  }, [items]);

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
            <button
              type="button"
              className="link-more e-btn e-btn--outline"
              onClick={handleDownloadClick}
            >
              <p>下載樣區資料</p>
            </button>
          </div>
          <PopupArrow />
        </div>
      </div>
    </>
  );
};

export default PopupLayout;
