import React, { useState, useEffect } from 'react';

import { Dictionary } from 'lodash';

import useWeather from 'hooks/useWeather';
import { TimeRangeItem } from 'types/home';
import { defaultTimeRange } from 'data/home/content';

interface TooltipLayoutProps {
  data: Dictionary<number | string>;
}

const TooltipLayout = (props: TooltipLayoutProps) => {
  const { data } = props;
  const { getDataHoverTimeRange } = useWeather();

  const [timeRange, setTimeRange] = useState<TimeRangeItem>({
    ...defaultTimeRange,
  });

  useEffect(() => {
    const time = getDataHoverTimeRange(String(data.locationID));
    setTimeRange({ ...defaultTimeRange, ...time });
  }, []);

  return (
    <>
      <div>{data.verbatimLocality}</div>
      <div>{`${timeRange.start} - ${timeRange.end}`}</div>
    </>
  );
};

export default TooltipLayout;
