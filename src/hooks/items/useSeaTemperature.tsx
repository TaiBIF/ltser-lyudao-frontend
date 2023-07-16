import { useState } from 'react';

import { SeriesItemTypes } from 'types/series';
import { TimeRangeItem } from 'types/home';
import { DetailItemTypes } from 'types/detail';
import { RawFieldItem } from 'types/field';

import {
  defaultTimeRange,
  defaultSites,
  defaultIdTimeRange,
  seaTemperatureDeatil,
} from 'data/home/content';

import { seaTemperatureRaws } from 'data/rawData';

import useSurveyMapData from 'hooks/page/useSurveyMapData';
import useSiteData from 'hooks/page/useSiteData';

import { RawItemTypes } from 'types/rawData';
import { seaTemperatureFields } from 'data/field';
import { useSiteDataContext } from 'context/SiteDataContext';
import { seaTemperatureSeries } from 'data/series';

const useSeaTemperature = () => {
  const [sites, setSites] = useState<string[]>([]);
  const [allTimeRange, setAllTimeRange] = useState<TimeRangeItem[]>([]);
  const [idTimeRange, setIdTimeRange] = useState<TimeRangeItem>({
    ...defaultTimeRange,
  });
  const [detail, setDetail] = useState<DetailItemTypes>({
    site: '',
    year: '',
    annual: {
      seaTemperature: 0,
    },
    seasonal: [],
  });
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItemTypes[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `sea-temperature`;

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
    defaultDetail: seaTemperatureDeatil,
    setSites,
    allTimeRange,
    setAllTimeRange,
    setIdTimeRange,
    setDetail,
  });

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    id: filter.site,
    url: URL,
    defaultRaws: seaTemperatureRaws,
    setRaws,
    defaultFields: seaTemperatureFields,
    setFields,
    defaultSeries: seaTemperatureSeries,
    setSeries,
  });

  return {
    sites,
    allTimeRange,
    idTimeRange,
    detail,
    raws,
    fields,
    series,
    getDataSites,
    getDataAllTimeRange,
    getDataHoverTimeRange,
    getDataIdTimeRange,
    getDataDetail,
    getDataRaws,
    getDataFields,
    getDataSeries,
  };
};

export default useSeaTemperature;
