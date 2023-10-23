import { TimeRangeItem } from 'types/home';
import { DetailItemTypes } from 'types/detail';

import { generateSurveyMapItemList } from 'data/home/content';

import { useApi } from 'hooks/api/useApi';

const useSurveyMapApi = () => {
  const { loading, handleApi, handleActions } = useApi();

  const surveyMapItemList = generateSurveyMapItemList();

  const getSites = async ({
    url,
    setList,
    defaultList,
    filter,
    setFilter,
  }: {
    url: string;
    setList: any;
    defaultList: string[];
    filter: any;
    setFilter?: any;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/data/${url}/sites/`,
    });
    if (result?.status === 'success') {
      setList([...result.response.data.sites]);
    } else {
      if (defaultList) {
        setList([...defaultList]);
      } else {
        setList([]);
      }
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

  const getAllDetail = async ({
    id,
    year,
    setData,
    defaultData,
  }: {
    id: string;
    year: string;
    setData: any;
    defaultData?: any;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/data/all/detail/`,
      params: { locationID: id, year },
    });
    if (result?.status === 'success') {
      setData({ ...result.response.data });
    } else {
      if (defaultData) {
        setData({ ...defaultData });
      }
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

  return {
    getSites,
    getTimeRange,
    getDetail,
    getAllDetail,
    getItems,
  };
};

export default useSurveyMapApi;
