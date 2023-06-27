import { useState } from 'react';

import { TimeRangeItem, DetailItem } from 'types/home';

import {
  defaultTimeRange,
  defaultSites,
  defaultIdTimeRange,
  zoobenthosDetail,
} from 'data/home/content';

import useSurveyMapData from 'hooks/useSurveyMapData';

const useZoobenthos = () => {
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

  const URL = `zoobenthos`;

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
    defaultDetail: zoobenthosDetail,
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

export default useZoobenthos;
