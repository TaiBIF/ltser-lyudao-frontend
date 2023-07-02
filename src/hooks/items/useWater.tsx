import { useState } from 'react';

import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';

import { waterFields } from 'data/field';
import { waterRaws } from 'data/rawData';

import useSiteData from 'hooks/page/useSiteData';

const useWater = () => {
  const [raws, setRaws] = useState<RawItemTypes[]>([]);
  const [fields, setFields] = useState<RawFieldItem[]>([]);

  const URL = `water`;

  const { getDataRaws, getDataFields } = useSiteData({
    url: URL,
    defaultRaws: waterRaws,
    setRaws,
    defaultFields: waterFields,
    setFields,
  });

  return {
    raws,
    fields,
    getDataRaws,
    getDataFields,
  };
};

export default useWater;
