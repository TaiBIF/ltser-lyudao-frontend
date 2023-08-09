import { useState } from 'react';

import useSiteData from 'hooks/page/useSiteData';

import { SeriesItemTypes } from 'types/series';
import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';

import { oceanSoundIndexRaws } from 'data/rawData';
import { oceanSoundIndexFields } from 'data/field';
import { defaultSites } from 'data/home/content';

import useSurveyMapData from 'hooks/page/useSurveyMapData';

import { useSiteDataContext } from 'context/SiteDataContext';
import { oceanSoundIndexSeries } from 'data/series';

const useOceanSoundIndex = () => {
  const [sites, setSites] = useState<string[]>([]);
  const [raws, setRaws] = useState<RawItemTypes[] | null>(null);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItemTypes[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `ocean-sound-index`;

  const { getDataSites } = useSurveyMapData({
    url: URL,
    // defaultSites,
    setSites,
  });

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    id: filter.site,
    url: URL,
    // defaultRaws: oceanSoundIndexRaws,
    setRaws,
    // defaultFields: oceanSoundIndexFields,
    setFields,
    // defaultSeries: oceanSoundIndexSeries,
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

export default useOceanSoundIndex;
