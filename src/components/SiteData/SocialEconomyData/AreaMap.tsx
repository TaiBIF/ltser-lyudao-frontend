import React, { createRef, useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

import map from 'data/socialEconomyData/village.json';
import { villageAnnuallyPopulationList } from 'data/socialEconomyData/population';
import _ from 'lodash';
import { usePopulationContext } from 'context/SocialEconomyData/PopulationContext';
import { RangeItem } from 'types/socialEconomyData';

const AreaMap = () => {
  const { raw, data, setData, filter, setFilter } = usePopulationContext();

  const [range, setRange] = useState<RangeItem>({ min: 0, max: 0 });

  const height = 600;

  echarts.registerMap('village', map);

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: `{b}<br/>人口 {c} 人`,
    },
    visualMap: {
      type: 'continuous',
      text: ['高', '低'],
      min: range.min,
      max: range.max,
      realtime: false,
      calculable: true,
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered'],
      },
      top: 0,
      right: 0,
    },
    series: [
      {
        type: 'map',
        name: `面量圖`,
        map: 'village',
        aspectScale: 0.9,
        label: {
          show: true,
        },
        selectedMode: 'single',
        nameProperty: 'VILLNAME',
        data,
      },
    ],
  };

  const isFetchingData = data === null;

  useEffect(() => {
    const matchYear = raw
      .filter((o: any) => o['資料時間'].split('Y')[0] === filter.year)
      .map((o: any) => ({
        name: o['鄉鎮市區名稱'],
        value: Number(o['人口數小計']),
      }));

    setData(matchYear);
  }, [filter.year]);

  useEffect(() => {
    if (!isFetchingData) {
      const rangeObj = {
        max: Number(_.maxBy(data, (o: any) => o.value)?.value),
        min: Number(_.minBy(data, (o: any) => o.value)?.value),
      };
      setRange(rangeObj);
    }
  }, [data]);

  return (
    <>
      {!isFetchingData && (
        <ReactECharts
          option={option}
          notMerge={true}
          lazyUpdate={true}
          opts={{ renderer: 'canvas', height }}
          style={{ height }}
        />
      )}
    </>
  );
};

export default AreaMap;
