import React, { useState, useEffect } from 'react';

import ReactECharts from 'echarts-for-react';

import { ObservationItem } from 'types/utils';

import {
  commonOptions,
  chartsColor,
  chartsHeight,
} from 'helpers/customEcharts';

import { useDataContext } from 'context/DataContext';

type SeriesItem = {
  data: number[];
  type: string;
};

const Content = () => {
  const [xAxisList, setXAxisList] = useState<string[]>([]);
  const [seriesList, setSeriesList] = useState<SeriesItem[]>([]);
  const {
    weatherDetail,
    seaTemperatureDetail,
    plantDetail,
    birdNetSoundDetail,
    fishDivDetail,
  } = useDataContext();

  const isFetchingDeatil =
    weatherDetail.site === '' ||
    seaTemperatureDetail.site === '' ||
    plantDetail.site === '' ||
    birdNetSoundDetail.site === '' ||
    fishDivDetail.site === '';

  const seasonList: string[] = ['1-3', '4-6', '7-9', '10-12'];

  const chartSeriesList: ObservationItem[] = [
    {
      id: 'airTemperature',
      title: '季均溫',
      data: weatherDetail,
      col: 'airTemperature',
      unit: '',
    },
    {
      id: 'precipitation',
      title: '季雨量',
      data: weatherDetail,
      col: 'precipitation',
      unit: '',
    },
    {
      id: 'seaTemperature',
      title: '季海溫',
      data: seaTemperatureDetail,
      col: 'seaTemperature',
      unit: '',
    },
    {
      id: 'plant',
      title: '陸域植物種類數',
      data: plantDetail,
      col: 'count',
      unit: '',
    },
    {
      id: 'birdNetSound',
      title: '鳥種數(鳥音)',
      data: birdNetSoundDetail,
      col: 'count',
      unit: '',
    },
    {
      id: 'fishDiv',
      title: '魚種數',
      data: fishDivDetail,
      col: 'count',
      unit: '',
    },
  ];

  const option = {
    ...commonOptions,
    color: chartsColor.legend.multiple,
    title: {
      text: ``,
    },
    dataZoom: [
      ...commonOptions.dataZoom,
      {
        start: 20,
        end: 80,
        zoomOnMouseWheel: false,
      },
    ],
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

  useEffect(() => {
    if (!isFetchingDeatil) {
      const xAxis = seasonList.map((v) => `${v}月`);
      setXAxisList([...xAxis]);
      const series = chartSeriesList.map((v) => {
        const { id, title, data, col, unit } = v;
        return {
          type: 'line',
          data: data.seasonal.map((v: ObservationItem) => v[col]),
          name: title,
        };
      });
      setSeriesList([...series]);
    }
  }, [
    weatherDetail,
    seaTemperatureDetail,
    plantDetail,
    birdNetSoundDetail,
    fishDivDetail,
  ]);

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
