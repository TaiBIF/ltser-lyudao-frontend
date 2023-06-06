import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ContactItem } from 'types/contact';
import { ItemTypes } from 'types/utils';

import { contactAddFieldList } from 'data/dashboard';
import { contactValidationSchema } from 'data/validationSchema';

import { useApi } from 'hooks/useApi';

const Add = () => {
  const initialValues: ContactItem = {
    type: '',
    name: '',
    unit: '',
    content: '',
    contact: '',
    image: '',
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
      url: '/users/contacts/',
    });
    handleActions({
      result: result,
      success: {
        title: '新增成功',
      },
      error: {
        title: '發生錯誤，新增失敗',
      },
      action: {
        type: 'redirect',
        path: '/dashboard/contact',
      },
    });
    setSubmitting(false);
  };

  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={contactAddFieldList}
        validationSchema={contactValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
