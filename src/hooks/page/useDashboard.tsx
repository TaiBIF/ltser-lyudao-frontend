import { useApi } from 'hooks/api/useApi';

import { ItemTypes, RelateListTypes } from 'types/utils';

import placeholderImg from 'image/peoib-img.png';

const useDashboard = () => {
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
    redirectPath,
  }: {
    id: number | string;
    url: string;
    setData: any;
    redirectPath: string;
  }) => {
    const result = await handleApi({
      method: 'get',
      url: `/users/${url}/`,
      params: { id },
    });
    if (result?.status === 'success') {
      setData({ ...result.response.data });
    } else {
      handleActions({
        result,
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
      if (key === 'files' || key === 'attachments' || key === 'images') {
        value.forEach((v: any) => {
          data.append(key, v);
        });
      } else {
        data.append(key, value);
      }
    });
    const result = await handleApi({
      method: 'post',
      data,
      url: `/users/${url}/`,
    });
    handleActions({
      result,
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
      if (value !== null) {
        if ((key === 'image' || key === 'cover') && typeof value === 'string') {
          return;
        }
        if (key === 'files' || key === 'attachments' || key === 'images') {
          value.forEach((v: any) => {
            data.append(key, v);
          });
        } else {
          data.append(key, value);
        }
      }
    });
    const result = await handleApi({
      method: 'patch',
      url: `/users/${url}/`,
      data,
      params: { id },
    });
    handleActions({
      result,
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
    const result = await handleApi({
      method: 'delete',
      url: `/users/${url}/`,
      params: { id },
    });
    handleActions({
      result,
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
    const result = await handleApi({
      method: 'get',
      url: `/users/${url}/`,
    });
    const relate = result?.response.data.records;
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
