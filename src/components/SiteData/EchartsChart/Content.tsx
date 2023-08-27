import React, { useState, useEffect } from 'react';

import ReactECharts from 'echarts-for-react';

import { ObservationItem } from 'types/utils';
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

type SeriesItem = {
  name?: string;
  data: number[];
  type: string;
};

const Content = ({ item }: { item: string }) => {
  const [xAxisList, setXAxisList] = useState<string[]>([]);
  const [seriesList, setSeriesList] = useState<SeriesItem[]>([]);
  const contextData = useDataContext().find((v: ContextItem) => v.id === item);
  const { pathname } = useLocation();
  const { filter } = useSiteDataContext();

  const isFetchingSeries = contextData.series === null;
  const hasNoSite = filter.site === '';

  const hasNoSeries =
    filter.site !== '' &&
    contextData.series !== null &&
    contextData.series.length === 0;

  useEffect(() => {
    if (contextData.series !== undefined) {
      contextData.getSeries();
    }
  }, [pathname, filter.site]);

  useEffect(() => {
    if (!isFetchingSeries) {
      if (!hasNoSite) {
        if (!hasNoSeries) {
          const xAxis = contextData.series.map((v: SeriesItemTypes) => v.time);
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
          <div>目前沒有圖表資料。</div>
        )
      ) : (
        <Placeholder text="讀取中，請稍候" layout="block" />
      )}
    </>
  );
};

export default Content;
