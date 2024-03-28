import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

import _ from 'lodash';
import { Grid } from '@mui/material';
import {
  industryExcludeKeyList,
  industryHiddenKeyList,
} from 'data/socialEconomyData/industry';

const IndustryLineChart = ({
  raw,
  theme,
  size,
  id,
}: {
  raw: any[];
  theme: string;
  size: number;
  id: string;
}) => {
  const height = 400;
  const [xAxis, setXAxis] = useState<string[]>([]);
  const [series, setSeries] = useState<any[]>([]);

  const option = {
    title: {
      text: theme,
    },
    color: [
      '#5470C6',
      '#91CC75',
      '#FAC858',
      '#EE6666',
      '#73C0DE',
      '#3BA272',
      '#FC8452',
      '#9A60B4',
      '#EA7CCC',
    ],
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
      top: 'middle',
      left: '75%',
      orient: 'vertical',
      type: 'scroll',
      height: '78%',
    },
    grid: {
      left: '7.5%',
      right: '27.5%',
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

  const isTourism = id === 'tourism';

  useEffect(() => {
    if (isTourism) {
      const data = raw
        .map((o: any) => {
          const match = o['年度'].match(/\(((?!Total)[^)]+)\)/);
          return match !== null
            ? [`${match[1]}年`, Number(o['綠島遊憩區'])]
            : null;
        })
        .filter((o: any) => o !== null);
      setXAxis(data.map((a: any) => a[0]));
      setSeries([
        {
          type: 'line',
          name: theme,
          data: data.map((a: any) => a[1]),
        },
      ]);
    } else {
      const x = _.uniqBy(raw, '資料時間').map(
        (o: any) => `${Number(o['資料時間'].split('Y')[0]) + 1911}年`
      );
      setXAxis(x);
      const data = raw.map((o: any) => _.omit(o, industryExcludeKeyList));
      const s = Object.keys(_.omit(data[0], industryHiddenKeyList)).map(
        (v: string) => {
          const matchKey = data.map((o: Record<string, any>) => Number(o[v]));
          return {
            type: 'line',
            name: v,
            data: matchKey,
          };
        }
      );
      setSeries(s);
    }
  }, []);

  return (
    <>
      <Grid item xs={12} xl={size}>
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

export default IndustryLineChart;
