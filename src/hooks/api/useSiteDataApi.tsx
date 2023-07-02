import { useApi } from 'hooks/api/useApi';

import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';
import { SeriesItem } from 'types/series';

const useSiteDataApi = () => {
  const { loading, handleApi, handleActions } = useApi();

  const getData = async ({
    url,
    setList,
    defaultList,
  }: {
    url: string;
    setList: any;
    defaultList: RawItemTypes[];
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/data/${url}/`,
    });
    if (result?.status === 'success') {
      setList([...result.response.data]);
    } else {
      setList([...defaultList]);
    }
  };

  const getFields = async ({
    url,
    setList,
    defaultList,
  }: {
    url: string;
    setList: any;
    defaultList: RawFieldItem[];
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/data/${url}/fields/`,
    });
    if (result?.status === 'success') {
      setList([...result.response.data]);
    } else {
      setList([...defaultList]);
    }
  };

  const getSeries = async ({
    url,
    setList,
    defaultList,
  }: {
    url: string;
    setList: any;
    defaultList: SeriesItem[];
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/data/${url}/series/`,
    });
    if (result?.status === 'success') {
      setList([...result.response.data]);
    } else {
      setList([...defaultList]);
    }
  };

  return { getData, getFields, getSeries };
};

export default useSiteDataApi;
