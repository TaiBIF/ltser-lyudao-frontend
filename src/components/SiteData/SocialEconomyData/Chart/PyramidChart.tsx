import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { usePopulationContext } from 'context/SocialEconomyData/PopulationContext';
import _ from 'lodash';

type PyramidData = {
  male: number[];
  female: number[];
};

const PyramidChart = ({ pyramidData }: { pyramidData: any }) => {
  const [xAxis, setXAxis] = useState<string[] | null>();
  const [data, setData] = useState<PyramidData>({
    male: [],
    female: [],
  });

  const { filter } = usePopulationContext();

  const height = 600;

  const option = {
    color: ['#73C0DE', '#EE6666'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true,
        },
      },
    },
    grid: [
      {
        left: 'auto',
        right: '10%',
        top: '10%',
        height: '80%',
        width: '35%',
      },
      {
        right: 'auto',
        left: '10%',
        top: '10%',
        height: '80%',
        width: '35%',
      },
    ],
    legend: {
      top: 'auto',
      left: 'center',
      bottom: '0',
    },
    yAxis: [
      {
        type: 'category',
        boundaryGap: true,
        axisLine: { onZero: true },
        data: xAxis,
        show: false,
      },
      {
        gridIndex: 1,
        type: 'category',
        boundaryGap: true,
        axisLine: { onZero: true },
        axisTick: 'inside',
        data: xAxis,
        position: 'right',
      },
    ],
    xAxis: [
      {
        name: '女性(人)',
        type: 'value',
      },
      {
        gridIndex: 1,
        name: '男性(人)',
        type: 'value',
        inverse: true,
      },
    ],
    series: [
      {
        name: `男性`,
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data.male,
        barCategoryGap: '0%',
      },
      {
        name: `女性`,
        type: 'bar',
        data: data.female,
        barCategoryGap: '0%',
      },
    ],
  };

  useEffect(() => {
    const matchYear = pyramidData.find(
      (o: any) => o['資料時間'].split('Y')[0] === filter.pyramidChartYear
    );
    let x: string[] = [];
    let male: number[] = [];
    let female: number[] = [];
    _.forEach(matchYear, (value, key) => {
      if (key.includes('男性')) {
        const formatKey = key.match(/(\d+-\d+歲|100歲以上)/);
        if (formatKey) {
          x.push(formatKey[0]);
        }
        male.push(value);
      } else if (key.includes('女性')) {
        female.push(value);
      }
    });
    setXAxis(x);
    setData({ male, female });
  }, [filter.pyramidChartYear]);

  return (
    <ReactECharts
      option={option}
      notMerge={true}
      lazyUpdate={true}
      opts={{ renderer: 'canvas', height }}
      style={{ height }}
    />
  );
};

export default PyramidChart;
