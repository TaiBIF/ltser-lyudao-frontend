import React, { useEffect } from 'react';

import { Dictionary } from 'lodash';

import useWeather from 'hooks/useWeather';

interface TooltipLayoutProps {
  data: Dictionary<number | string>;
}

const TooltipLayout = (props: TooltipLayoutProps) => {
  const { data } = props;
  const { timeRange, getWeatherTimeRange } = useWeather({
    id: String(data.locationID),
    year: '2023',
  });
  useEffect(() => {
    getWeatherTimeRange();
  }, []);
  return (
    <>
      {data.verbatimLocality}
      {`${timeRange.start} - ${timeRange.end}`}
    </>
  );
};

export default TooltipLayout;
