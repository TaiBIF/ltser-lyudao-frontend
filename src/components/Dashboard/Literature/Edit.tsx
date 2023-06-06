import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';
import { LiteratureItem } from 'types/literature';

import { literatureFieldList } from 'data/dashboard';
import { literatureValidationSchema } from 'data/validationSchema';
import { literatureList } from 'data/literature';

import { useApi } from 'hooks/useApi';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<LiteratureItem>({
    id: 0,
    name: '',
  });
  const { literatureId } = useParams();
  const { loading, getApiData, handleActions } = useApi();
  const [literatureItem, setLiteratureItem] = useState<LiteratureItem>({
    id: 0,
    name: '',
  });

  const getLiteratureList = async () => {
    const result = await getApiData({
      method: 'get',
      url: '/users/literatures/',
      params: {
        id: literatureId,
      },
    });
    if (result?.status === 'success') {
      setLiteratureItem({ ...result.response.data });
    } else {
      handleActions({
        result: result?.response,
        error: {
          title: '發生錯誤，id不存在',
        },
        action: {
          type: 'redirect',
          path: '/dashboard/related-literature',
        },
      });
    }
  };

  const handleEditSubmit = async (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    const data = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === 'image' && typeof value === 'string') {
        return;
      }
      data.append(key, value);
    });
    const result = await getApiData({
      method: 'patch',
      data: data,
      params: {
        id: literatureId,
      },
      url: '/users/literatures/',
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
        path: '/dashboard/related-literature',
      },
    });
    setSubmitting(false);
  };

  const handleDeleteClick = async () => {
    const result = await getApiData({
      method: 'delete',
      params: {
        id: literatureId,
      },
      url: '/users/literatures/',
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
        path: '/dashboard/related-literature',
      },
    });
  };

  useEffect(() => {
    getLiteratureList();
  }, []);

  return (
    <>
      <EditTemplate
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        validationSchema={literatureValidationSchema}
        fieldList={literatureFieldList}
        targetItem={literatureItem}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
