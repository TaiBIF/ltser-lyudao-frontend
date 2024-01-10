import React from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { TypeItem, ItemTypes } from 'types/utils';

import { qaTypeFieldList } from 'data/dashboard';
import { qaTypeValidationSchema } from 'data/validationSchema';

import useDashboard from 'hooks/page/useDashboard';
import { QA_TYPE_API_URL, QA_TYPE_PATH } from 'data/api';

const Add = () => {
  const initialValues: TypeItem = {
    id: 0,
    title: '',
  };
  const { loading, handleAdd } = useDashboard();

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: QA_TYPE_API_URL,
      redirectPath: QA_TYPE_PATH,
    });
    setSubmitting(false);
  };

  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={qaTypeFieldList}
        validationSchema={qaTypeValidationSchema}
        handleSubmit={handleAddSubmit}
        loading={loading}
      />
    </>
  );
};

export default Add;
