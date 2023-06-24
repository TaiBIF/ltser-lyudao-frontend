import { useState } from 'react';

import { TimeRangeItem, DetailItem } from 'types/home';

import {
  defaultTimeRange,
  defaultSites,
  defaultIdTimeRange,
  coralDivDetail,
} from 'data/home/content';

import useSurveyMapData from 'hooks/useSurveyMapData';

const useCoralRec = () => {
  const [sites, setSites] = useState<string[]>([]);
  const [allTimeRange, setAllTimeRange] = useState<TimeRangeItem[]>([]);
  const [idTimeRange, setIdTimeRange] = useState<TimeRangeItem>({
    ...defaultTimeRange,
  });
  const [detail, setDetail] = useState<DetailItem>({
    site: '',
    year: '',
    count: 0,
  });

  const URL = `coral-div`;

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
    defaultDetail: coralDivDetail,
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

export default useCoralRec;
