import { useApi } from 'hooks/api/useApi';

import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';
import { SeriesItemTypes } from 'types/series';

const useSiteDataApi = () => {
  const { loading, handleApi, handleActions } = useApi();

  const getRaws = async ({
    url,
    setList,
    defaultList,
    params,
    setPaginationData,
  }: {
    url: string;
    setList: any;
    defaultList: RawItemTypes[];
    params: any;
    setPaginationData: any;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/data/${url}/raws/`,
      params,
    });
    if (result?.status === 'success') {
      setList(result.response.data.records);
      if (setPaginationData) {
        setPaginationData({
          ...Object.fromEntries(
            Object.entries(result.response.data).filter(
              ([key]) => key !== 'records'
            )
          ),
        });
      }
    } else {
      if (defaultList) {
        setList([...defaultList]);
      } else {
        setList([]);
      }
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
      if (defaultList) {
        setList([...defaultList]);
      } else {
        setList([]);
      }
    }
  };

  const getSeries = async ({
    id,
    url,
    setList,
    defaultList,
  }: {
    id: string;
    url: string;
    setList: any;
    defaultList: SeriesItemTypes[];
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/data/${url}/series/`,
      params: {
        locationID: id,
      },
    });
    if (result?.status === 'success') {
      setList([...result.response.data]);
    } else {
      if (defaultList) {
        setList([...defaultList]);
      } else {
        setList([]);
      }
    }
  };

  return { getRaws, getFields, getSeries };
};

export default useSiteDataApi;
