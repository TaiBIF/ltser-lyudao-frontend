import React, { useState, useEffect } from 'react';

import { Dictionary } from 'lodash';

import useWeather from 'hooks/items/useWeather';
import { TimeRangeItem } from 'types/home';
import { defaultTimeRange, surveyMapItemList } from 'data/home/content';

interface TooltipLayoutProps {
  data: Dictionary<number | string>;
  items: string[];
}

const TooltipLayout = (props: TooltipLayoutProps) => {
  const { data, items } = props;
  // const { getDataHoverTimeRange } = useWeather();

  // const [timeRange, setTimeRange] = useState<TimeRangeItem>({
  //   ...defaultTimeRange,
  // });

  // useEffect(() => {
  //   const time = getDataHoverTimeRange(String(data.locationID));
  //   setTimeRange({ ...defaultTimeRange, ...time });
  // }, []);
  useEffect(() => {}, []);

  return (
    <>
      <div>{data.verbatimLocality}</div>
      {/* <div>{`${timeRange.start} - ${timeRange.end}`}</div> */}
      <div>2022-01-01 - 2023-06-27</div>
      <div>
        {items.map((v) => {
          return <div key={v}>{v}</div>;
        })}
      </div>
    </>
  );
};

export default TooltipLayout;
