import { useApi } from 'hooks/useApi';
import { TimeRangeItem, DataItem } from 'types/home';

const useSurveyMap = () => {
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
      url: `/${url}/`,
    });
    if (result?.status === 'success') {
      setList([...result.response.data.sites]);
    } else {
      setList([...defaultList]);
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
    defaultData: TimeRangeItem;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/${url}/`,
      params: { locationID: id },
    });
    if (result?.status === 'success') {
      setData({ ...result.response.data });
    } else {
      setData({ ...defaultData });
    }
  };

  const getData = async ({
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
    defaultData: DataItem;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/${url}/`,
      params: { locationID: id, year },
    });
    if (result?.status === 'success') {
      setData({ ...result.response.data });
    } else {
      setData({ ...defaultData });
    }
  };

  return { getSites, getTimeRange, getData };
};

export default useSurveyMap;
