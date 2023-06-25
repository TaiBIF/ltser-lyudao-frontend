import { useState } from 'react';

import { TimeRangeItem, DetailItem } from 'types/home';

import {
  defaultTimeRange,
  defaultSites,
  defaultIdTimeRange,
  plantDetail,
} from 'data/home/content';

import useSurveyMapData from 'hooks/useSurveyMapData';

const usePlant = () => {
  const [sites, setSites] = useState<string[]>([]);
  const [allTimeRange, setAllTimeRange] = useState<TimeRangeItem[]>([]);
  const [idTimeRange, setIdTimeRange] = useState<TimeRangeItem>({
    ...defaultTimeRange,
  });
  const [detail, setDetail] = useState<DetailItem>({
    site: '',
    year: '',
    seasonal: [],
  });

  const URL = `plant`;

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
    defaultDetail: plantDetail,
    setSites,
    allTimeRange,
    setAllTimeRange,
    setIdTimeRange,
    setDetail,
  });

  return {
    sites,
    allTimeRange,
    idTimeRange,
    detail,
    getDataSites,
    getDataAllTimeRange,
    getDataHoverTimeRange,
    getDataIdTimeRange,
    getDataDetail,
  };
};

export default usePlant;
