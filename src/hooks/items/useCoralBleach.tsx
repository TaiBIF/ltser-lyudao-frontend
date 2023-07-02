import { useState } from 'react';

import { RawItemTypes } from 'types/rawData';
import { SeriesItem } from 'types/series';
import { RawFieldItem } from 'types/field';

import { coralBleachFields } from 'data/field';
import { coralBleachRaws } from 'data/rawData';
import { defaultSeries } from 'data/series';

import useSiteData from 'hooks/page/useSiteData';

const useCoralBleach = () => {
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItem[]>([]);

  const URL = `coral-bleach`;

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    url: URL,
    defaultRaws: coralBleachRaws,
    setRaws,
    defaultFields: coralBleachFields,
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

export default useCoralBleach;
