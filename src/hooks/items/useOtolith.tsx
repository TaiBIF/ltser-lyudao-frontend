import { useState } from 'react';

import { SeriesItem } from 'types/series';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import { otolithFields } from 'data/field';
import { defaultSeries } from 'data/series';
import { otolithRaws } from 'data/rawData';

import useSiteData from 'hooks/page/useSiteData';

const useOtolith = () => {
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItem[]>([]);

  const URL = `otolith`;

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    url: URL,
    defaultRaws: otolithRaws,
    setRaws,
    defaultFields: otolithFields,
    setFields,
    defaultSeries,
    setSeries,
  });

  return {
    raws,
    fields,
    series,
    getDataRaws,
    getDataFields,
    getDataSeries,
  };
};

export default useOtolith;
