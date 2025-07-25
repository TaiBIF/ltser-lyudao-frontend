import React from 'react';

import { Dictionary } from 'lodash';

import { useApi } from 'hooks/api/useApi';
import { ItemTypes, TypeItem } from 'types/utils';

import { DEPOSITAR_API_URL } from 'utils/config';

const useRender = () => {
  const { loading, handleApi, handleActions } = useApi();

  const getList = async ({
    url,
    setList,
    defaultList,
    params,
    setPaginationData,
  }: {
    url: string;
    setList: any;
    defaultList?: ItemTypes[];
    params?: any;
    setPaginationData?: any;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/users/${url}/`,
      params,
    });
    if (result?.status === 'success') {
      setList([...result.response.data.records]);
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
      }
    }
  };

  const getAllList = async ({
    url,
    setList,
    defaultList,
    params,
  }: {
    url: string;
    setList: any;
    defaultList?: ItemTypes[];
    params?: any;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/users/${url}/`,
      params,
    });
    if (result?.status === 'success') {
      setList([...result.response.data]);
    } else {
      if (defaultList) {
        setList([...defaultList]);
      }
    }
  };

  const getDetail = async ({
    id,
    url,
    setData,
    defaultData,
    redirectPath,
  }: {
    id?: number | string;
    url: string;
    setData: any;
    defaultData?: any;
    redirectPath?: string;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/users/${url}/`,
      params: { id },
    });
    if (result?.status === 'success') {
      setData({ ...result.response.data });
    } else {
      if (defaultData) {
        setData({ ...defaultData });
      }
      handleActions({
        result,
        error: {
          title: '發生錯誤，id不存在',
        },
        action: {
          type: 'redirect',
          path: `/${redirectPath}`,
        },
      });
    }
  };

  const getHeaderDetail = async ({
    url,
    setData,
    defaultData,
  }: {
    url: string;
    setData: any;
    defaultData?: any;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/users/${url}/`,
    });
    if (result?.status === 'success') {
      setData({ ...result.response.data });
    } else {
      if (defaultData) {
        setData({ ...defaultData });
      }
    }
  };

  const getDepositarList = async ({
    setList,
    resouceId,
    defaultList,
  }: {
    setList: any;
    resouceId: string;
    defaultList: Dictionary<string | number>[];
  }) => {
    const result = await handleApi({
      method: 'get',
      url: DEPOSITAR_API_URL,
      params: {
        resouceId,
      },
    });
    if (result?.status === 'success') {
      setList([...result.response.result.records]);
    } else {
      setList([...defaultList]);
    }
  };

  const getSocialObservationContent = async ({
    url,
    setList,
  }: {
    url: string;
    setList: any;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `${url}`,
    });
    if (result?.status === 'success') {
      const data = result.response.data;

      if (Array.isArray(data)) {
        setList([...data]);
      } else {
        setList(data);
      }
    }
  };

  const getSocialEconomyContent = async (url: string) => {
    try {
      const result = await handleApi({ method: 'get', url });

      if (result?.status === 'success') {
        return result.response.data;
      } else {
        console.log(`Error fecthing data, got ${result?.status}`);
        return null;
      }
    } catch (error) {
      console.error(`Error fetching data, ${error}`);
      return null;
    }
  };

  return {
    getList,
    getAllList,
    getDetail,
    getHeaderDetail,
    getDepositarList,
    getSocialObservationContent,
    getSocialEconomyContent,
  };
};

export default useRender;
