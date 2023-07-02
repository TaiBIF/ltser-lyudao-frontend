import React, { useState, useEffect } from 'react';

import ReactECharts from 'echarts-for-react';

import { ObservationItem } from 'types/utils';

import {
  commonOptions,
  chartsColor,
  chartsHeight,
} from 'helpers/customEcharts';

import { WeatherChartItem } from 'types/chart';

import { weatherChartList } from 'data/chart';

import { useApi } from 'hooks/api/useApi';

type SeriesItem = {
  name?: string;
  data: number[];
  type: string;
};

const Content = () => {
  const [xAxisList, setXAxisList] = useState<string[]>([]);
  const [seriesList, setSeriesList] = useState<SeriesItem[]>([]);
  const [weatherChart, setWeatherChart] = useState<WeatherChartItem[]>([]);
  const { handleApi } = useApi();

  const getChart = async () => {
    const result = await handleApi({
      method: 'get',
      url: `/data/weather/chart/`,
    });
    if (result?.status === 'success') {
      setWeatherChart([...result.response.data]);
    } else {
      setWeatherChart([...weatherChartList]);
    }
  };

  const isFetchingWeatherChart = weatherChart.length === 0;

  useEffect(() => {
    if (!isFetchingWeatherChart) {
      const xAxis = weatherChart.map((v) => v.time);
      setXAxisList([...xAxis]);
      const series = Object.entries(weatherChart[0])
        .map(([key]) => {
          switch (key) {
            case 'time':
              return null;
            case 'airTemperature':
              return {
                name: key,
                type: 'line',
                data: weatherChart.map((v) => v[key]),
              };
            default:
              return {
                name: key,
                type: 'line',
                data: weatherChart.map((v) => v[key]),
                show: false,
              };
          }
        })
        .filter((v) => v !== null) as SeriesItem[];
      setSeriesList([...series]);
    }
  }, [weatherChart]);

  useEffect(() => {
    getChart();
  }, []);

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
