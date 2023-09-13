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
import { useSurveyMapContext } from 'context/SurveyMapContext';

import itemList from 'data/home/items.json';
import { surveyMapItemList } from 'data/home/content';

type SeriesItem = {
  data: number[];
  type: string;
};

const Content = () => {
  const [xAxisList, setXAxisList] = useState<string[]>([]);
  const [seriesList, setSeriesList] = useState<SeriesItem[]>([]);
  const [items, setItems] = useState<string[]>([]);
  const { filter, idData, allDetail } = useSurveyMapContext();

  const seasonList: string[] = ['1-3', '4-6', '7-9', '10-12'];

  const chartSeriesList: ObservationItem[] = [
    {
      id: 'seasonalAirTemperature',
      plan: 'weather',
      title: '季均溫',
      col: 'airTemperature',
      unit: '',
    },
    {
      id: 'seasonalPrecipitation',
      plan: 'weather',
      title: '季雨量',
      col: 'precipitation',
      unit: '',
    },
    {
      id: 'seasonalSeaTemperature',
      plan: 'sea-temperature',
      title: '季海溫',
      col: 'seaTemperature',
      unit: '',
    },
    {
      id: 'zoobenthos',
      plan: 'zoobenthos',
      title: '底棲動物種類數',
      col: 'count',
      unit: '',
    },
    {
      id: 'plant',
      plan: 'plant',
      title: '陸域植物種類數',
      col: 'count',
      unit: '',
    },
    {
      id: 'birdNetSound',
      plan: 'bird-net-sound',
      title: '鳥種數(鳥音)',
      col: 'count',
      unit: '',
    },
    {
      id: 'fishDiv',
      plan: 'fish-div',
      title: '魚種數',
      col: 'count',
      unit: '',
    },
  ];

  const option = {
    ...commonOptions,
    color: chartsColor.legend.multiple,
    title: {
      text: `${idData.verbatimLocality} - 視覺化統計圖`,
    },
    dataZoom: [
      ...commonOptions.dataZoom,
      {
        start: 20,
        end: 80,
        zoomOnMouseWheel: false,
      },
    ],
    legend: {
      top: '30%',
      right: '2%',
      type: 'scroll',
      orient: 'vertical',
    },
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
  };

  const isFetchingItems = items.length === 0;
  const isFetchingAllDetail = allDetail === null;

  useEffect(() => {
    const matchFilter = itemList
      .find((v) => v.site === filter.id)
      ?.years.find((v) => v.year === filter.year)?.items;
    if (matchFilter) {
      const matchItem = matchFilter
        .flatMap((item) => surveyMapItemList.filter((v) => v.plan === item))
        .map((v) => v.plan);
      setItems([...matchItem]);
    }
  }, [filter.id]);

  useEffect(() => {
    if (!isFetchingItems && !isFetchingAllDetail) {
      const xAxis = seasonList.map((v) => `${v}月`);
      setXAxisList([...xAxis]);
      const series = chartSeriesList
        .map((v: ObservationItem) => {
          const { id, plan, title, col, unit } = v;
          if (plan && items.includes(plan)) {
            const formatPlan = (plan: string) =>
              plan.replace(/-([a-z])/g, (match, letter) =>
                letter.toUpperCase()
              );
            return {
              type: 'line',
              data: allDetail[formatPlan(plan)].seasonal.map(
                (v: ObservationItem) => v[col]
              ),
              name: title,
            };
          } else {
            return null;
          }
        })
        .filter((v) => v !== null) as SeriesItem[];
      setSeriesList([...series]);
    }
  }, [items, allDetail]);

  return (
    <>
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
    </>
  );
};

export default Content;
