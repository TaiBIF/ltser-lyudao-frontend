import React from 'react';
import { useApi } from 'hooks/useApi';
import { ItemTypes } from 'types/utils';

const useRender = () => {
  const { loading, getApiData, handleActions } = useApi();

  const getList = async ({
    url,
    setList,
    defaultList,
  }: {
    url: string;
    setList: any;
    defaultList: ItemTypes[];
  }) => {
    const result = await getApiData({
      method: 'get',
      url: `/users/${url}/`,
    });
    if (result?.status === 'success') {
      setList([...result.response.data]);
    } else {
      setList([...defaultList]);
    }
  };
  return { getList };
};

export default useRender;
