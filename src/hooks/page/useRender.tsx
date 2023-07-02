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
  }: {
    url: string;
    setList: any;
    defaultList: ItemTypes[];
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/users/${url}/`,
    });
    if (result?.status === 'success') {
      setList([...result.response.data]);
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
