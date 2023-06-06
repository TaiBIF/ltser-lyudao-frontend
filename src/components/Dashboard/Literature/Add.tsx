import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';
import { LiteratureItem } from 'types/literature';

import { literatureFieldList } from 'data/dashboard';
import { literatureValidationSchema } from 'data/validationSchema';

import { useApi } from 'hooks/useApi';

const Add = () => {
  const initialValues: LiteratureItem = {
    name: '',
  };
  const { loading, getApiData, handleActions } = useApi();

  const handleAddSubmit = async (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    const data = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      data.append(key, value);
    });
    const result = await getApiData({
      method: 'post',
      data: data,
      url: '/users/literatures/',
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
        path: '/dashboard/related-literature',
      },
    });
    setSubmitting(false);
  };

  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={literatureFieldList}
        validationSchema={literatureValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
