import { useState } from 'react';

import { SeriesItemTypes } from 'types/series';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import { coralCommFields } from 'data/field';
import { countSeries } from 'data/series';
import { coralCommRaws } from 'data/rawData';
import { defaultSites } from 'data/home/content';

import useSiteData from 'hooks/page/useSiteData';
import useSurveyMapData from 'hooks/page/useSurveyMapData';
import { useSiteDataContext } from 'context/SiteDataContext';

const useCoralComm = () => {
  const [sites, setSites] = useState<string[]>([]);
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItemTypes[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `coral-comm`;

  const { getDataSites } = useSurveyMapData({
    url: URL,
    // defaultSites,
    setSites,
  });

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    id: filter.site,
    url: URL,
    // defaultRaws: coralCommRaws,
    setRaws,
    // defaultFields: coralCommFields,
    setFields,
    // defaultSeries: countSeries,
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

export default useCoralComm;
