import { useState } from 'react';

import { SeriesItemTypes } from 'types/series';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import useSiteData from 'hooks/page/useSiteData';
import useSurveyMapData from 'hooks/page/useSurveyMapData';

import { useSiteDataContext } from 'context/SiteDataContext';

const useTBIA = () => {
  const [raws, setRaws] = useState<RawItemTypes[] | null>(null);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `third-party/tbia`;

  const { getDataRaws, getDataFields } = useSiteData({
    id: filter.site,
    url: URL,
    setRaws,
    setFields,
  });

  return {
    raws,
    fields,
    getDataRaws,
    getDataFields,
  };
};

export default useTBIA;
