import React from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';

import { qaFieldList } from 'data/dashboard';
import { qaValidationSchema } from 'data/validationSchema';

import { QAItem } from 'types/dashboard';

const Add = () => {
  const initialValues: QAItem = {
    id: 0,
    type: 0,
    question: '',
    answer: '',
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
        fieldList={qaFieldList}
        validationSchema={qaValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
