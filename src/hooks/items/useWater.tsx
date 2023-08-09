import { useState } from 'react';

import { SeriesItemTypes } from 'types/series';
import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';

import { waterFields } from 'data/field';
import { waterRaws } from 'data/rawData';
import { defaultSites } from 'data/home/content';

import useSiteData from 'hooks/page/useSiteData';
import useSurveyMapData from 'hooks/page/useSurveyMapData';
import { useSiteDataContext } from 'context/SiteDataContext';
import { waterSeries } from 'data/series';

const useWater = () => {
  const [sites, setSites] = useState<string[]>([]);
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItemTypes[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `water`;

  const { getDataSites } = useSurveyMapData({
    url: URL,
    // defaultSites,
    setSites,
  });

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    id: filter.site,
    url: URL,
    // defaultRaws: waterRaws,
    setRaws,
    // defaultFields: waterFields,
    setFields,
    // defaultSeries: waterSeries,
    setSeries,
  });

  return {
    sites,
    raws,
    fields,
    series,
    getDataSites,
    getDataRaws,
    getDataFields,
    getDataSeries,
  };
};

export default useWater;
