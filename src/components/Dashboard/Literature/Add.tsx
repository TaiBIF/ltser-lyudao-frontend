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
  const [result, loading, getApiData, handleActions] = useApi();

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    getApiData({
      method: 'post',
      data: values,
      url: '/users/literatures/',
    });
    setSubmitting(false);
  };

  useEffect(() => {
    if (result) {
      handleActions({
        result: result,
        success: {
          title: result.data.message,
        },
        error: {
          title: result.data.message,
        },
      });
    }
  }, [result]);

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
