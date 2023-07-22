import React from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { TypeItem, ItemTypes } from 'types/utils';

import { typeFieldList } from 'data/dashboard';
import { newsTypeValidationSchema } from 'data/validationSchema';

import useDashboard from 'hooks/page/useDashboard';
import { NEWS_TYPE_API_URL, NEWS_TYPE_PATH } from 'data/api';

const Add = () => {
  const initialValues: TypeItem = {
    id: 0,
    title: '',
  };
  const { handleAdd } = useDashboard();

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: NEWS_TYPE_API_URL,
      redirectPath: NEWS_TYPE_PATH,
    });
    setSubmitting(false);
  };

  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={typeFieldList}
        validationSchema={newsTypeValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
