import { Dispatch, SetStateAction } from 'react';

import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';

import useSiteDataApi from 'hooks/api/useSiteDataApi';
import { SeriesItemTypes } from 'types/series';

interface useSiteDataProps {
  id: string;
  url: string;
  defaultRaws?: RawItemTypes[];
  defaultFields?: RawFieldItem[];
  defaultSeries?: SeriesItemTypes[];
  setRaws?: Dispatch<SetStateAction<RawItemTypes[]>>;
  setFields?: Dispatch<SetStateAction<RawFieldItem[]>>;
  setSeries?: Dispatch<SetStateAction<SeriesItemTypes[]>>;
}

const useSiteData = (props: useSiteDataProps) => {
  const {
    id,
    url,
    defaultRaws,
    defaultFields,
    defaultSeries,
    setRaws,
    setFields,
    setSeries,
  } = props;
  const { getRaws, getFields, getSeries } = useSiteDataApi();

  const getDataRaws = () => {
    getRaws({
      url,
      setList: setRaws,
      defaultList: defaultRaws || [],
    });
  };

  const getDataFields = () => {
    getFields({
      url,
      setList: setFields,
      defaultList: defaultFields || [],
    });
  };

  const getDataSeries = () => {
    getSeries({
      id,
      url,
      setList: setSeries,
      defaultList: defaultSeries || [],
    });
  };

  return {
    getDataRaws,
    getDataFields,
    getDataSeries,
  };
};

export default useSiteData;
