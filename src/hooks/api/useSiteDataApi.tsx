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
    const backendUrl =
      url === 'buoy-realtime' ? '/data/buoy-realtime/' : `/data/${url}/raws/`;
    const result = await handleApi({
      method: 'get',
      url: backendUrl,
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
    depth,
    year,
    type,
    url,
    setList,
    defaultList,
    setRoseSeries,
    setTempPrecipSeries,
    setRecords,
  }: {
    id: string;
    depth?: string;
    year?: string;
    type?: string;
    url: string;
    setList: any;
    defaultList: SeriesItemTypes[];
    setRoseSeries: any;
    setTempPrecipSeries: any;
    setRecords: any;
  }) => {
    if (url !== 'buoy-realtime') {
      const result = await handleApi({
        method: 'get',
        url: `/data/${url}/series/`,
        params: {
          locationID: id,
          depth: depth,
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
    }

    if (url === 'buoy-historical' || url === 'weather') {
      const chartResult = await handleApi({
        method: 'get',
        url: `/data/mixed-chart/`,
        params: {
          locationID: id,
          year: year,
          type: type,
          url: url,
        },
      });

      if (chartResult?.status === 'success') {
        setRoseSeries([...chartResult.response.data.rose_series]);
        setTempPrecipSeries([...chartResult.response.data.temp_precip_series]);
      }
    }

    if (url === 'buoy-realtime') {
      const realtimeResult = await handleApi({
        method: 'get',
        url: '/data/buoy-realtime/',
        params: {
          locationID: id,
        },
      });

      if (realtimeResult?.status === 'success') {
        setRecords(realtimeResult.response.data.all_records);
      }
    }
  };

  return { getRaws, getFields, getSeries };
};

export default useSiteDataApi;
