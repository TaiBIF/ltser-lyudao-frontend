import { useState } from 'react';

import useSiteData from 'hooks/page/useSiteData';

import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';

import { oceanSoundIndexRaws } from 'data/rawData';
import { oceanSoundIndexFields } from 'data/field';

const useOceanSoundIndex = () => {
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);

  const URL = `ocean-sound-index`;

  const { getDataRaws, getDataFields } = useSiteData({
    url: URL,
    defaultRaws: oceanSoundIndexRaws,
    setRaws,
    defaultFields: oceanSoundIndexFields,
    setFields,
  });

  return {
    raws,
    fields,
    getDataRaws,
    getDataFields,
  };
};

export default useOceanSoundIndex;
