import { useState, useEffect } from 'react';
import useSurveyMap from 'hooks/useSurveyMap';

import { RelateListTypes } from 'types/utils';

import { TimeRangeItem, DataItem } from 'types/home';
import {
  weatherAllSites,
  weatherDataById,
  weatherTimeRangeById,
} from 'data/home/content';

interface useWeatherProps {
  id: string;
  year: string;
}

const useWeather = (props: useWeatherProps) => {
  const { id, year } = props;
  const { getSites, getTimeRange, getDetail } = useSurveyMap();

  const [sites, setSites] = useState<string[]>([]);
  const [timeRange, setTimeRange] = useState<TimeRangeItem>({
    site: '',
    start: '',
    end: '',
  });
  const [detail, setDetail] = useState<DataItem>({
    site: '',
    year: '',
    annual: {
      airTemperature: 0,
      precipitation: 0,
    },
    seasonal: [],
  });

  const getWeatherSites = () => {
    getSites({
      url: `getWeatherSites`,
      setList: setSites,
      defaultList: weatherAllSites.sites,
    });
  };

  const getWeatherTimeRange = () => {
    getTimeRange({
      id,
      url: `getWeatherTimeRange`,
      setData: setTimeRange,
      defaultData: weatherTimeRangeById,
    });
  };

  const getWeatherDetail = () => {
    getDetail({
      id,
      year,
      url: `getWeatherDetail`,
      setData: setDetail,
      defaultData: weatherDataById,
    });
  };

  return {
    sites,
    timeRange,
    detail,
    getWeatherSites,
    getWeatherTimeRange,
    getWeatherDetail,
  };
};

export default useWeather;
