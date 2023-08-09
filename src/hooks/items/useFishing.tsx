import { useState } from 'react';

import { SeriesItemTypes } from 'types/series';
import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';

import useSiteData from 'hooks/page/useSiteData';
import { useSiteDataContext } from 'context/SiteDataContext';

const useFishing = () => {
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const { filter } = useSiteDataContext();

  const URL = `fishing`;

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

export default useFishing;
