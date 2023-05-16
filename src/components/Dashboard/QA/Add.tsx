import React from 'react';

import AddTemplate from 'components/Dashboard/Template/Add';

import { qaFieldList } from 'data/dashboard';
import { qaValidationSchema } from 'data/validationSchema';

const Add = () => {
  const initialValues = {
    id: '',
    type: '',
    question: '',
    answer: '',
  };
  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={qaFieldList}
        validationSchema={qaValidationSchema}
      />
    </>
  );
};

export default Add;
