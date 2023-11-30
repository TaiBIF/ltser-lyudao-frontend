import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import ReactECharts from 'echarts-for-react';

import { ContextItem } from 'types/utils';

import {
  commonOptions,
  chartsColor,
  chartsHeight,
} from 'helpers/customEcharts';

import { useDataContext } from 'context/DataContext';
import { useLocation } from 'react-router-dom';
import { SeriesItemTypes } from 'types/series';
import { useSiteDataContext } from 'context/SiteDataContext';
import Placeholder from 'components/Placeholder';
import { useLangContext } from 'context/LangContext';

type SeriesItem = {
  name?: string;
  data: number[];
  type: string;
  isHabitat: boolean;
};

const Content = ({
  item,
  isHabitat,
  I18N_KEY_PREFIX,
}: {
  item: string;
  isHabitat: boolean;
  I18N_KEY_PREFIX: string;
}) => {
  const { t } = useTranslation();

  const [xAxisList, setXAxisList] = useState<string[]>([]);
  const [seriesList, setSeriesList] = useState<SeriesItem[]>([]);
  const contextData = useDataContext().find((v: ContextItem) => v.id === item);
  const { pathname } = useLocation();
  const { filter } = useSiteDataContext();
  const { lang } = useLangContext();

  const isFetchingSeries = contextData.series === null;
  const hasNoSite = filter.site === '';

  const hasNoSeries =
    filter.site !== '' &&
    contextData.series !== null &&
    contextData.series.length === 0;

  useEffect(() => {
    if (contextData.series !== undefined && !hasNoSite) {
      contextData.getSeries();
    }
  }, [pathname, filter.site, lang]);

  useEffect(() => {
    if (!isFetchingSeries) {
      if (!hasNoSite) {
        if (!hasNoSeries) {
          let key: string;
          if (isHabitat) {
            key = 'locationID';
          } else {
            key = 'time';
          }
          const xAxis = contextData.series.map((v: SeriesItemTypes) => v[key]);
          setXAxisList([...xAxis]);
          const series = Object.entries(contextData.series[0])
            .map(([key]) => {
              switch (key) {
                case 'time':
                  return null;
                case 'airTemperature':
                  return {
                    name: key,
                    type: 'line',
                    data: contextData.series.map(
                      (v: SeriesItemTypes) => v[key]
                    ),
                  };
                default:
                  return {
                    name: key,
                    type: 'line',
                    data: contextData.series.map(
                      (v: SeriesItemTypes) => v[key]
                    ),
                    show: false,
                  };
              }
            })
            .filter((v) => v !== null) as SeriesItem[];
          setSeriesList([...series]);
        }
      }
    }
  }, [contextData.series]);

  const option = {
    ...commonOptions,
    color: chartsColor.legend.multiple,
    dataZoom: [
      ...commonOptions.dataZoom,
      {
        start: 20,
        end: 80,
        zoomOnMouseWheel: false,
      },
    ],
    grid: {
      width: '78%',
      left: '5%',
      height: '60%',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true,
        },
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: xAxisList,
    },
    yAxis: {
      type: 'value',
    },
    series: seriesList,
    legend: {
      top: '30%',
      right: '2%',
      type: 'scroll',
      orient: 'vertical',
    },
  };

  return (
    <>
      {!isFetchingSeries ? (
        !hasNoSite && !hasNoSeries ? (
          <ReactECharts
            option={option}
            notMerge={true}
            lazyUpdate={true}
            opts={{ renderer: 'canvas', height: chartsHeight.default }}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        ) : (
          <div>{t(`${I18N_KEY_PREFIX}.graphEmptyStateText`)}</div>
        )
      ) : (
        <Placeholder text="" layout="block" />
      )}
    </>
  );
};

export default Content;
