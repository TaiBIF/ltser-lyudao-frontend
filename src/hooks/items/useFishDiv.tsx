import { useState } from 'react';

import { TimeRangeItem } from 'types/home';
import { SeriesItemTypes } from 'types/series';
import { DetailItemTypes } from 'types/detail';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import {
  defaultTimeRange,
  defaultSites,
  defaultIdTimeRange,
  fishDivDetail,
} from 'data/home/content';
import { countSeries } from 'data/series';
import { fishDivFields } from 'data/field';
import { fishDivRaws } from 'data/rawData';

import useSurveyMapData from 'hooks/page/useSurveyMapData';
import useSiteData from 'hooks/page/useSiteData';
import { useSiteDataContext } from 'context/SiteDataContext';

const useFishDiv = () => {
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
  const [series, setSeries] = useState<SeriesItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const { filter } = useSiteDataContext();

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

  const { getDataRaws, getDataSeries, getDataFields } = useSiteData({
    id: filter.site,
    url: URL,
    defaultRaws: fishDivRaws,
    setRaws,
    setSeries,
    defaultSeries: countSeries,
    defaultFields: fishDivFields,
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

export default useFishDiv;
