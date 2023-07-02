import { useState } from 'react';

import { TimeRangeItem } from 'types/home';
import { DetailItemTypes } from 'types/detail';
import { SeriesItem } from 'types/series';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import {
  defaultTimeRange,
  defaultSites,
  defaultIdTimeRange,
  plantDetail,
} from 'data/home/content';
import { defaultSeries } from 'data/series';
import { plantFields } from 'data/field';
import { plantRaws } from 'data/rawData';

import useSurveyMapData from 'hooks/page/useSurveyMapData';
import useSiteData from 'hooks/page/useSiteData';

const usePlant = () => {
  const [sites, setSites] = useState<string[]>([]);
  const [allTimeRange, setAllTimeRange] = useState<TimeRangeItem[]>([]);
  const [idTimeRange, setIdTimeRange] = useState<TimeRangeItem>({
    ...defaultTimeRange,
  });
  const [detail, setDetail] = useState<DetailItemTypes>({
    site: '',
    year: '',
    seasonal: [],
  });
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [series, setSeries] = useState<SeriesItem[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);

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

  const { getDataRaws, getDataSeries, getDataFields } = useSiteData({
    url: URL,
    defaultRaws: plantRaws,
    setRaws,
    setSeries,
    defaultSeries,
    defaultFields: plantFields,
    setFields,
  });

  return {
    sites,
    allTimeRange,
    idTimeRange,
    detail,
    raws,
    series,
    fields,
    getDataSites,
    getDataAllTimeRange,
    getDataHoverTimeRange,
    getDataIdTimeRange,
    getDataDetail,
    getDataRaws,
    getDataSeries,
    getDataFields,
  };
};

export default usePlant;
