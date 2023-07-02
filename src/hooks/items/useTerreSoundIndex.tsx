import { useState } from 'react';

import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';

import { terreSoundIndexRaws } from 'data/rawData';
import { terreSoundIndexFields } from 'data/field';

import useSiteData from 'hooks/page/useSiteData';

const useTerreSoundIndex = () => {
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);

  const URL = `terre-sound-index`;

  const { getDataRaws, getDataFields } = useSiteData({
    url: URL,
    defaultRaws: terreSoundIndexRaws,
    setRaws,
    defaultFields: terreSoundIndexFields,
    setFields,
  });

  return {
    raws,
    fields,
    getDataRaws,
    getDataFields,
  };
};

export default useTerreSoundIndex;
