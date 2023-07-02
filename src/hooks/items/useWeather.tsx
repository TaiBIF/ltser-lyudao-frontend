import { useState } from 'react';

import { TimeRangeItem } from 'types/home';
import { DetailItemTypes } from 'types/detail';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import {
  defaultTimeRange,
  defaultSites,
  defaultIdTimeRange,
  weatherDetail,
} from 'data/home/content';

import { weatherRaws } from 'data/rawData';

import useSurveyMapData from 'hooks/page/useSurveyMapData';
import useSiteData from 'hooks/page/useSiteData';

import { weatherFields } from 'data/field';

const useWeather = () => {
  const [sites, setSites] = useState<string[]>([]);
  const [allTimeRange, setAllTimeRange] = useState<TimeRangeItem[]>([]);
  const [idTimeRange, setIdTimeRange] = useState<TimeRangeItem>({
    ...defaultTimeRange,
  });
  const [detail, setDetail] = useState<DetailItemTypes>({
    site: '',
    year: '',
    annual: {
      airTemperature: 0,
      precipitation: 0,
    },
    seasonal: [],
  });
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);

  const URL = `weather`;

  const {
    getDataSites,
    getDataAllTimeRange,
    getDataHoverTimeRange,
    getDataIdTimeRange,
    getDataDetail,
  } = useSurveyMapData({
    url: URL,
    defaultSites,
    defaultIdTimeRange,
    defaultDetail: weatherDetail,
    setSites,
    allTimeRange,
    setAllTimeRange,
    setIdTimeRange,
    setDetail,
  });

  const { getDataRaws, getDataFields } = useSiteData({
    url: URL,
    defaultRaws: weatherRaws,
    setRaws,
    defaultFields: weatherFields,
    setFields,
  });

  return {
    sites,
    allTimeRange,
    idTimeRange,
    detail,
    raws,
    fields,
    getDataSites,
    getDataAllTimeRange,
    getDataHoverTimeRange,
    getDataIdTimeRange,
    getDataDetail,
    getDataRaws,
    getDataFields,
  };
};

export default useWeather;
