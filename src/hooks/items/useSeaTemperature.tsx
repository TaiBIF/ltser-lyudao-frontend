import { useState } from 'react';

import { SeriesItemTypes } from 'types/series';
import { TimeRangeItem } from 'types/home';
import { DetailItemTypes } from 'types/detail';
import { RawFieldItem } from 'types/field';

import { defaultSites, seaTemperatureDeatil } from 'data/home/content';

import { seaTemperatureRaws } from 'data/rawData';

import useSurveyMapData from 'hooks/page/useSurveyMapData';
import useSiteData from 'hooks/page/useSiteData';

import { RawItemTypes } from 'types/rawData';
import { seaTemperatureFields } from 'data/field';
import { useSiteDataContext } from 'context/SiteDataContext';
import { seaTemperatureSeries } from 'data/series';

const useSeaTemperature = () => {
  const [sites, setSites] = useState<string[] | null>(null);
  const [detail, setDetail] = useState<DetailItemTypes>({
    site: '',
    year: '',
    annual: {
      seaTemperature: 0,
    },
    seasonal: [],
  });
  const [raws, setRaws] = useState<RawItemTypes[] | null>(null);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItemTypes[] | null>(null);
  const { filter } = useSiteDataContext();

  const URL = `sea-temperature`;

  const { getDataSites, getDataDetail } = useSurveyMapData({
    url: URL,
    // defaultSites,
    // defaultDetail: seaTemperatureDeatil,
    setSites,
    setDetail,
  });

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    id: filter.site,
    url: URL,
    // defaultRaws: seaTemperatureRaws,
    setRaws,
    // defaultFields: seaTemperatureFields,
    setFields,
    // defaultSeries: seaTemperatureSeries,
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

export default useSeaTemperature;
