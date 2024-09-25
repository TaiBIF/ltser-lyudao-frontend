import { Dispatch, SetStateAction } from 'react';

import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';

import useSiteDataApi from 'hooks/api/useSiteDataApi';
import { SeriesItemTypes } from 'types/series';
import { PaginationDataItem } from 'types/utils';

interface useSiteDataProps {
  id: string;
  depth?: string;
  url: string;
  defaultRaws?: RawItemTypes[];
  defaultFields?: RawFieldItem[];
  defaultSeries?: SeriesItemTypes[];
  setRaws?: Dispatch<SetStateAction<RawItemTypes[] | null>>;
  setFields?: Dispatch<SetStateAction<RawFieldItem[]>>;
  setSeries?: Dispatch<SetStateAction<SeriesItemTypes[] | null>>;
  setPageData?: Dispatch<SetStateAction<PaginationDataItem[]>>;
}

const useSiteData = (props: useSiteDataProps) => {
  const {
    id,
    depth,
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
    setPaginationData,
  }: {
    params?: any;
    setPaginationData?: any;
  }) => {
    getRaws({
      url,
      setList: setRaws,
      defaultList: defaultRaws || [],
      params,
      setPaginationData,
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
      depth,
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
