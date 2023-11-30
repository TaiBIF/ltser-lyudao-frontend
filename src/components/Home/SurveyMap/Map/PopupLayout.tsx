import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { Dictionary } from 'lodash';
import { useMap } from 'react-leaflet';

import CloseBtn from 'components/Home/SurveyMap/Map/CloseBtn';
import ArrowIcon from 'components/Home/SurveyMap/Map/ArrowIcon';
import PopupArrow from 'components/Home/SurveyMap/Map/PopupArrow';

import { SelectItem } from 'types/utils';

import {
  surveyMapParams,
  generateSurveyMapColList,
  generateSurveyMapItemList,
  generatePlanList,
} from 'data/home/content';
import itemList from 'data/home/items.json';

import { useSurveyMapContext } from 'context/SurveyMapContext';
import { useDownload } from 'hooks/api/useDownload';
import { useAuthContext } from 'context/AuthContext';
import useRerenderTranslation from 'hooks/utils/useRerenderTranslation';
import { useLangContext } from 'context/LangContext';

type PopupLayoutProps = {
  data: Dictionary<number | string>;
  I18N_KEY_PREFIX: string;
};

const PopupLayout = (props: PopupLayoutProps) => {
  const { data, I18N_KEY_PREFIX } = props;

  const { t } = useTranslation();

  const { lang } = useLangContext();

  const surveyMapColList = generateSurveyMapColList();
  const { list: surveyMapItemList, isFetchingList: isFetchingItemList } =
    useRerenderTranslation({ generateList: generateSurveyMapItemList });
  const planList = generatePlanList();

  const map = useMap();
  const navigate = useNavigate();

  const {
    filter,
    setFilter,
    allDetail,
    setIdData,
    setAllDetail,
    isFetchingAllDetail,
    handleDownloadPopup,
  } = useSurveyMapContext();
  const { handleDownload, progress } = useDownload();
  const { auth } = useAuthContext();

  const [downloading, setDownloading] = useState(false);
  const [items, setItems] = useState<SelectItem[]>([]);
  const isEn = lang === 'en';

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
    setFilter({ ...filter, id: '', chart: false });
    setIdData(null);
    setAllDetail(null);
  };

  const handleMoreClick = () => {
    setFilter({ ...filter, chart: true });
    navigate('#chart');
  };

  const hasItems = items.length !== 0;

  useEffect(() => {
    if (!isFetchingItemList) {
      const matchFilter = itemList
        .find((v) => v.site === filter.id)
        ?.years.find((v) => v.year === filter.year)?.items;
      if (matchFilter) {
        const matchItem = matchFilter.flatMap((item) => {
          return surveyMapItemList.filter((v: SelectItem) => v.plan === item);
        });
        const matchResult = matchItem.map((item) => {
          const matchPlanTitle = planList.find((v) => v.id === item.plan);
          return {
            ...item,
            planTitle: matchPlanTitle?.title,
          };
        });
        setItems([...matchResult]);
      }
    }
  }, [filter.id, surveyMapItemList]);

  return (
    <>
      <div className="wbox-cont">
        <div className="rel">
          <CloseBtn onClick={handleCloseClick} />
          <h3 className="item-title">
            {t(`${I18N_KEY_PREFIX}.title`, {
              siteName: data[isEn ? 'locality' : 'verbatimLocality'],
            })}
          </h3>
          <table
            className="map-tablestyle"
            border={0}
            cellPadding={0}
            cellSpacing={0}
          >
            <tbody>
              {surveyMapColList.map((v) => {
                const { id, plan, col, title, unit } = v;
                const renderRow = () => {
                  switch (id) {
                    case 'items':
                      return (
                        <tr key={id}>
                          <td>{title}</td>
                          <td>
                            {items
                              .reduce((accumulator: SelectItem[], current) => {
                                if (
                                  accumulator.some(
                                    (obj) => obj.plan === current.plan
                                  )
                                )
                                  return accumulator;
                                return [...accumulator, current];
                              }, [])
                              .map((item) => {
                                return (
                                  <div key={item.id}>
                                    <Link
                                      to={`/site-data/${item.type}-observation/${item.plan}?site=${filter.id}`}
                                      className="e-link e-link--light"
                                    >
                                      {item.planTitle}
                                    </Link>
                                  </div>
                                );
                              })}
                          </td>
                        </tr>
                      );
                    case 'year':
                      return (
                        <tr key={id}>
                          <td>{title}</td>
                          <td>{filter.year}</td>
                        </tr>
                      );
                    case 'locality':
                      return (
                        <tr key={id}>
                          <td>{title}</td>
                          <td>
                            {data[isEn ? 'locality' : 'verbatimLocality']}
                          </td>
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
                        const matchPlan = items.find((v) => v.plan === plan);
                        const hasItem = matchPlan !== undefined;
                        if (hasItem && !isFetchingAllDetail) {
                          let data;
                          const formatPlan = (plan: string) =>
                            plan.replace(/-([a-z])/g, (match, letter) =>
                              letter.toUpperCase()
                            );
                          switch (plan) {
                            case 'weather':
                            case 'sea-temperature':
                              data = allDetail[formatPlan(plan)]?.annual[col];
                              break;
                            case 'coral-div':
                            case 'coral-rec':
                            case 'fish-div':
                              data = allDetail[id]?.count;
                              break;
                            default:
                              return;
                          }
                          return matchPlan.redirect ? (
                            <tr key={id}>
                              <td>{title}</td>
                              <td>
                                <Link
                                  to={`/site-data/${matchPlan.type}-observation/${matchPlan.plan}?site=${filter.id}&locationID=${filter.id}#search`}
                                >
                                  {data === null ? '-' : data} {unit}
                                </Link>
                              </td>
                            </tr>
                          ) : (
                            <tr key={id}>
                              <td>{title}</td>
                              <td>
                                {data === null ? '-' : data} {unit}
                              </td>
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
          {hasItems && (
            <div className="align-center">
              <button
                type="button"
                className="link-more"
                onClick={handleMoreClick}
              >
                <p>{t(`${I18N_KEY_PREFIX}.viewChartBtn`)}</p>
                <ArrowIcon />
              </button>
              <button
                type="button"
                className="link-more e-btn e-btn--outline"
                onClick={handleDownloadClick}
              >
                <p>{t(`${I18N_KEY_PREFIX}.downloadBtn`)}</p>
              </button>
            </div>
          )}
          <PopupArrow />
        </div>
      </div>
    </>
  );
};

export default PopupLayout;
