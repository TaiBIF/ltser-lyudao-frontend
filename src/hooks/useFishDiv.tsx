import { useState } from 'react';

import { TimeRangeItem, DetailItem } from 'types/home';

import {
  defaultTimeRange,
  defaultSites,
  defaultIdTimeRange,
  fishDivDetail,
} from 'data/home/content';

import useSurveyMapData from 'hooks/useSurveyMapData';

const useFishDiv = () => {
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

  const URL = `fish-div`;

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
    defaultDetail: fishDivDetail,
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

export default useFishDiv;
