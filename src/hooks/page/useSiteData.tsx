import { Dispatch, SetStateAction } from 'react';

import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';

import useSiteDataApi from 'hooks/api/useSiteDataApi';
import { SeriesItem } from 'types/series';

interface useSiteDataProps {
  url: string;
  defaultRaws?: RawItemTypes[];
  defaultFields?: RawFieldItem[];
  defaultSeries?: SeriesItem[];
  setRaws?: Dispatch<SetStateAction<RawItemTypes[]>>;
  setFields?: Dispatch<SetStateAction<RawFieldItem[]>>;
  setSeries?: Dispatch<SetStateAction<SeriesItem[]>>;
}

const useSiteData = (props: useSiteDataProps) => {
  const {
    url,
    defaultRaws,
    defaultFields,
    defaultSeries,
    setRaws,
    setFields,
    setSeries,
  } = props;
  const { getData, getFields, getSeries } = useSiteDataApi();

  const getDataRaws = () => {
    getData({
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
