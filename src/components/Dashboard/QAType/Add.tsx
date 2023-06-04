import React from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { TypeItem, ItemTypes } from 'types/utils';

import { typeFieldList } from 'data/dashboard';
import { qaTypeValidationSchema } from 'data/validationSchema';

const Add = () => {
  const initialValues: TypeItem = {
    id: 0,
    title: '',
  };

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={typeFieldList}
        validationSchema={qaTypeValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
