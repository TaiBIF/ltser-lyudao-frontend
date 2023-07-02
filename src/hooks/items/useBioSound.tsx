import { useState } from 'react';

import { SeriesItem } from 'types/series';
import { RawFieldItem } from 'types/field';
import { RawItemTypes } from 'types/rawData';

import { bioSoundFields } from 'data/field';
import { defaultSeries } from 'data/series';
import { weatherRaws } from 'data/rawData';

import useSiteData from 'hooks/page/useSiteData';

const useBioSound = () => {
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);
  const [series, setSeries] = useState<SeriesItem[]>([]);

  const URL = `bio-sound`;

  const { getDataRaws, getDataFields, getDataSeries } = useSiteData({
    url: URL,
    defaultRaws: weatherRaws,
    setRaws,
    defaultFields: bioSoundFields,
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

export default useBioSound;
