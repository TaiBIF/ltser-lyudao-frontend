import { useState } from 'react';

import { RawItemTypes } from 'types/rawData';
import { SeriesItemTypes } from 'types/series';
import { RawFieldItem } from 'types/field';

import { coralBleachFields } from 'data/field';
import { coralBleachRaws } from 'data/rawData';
import { countSeries } from 'data/series';
import { defaultSites } from 'data/home/content';

import useSiteData from 'hooks/page/useSiteData';
import useSurveyMapData from 'hooks/page/useSurveyMapData';

import { useSiteDataContext } from 'context/SiteDataContext';

const useCoralBleach = () => {
  const [sites, setSites] = useState<string[]>([]);
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItemTypes[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `coral-bleach`;

  const { getDataSites } = useSurveyMapData({
    url: URL,
    defaultSites,
    setSites,
  });

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    id: filter.site,
    url: URL,
    defaultRaws: coralBleachRaws,
    setRaws,
    defaultFields: coralBleachFields,
    setFields,
    defaultSeries: countSeries,
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

export default useCoralBleach;
