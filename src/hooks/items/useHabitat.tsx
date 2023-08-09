import { useState } from 'react';

import { SeriesItemTypes } from 'types/series';
import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';

import useSiteData from 'hooks/page/useSiteData';
import useSurveyMapData from 'hooks/page/useSurveyMapData';
import { useSiteDataContext } from 'context/SiteDataContext';

const useHabitat = () => {
  const [sites, setSites] = useState<string[]>([]);
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItemTypes[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `habitat`;

  const { getDataSites } = useSurveyMapData({
    url: URL,
    setSites,
  });

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    id: filter.site,
    url: URL,
    setRaws,
    setFields,
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

export default useHabitat;
