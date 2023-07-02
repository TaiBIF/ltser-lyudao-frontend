import { useState } from 'react';

import { SeriesItem } from 'types/series';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import { coralCommFields } from 'data/field';
import { defaultSeries } from 'data/series';
import { coralCommRaws } from 'data/rawData';

import useSiteData from 'hooks/page/useSiteData';

const useCoralComm = () => {
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItem[]>([]);

  const URL = `coral-comm`;

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    url: URL,
    defaultRaws: coralCommRaws,
    setRaws,
    defaultFields: coralCommFields,
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

export default useCoralComm;
