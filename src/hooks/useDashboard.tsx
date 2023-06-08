import { useApi } from 'hooks/useApi';

import { ItemTypes, RelateListTypes } from 'types/utils';

import placeholderImg from 'image/peoib-img.png';

const useDashboard = () => {
  const { loading, getApiData, handleActions } = useApi();

  const getList = async ({ url, setList }: { url: string; setList: any }) => {
    const result = await getApiData({
      method: 'get',
      url: `/users/${url}/`,
    });
    if (result?.status === 'success') {
      setList([...result.response.data]);
    } else {
      handleActions({
        result: result?.response,
        error: {
          title: '發生錯誤，列表讀取失敗',
        },
      });
    }
  };

  const getDetail = async ({
    id,
    url,
    setData,
    redirectPath,
  }: {
    id: number | string;
    url: string;
    setData: any;
    redirectPath: string;
  }) => {
    const result = await getApiData({
      method: 'get',
      url: `/users/${url}/`,
      params: { id },
    });
    if (result?.status === 'success') {
      setData({ ...result.response.data });
    } else {
      handleActions({
        result: result?.response,
        error: {
          title: '發生錯誤，id不存在',
        },
        action: {
          type: 'redirect',
          path: `/dashboard/${redirectPath}`,
        },
      });
    }
  };

  const handleAdd = async ({
    values,
    url,
    redirectPath,
    placeholder = false,
  }: {
    values: ItemTypes;
    url: string;
    redirectPath: string;
    placeholder?: boolean;
  }) => {
    const data = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      data.append(key, value);
    });
    const result = await getApiData({
      method: 'post',
      data,
      url: `/users/${url}/`,
    });
    handleActions({
      result: result?.response,
      success: {
        title: '新增成功',
      },
      error: {
        title: '發生錯誤，新增失敗',
      },
      action: {
        type: 'redirect',
        path: `/dashboard/${redirectPath}`,
      },
    });
  };

  const handleEdit = async ({
    values,
    id,
    url,
    redirectPath,
  }: {
    values: ItemTypes;
    id: number | string;
    url: string;
    redirectPath: string;
  }) => {
    const data = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === 'image' && typeof value === 'string') {
        return;
      }
      data.append(key, value);
    });
    const result = await getApiData({
      method: 'patch',
      url: `/users/${url}/`,
      data,
      params: { id },
    });
    handleActions({
      result: result?.response,
      success: {
        title: '更新成功',
      },
      error: {
        title: '發生錯誤，更新失敗',
      },
      action: {
        type: 'redirect',
        path: `/dashboard/${redirectPath}`,
      },
    });
  };

  const handleDelete = async ({
    id,
    url,
    redirectPath,
  }: {
    id: number | string;
    url: string;
    redirectPath: string;
  }) => {
    const result = await getApiData({
      method: 'delete',
      url: `/users/${url}/`,
      params: { id },
    });
    handleActions({
      result: result?.response,
      success: {
        title: '刪除成功',
      },
      error: {
        title: '發生錯誤，刪除失敗',
      },
      action: {
        type: 'redirect',
        path: `/dashboard/${redirectPath}`,
      },
    });
  };

  const handleRelate = async ({
    key,
    value,
    url,
    prevList,
    setList,
    relateKey,
  }: {
    key: string;
    value: string;
    url: string;
    prevList: RelateListTypes[];
    setList: any;
    relateKey: string;
  }) => {
    const result = await getApiData({
      method: 'get',
      url: `/users/${url}/`,
    });
    const relate = result?.response.data;
    const newList = prevList.map((v) =>
      v[key as keyof RelateListTypes] === value
        ? {
            ...v,
            [relateKey]: relate,
          }
        : v
    );
    setList([...newList]);
  };

  return {
    getList,
    getDetail,
    handleAdd,
    handleEdit,
    handleDelete,
    handleRelate,
  };
};

export default useDashboard;
