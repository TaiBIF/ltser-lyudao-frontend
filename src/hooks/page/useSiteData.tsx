import { Dispatch, SetStateAction } from 'react';

import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';

import useSiteDataApi from 'hooks/api/useSiteDataApi';
import { SeriesItemTypes } from 'types/series';
import { PaginationDataItem } from 'types/utils';

interface useSiteDataProps {
  id: string;
  depth?: string;
  year?: string;
  type?: string;
  url: string;
  defaultRaws?: RawItemTypes[];
  defaultFields?: RawFieldItem[];
  defaultSeries?: SeriesItemTypes[];
  setRaws?: Dispatch<SetStateAction<RawItemTypes[] | null>>;
  setFields?: Dispatch<SetStateAction<RawFieldItem[]>>;
  setSeries?: Dispatch<SetStateAction<SeriesItemTypes[] | null>>;
  setPageData?: Dispatch<SetStateAction<PaginationDataItem[]>>;
  setRoseSeries?: Dispatch<SetStateAction<any[]>>;
  setTempPrecipSeries?: Dispatch<SetStateAction<any[]>>;
  setRecords?: Dispatch<SetStateAction<any>>;
}

const useSiteData = (props: useSiteDataProps) => {
  const {
    id,
    depth,
    year,
    type,
    url,
    defaultRaws,
    defaultFields,
    defaultSeries,
    setRaws,
    setFields,
    setSeries,
    setRoseSeries,
    setTempPrecipSeries,
    setRecords,
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
      year,
      type,
      url,
      setList: setSeries,
      defaultList: defaultSeries || [],
      setRoseSeries,
      setTempPrecipSeries,
      setRecords,
    });
  };

  return {
    getDataRaws,
    getDataFields,
    getDataSeries,
  };
};

export default useSiteData;
