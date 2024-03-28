import React, { useEffect, useState } from 'react';

import ReactECharts from 'echarts-for-react';
import { usePopulationContext } from 'context/SocialEconomyData/PopulationContext';
import _ from 'lodash';
import { Grid } from '@mui/material';

const PopulationLineChart = ({ theme }: { theme: string }) => {
  const height = 400;
  const [xAxis, setXAxis] = useState<string[]>([]);
  const [series, setSeries] = useState<any[]>([]);

  const option = {
    title: {
      text: theme,
    },
    color: ['#5470C6', '#91CC75', '#FAC858', '#EE6666'],
    tooltip: {
      trigger: 'axis',
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {
          show: true,
          title: '下載',
        },
      },
    },
    legend: {
      top: 'auto',
      left: 'center',
      bottom: '0',
    },
    grid: {
      left: '15%',
      right: '10%',
      height: '65%',
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: xAxis,
      axisLabel: {
        interval: 'auto',
        rotate: 45,
      },
    },
    yAxis: {
      type: 'value',
    },
    series,
  };

  const { annuallyData: data } = usePopulationContext();
  const isFetchingData = data === null;

  useEffect(() => {
    if (!isFetchingData) {
      const group = _.groupBy(data, '鄉鎮市區名稱');
      const s = Object.entries(group).map(([key, value]): any => ({
        type: 'line',
        name: key,
        data: value.map((o: any) => Number(o[theme])),
      }));
      setSeries(s);
      const x = _.uniqBy(data, '資料時間').map(
        (o: any) => `${Number(o['資料時間'].split('Y')[0]) + 1911}年`
      );
      setXAxis(x);
    }
  }, [data]);

  return (
    <>
      <Grid item xs={12} md={6}>
        <ReactECharts
          option={option}
          notMerge={true}
          lazyUpdate={true}
          opts={{ renderer: 'canvas', height }}
          style={{ height }}
        />
      </Grid>
    </>
  );
};

export default PopulationLineChart;
