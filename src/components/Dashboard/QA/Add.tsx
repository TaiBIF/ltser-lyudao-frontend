import React from 'react';

import AddTemplate from 'components/Dashboard/Template/Add';

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
