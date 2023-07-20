import React from 'react';

import { Dictionary } from 'lodash';

import { useApi } from 'hooks/api/useApi';
import { ItemTypes } from 'types/utils';

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
    defaultList: ItemTypes[];
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
      setList([...defaultList]);
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

  return { getList, getDepositarList };
};

export default useRender;
