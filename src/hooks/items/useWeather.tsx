import { useState } from 'react';

import { SeriesItemTypes } from 'types/series';
import { TimeRangeItem } from 'types/home';
import { DetailItemTypes } from 'types/detail';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import { defaultSites, weatherDetail } from 'data/home/content';
import { weatherRaws } from 'data/rawData';
import { weatherSeries } from 'data/series';
import { weatherFields } from 'data/field';

import useSurveyMapData from 'hooks/page/useSurveyMapData';
import useSiteData from 'hooks/page/useSiteData';

import { useSiteDataContext } from 'context/SiteDataContext';

const useWeather = () => {
  const [sites, setSites] = useState<string[]>([]);
  const [detail, setDetail] = useState<DetailItemTypes>({
    site: '',
    year: '',
    annual: {
      airTemperature: 0,
      precipitation: 0,
    },
    seasonal: [],
  });
  const [raws, setRaws] = useState<RawItemTypes[] | null>(null);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItemTypes[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `weather`;

  const { getDataSites, getDataDetail } = useSurveyMapData({
    url: URL,
    setSites,
    setDetail,
  });

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    id: filter.site,
    url: URL,
    defaultRaws: weatherRaws,
    setRaws,
    defaultFields: weatherFields,
    setFields,
    defaultSeries: weatherSeries,
    setSeries,
  });

  return {
    sites,
    detail,
    raws,
    fields,
    series,
    getDataSites,
    getDataDetail,
    getDataRaws,
    getDataFields,
    getDataSeries,
  };
};

export default useWeather;
