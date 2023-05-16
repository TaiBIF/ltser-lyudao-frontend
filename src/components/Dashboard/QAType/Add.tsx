import React from 'react';

import AddTemplate from 'components/Dashboard/Template/Add';

import { typeFieldList } from 'data/dashboard';
import { qaTypeValidationSchema } from 'data/validationSchema';

const Add = () => {
  const initialValues = {
    id: '',
    title: '',
  };
  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={typeFieldList}
        validationSchema={qaTypeValidationSchema}
      />
    </>
  );
};

export default Add;
