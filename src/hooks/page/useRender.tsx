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

  return { getList, getDetail, getDepositarList };
};

export default useRender;
