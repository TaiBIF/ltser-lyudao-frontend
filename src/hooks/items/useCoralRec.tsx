import { useState } from 'react';

import { TimeRangeItem } from 'types/home';
import { SeriesItemTypes } from 'types/series';
import { DetailItemTypes } from 'types/detail';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import { defaultSites, coralRecDetail } from 'data/home/content';
import { countSeries } from 'data/series';
import { coralRecFields } from 'data/field';

import useSurveyMapData from 'hooks/page/useSurveyMapData';
import useSiteData from 'hooks/page/useSiteData';
import { useSiteDataContext } from 'context/SiteDataContext';

import { weatherRaws } from 'data/rawData';

const useCoralRec = () => {
  const [sites, setSites] = useState<string[] | null>(null);
  const [detail, setDetail] = useState<DetailItemTypes>({
    site: '',
    year: '',
    count: 0,
  });
  const [raws, setRaws] = useState<RawItemTypes[] | null>(null);
  const [series, setSeries] = useState<SeriesItemTypes[] | null>(null);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `coral-rec`;

  const { getDataSites, getDataDetail } = useSurveyMapData({
    url: URL,
    // defaultSites,
    // defaultDetail: coralRecDetail,
    setSites,
    setDetail,
  });

  const { getDataRaws, getDataSeries, getDataFields } = useSiteData({
    id: filter.site,
    url: URL,
    // defaultRaws: weatherRaws,
    setRaws,
    // defaultSeries: countSeries,
    setSeries,
    // defaultFields: coralRecFields,
    setFields,
  });

  return {
    sites,
    detail,
    raws,
    series,
    fields,
    getDataSites,
    getDataDetail,
    getDataRaws,
    getDataSeries,
    getDataFields,
  };
};

export default useCoralRec;
