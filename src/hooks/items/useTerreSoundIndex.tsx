import { useState } from 'react';

import { SeriesItemTypes } from 'types/series';
import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';

import { terreSoundIndexRaws } from 'data/rawData';
import { terreSoundIndexFields } from 'data/field';
import { defaultSites } from 'data/home/content';

import useSiteData from 'hooks/page/useSiteData';
import useSurveyMapData from 'hooks/page/useSurveyMapData';
import { useSiteDataContext } from 'context/SiteDataContext';
import { terreSoundIndexSeries } from 'data/series';

const useTerreSoundIndex = () => {
  const [sites, setSites] = useState<string[]>([]);
  const [raws, setRaws] = useState<RawItemTypes[] | null>(null);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItemTypes[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `terre-sound-index`;

  const { getDataSites } = useSurveyMapData({
    url: URL,
    // defaultSites,
    setSites,
  });

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    id: filter.site,
    url: URL,
    defaultRaws: terreSoundIndexRaws,
    setRaws,
    defaultFields: terreSoundIndexFields,
    setFields,
    defaultSeries: terreSoundIndexSeries,
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

export default useTerreSoundIndex;
