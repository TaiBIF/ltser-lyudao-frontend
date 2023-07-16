import { TimeRangeItem } from 'types/home';
import { DetailItemTypes } from 'types/detail';

import { surveyMapItemList } from 'data/home/content';

import { useApi } from 'hooks/api/useApi';

const useSurveyMapApi = () => {
  const { loading, handleApi, handleActions } = useApi();

  const getSites = async ({
    url,
    setList,
    defaultList,
  }: {
    url: string;
    setList: any;
    defaultList: string[];
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/data/${url}/sites/`,
    });
    if (result?.status === 'success') {
      setList([...result.response.data.sites]);
    } else {
      setList([...defaultList]);
    }
  };

  const getAllTimeRange = async ({
    url,
    setList,
  }: {
    id?: string;
    url: string;
    setList: any;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/data/${url}/time-range/`,
    });
    if (result?.status === 'success') {
      setList([...result.response.data]);
    }
  };

  const getTimeRange = async ({
    id,
    url,
    setData,
    defaultData,
  }: {
    id: string;
    url: string;
    setData: any;
    defaultData: any;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/data/${url}/time-range/`,
      params: { locationID: id },
    });
    if (result?.status === 'success') {
      setData({ ...result.response.data });
    } else {
      setData({ ...defaultData });
    }
  };

  const getDetail = async ({
    id,
    year,
    url,
    setData,
    defaultData,
  }: {
    id: string;
    year: string;
    url: string;
    setData: any;
    defaultData: any;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/data/${url}/detail/`,
      params: { locationID: id, year },
    });
    if (result?.status === 'success') {
      setData({ ...result.response.data });
    } else {
      setData({ ...defaultData });
    }
  };

  const getItems = async ({
    id,
    setList,
  }: {
    id: string;
    url: string;
    setList: any;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/data/items/`,
      params: { locationID: id },
    });
    if (result?.status === 'success') {
      setList([...result.response.data.items]);
    } else {
      setList([...surveyMapItemList]);
    }
  };

  return { getSites, getAllTimeRange, getTimeRange, getDetail, getItems };
};

export default useSurveyMapApi;
