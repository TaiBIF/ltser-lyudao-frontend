import { Dispatch, SetStateAction } from 'react';

import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';

import useSiteDataApi from 'hooks/api/useSiteDataApi';
import { SeriesItemTypes } from 'types/series';
import { PageDataItem } from 'types/utils';

interface useSiteDataProps {
  id: string;
  url: string;
  defaultRaws?: RawItemTypes[];
  defaultFields?: RawFieldItem[];
  defaultSeries?: SeriesItemTypes[];
  setRaws?: Dispatch<SetStateAction<RawItemTypes[]>>;
  setFields?: Dispatch<SetStateAction<RawFieldItem[]>>;
  setSeries?: Dispatch<SetStateAction<SeriesItemTypes[]>>;
  setPageData?: Dispatch<SetStateAction<PageDataItem[]>>;
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

  const getDataRaws = ({
    params,
    setPageData,
  }: {
    params?: any;
    setPageData?: any;
  }) => {
    getRaws({
      url,
      setList: setRaws,
      defaultList: defaultRaws || [],
      params,
      setPageData,
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
