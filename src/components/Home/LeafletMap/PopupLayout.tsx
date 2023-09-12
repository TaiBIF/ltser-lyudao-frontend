import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import { Dictionary } from 'lodash';
import { useMap } from 'react-leaflet';

import CloseBtn from 'components/Home/LeafletMap/CloseBtn';
import ArrowIcon from 'components/Home/LeafletMap/ArrowIcon';
import PopupArrow from 'components/Home/LeafletMap/PopupArrow';

import { SiteObservationItem } from 'types/utils';

import {
  surveyMapParams,
  surveyMapColList,
  surveyMapItemList,
  defaultAllDetail,
} from 'data/home/content';
import itemList from 'data/home/items.json';

import { useSurveyMapContext } from 'context/SurveyMapContext';
import { useDataContext } from 'context/DataContext';
import { useDownload } from 'hooks/api/useDownload';
import { useAuthContext } from 'context/AuthContext';
import useSurveyMapApi from 'hooks/api/useSurveyMapApi';

type PopupLayoutProps = {
  data: Dictionary<number | string>;
};

const PopupLayout = (props: PopupLayoutProps) => {
  const { data } = props;

  const map = useMap();
  const navigate = useNavigate();

  const {
    filter,
    setFilter,
    setIdData,
    allDetail,
    setAllDetail,
    handleDownloadPopup,
  } = useSurveyMapContext();
  const { handleDownload, progress } = useDownload();
  const { auth } = useAuthContext();
  const { getAllDetail } = useSurveyMapApi();

  const [downloading, setDownloading] = useState(false);
  const [items, setItems] = useState<SiteObservationItem[]>([]);
  const [itemsDetail, setItemsDetail] = useState<any>(null);

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
        withHeaders: true,
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

  const isFetchingItems = items.length === 0;
  const isFetchingAllDetail = allDetail === null;
  const isFecthingItemsDetail = itemsDetail === null;

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
    getAllDetail({
      id: filter.id,
      year: filter.year,
      setData: setAllDetail,
      defaultData: defaultAllDetail,
    });
  }, [filter.id]);

  useEffect(() => {
    if (!isFetchingItems && !isFetchingAllDetail) {
      setIdData({ ...data });
      const result = Object.fromEntries(
        items.map((item) => {
          const matchItem = Object.entries(allDetail).find(
            ([key]) => key === item.plan
          );
          return [[item.id], matchItem ? matchItem[1] : null];
        })
      );
      setItemsDetail({ ...result });
    }
  }, [items, allDetail]);

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
              {!isFecthingItemsDetail &&
                surveyMapColList.map((v) => {
                  const { id, plan, col, title } = v;
                  const renderRow = () => {
                    switch (id) {
                      case 'year':
                        return (
                          <tr key={id}>
                            <td>{title}</td>
                            <td>{filter.year}</td>
                          </tr>
                        );
                      default:
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
                            switch (plan) {
                              case 'weather':
                              case 'sea-temperature':
                                data = itemsDetail[id]?.annual[col];
                                break;
                              case 'coral-div':
                              case 'coral-rec':
                                data = itemsDetail[id]?.count;
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
