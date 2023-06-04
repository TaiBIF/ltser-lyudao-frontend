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
    type: 0,
    name: '',
    unit: '',
    content: '',
    contact: '',
    image: '',
  };
  const [result, loading, getApiData, handleActions] = useApi();

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    getApiData({
      method: 'post',
      data: values,
      url: '/users/contacts/',
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
        fieldList={contactAddFieldList}
        validationSchema={contactValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
