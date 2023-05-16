import React from 'react';

import AddTemplate from 'components/Dashboard/Template/Add';

import { typeFieldList } from 'data/dashboard';
import { newsTypeValidationSchema } from 'data/validationSchema';

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
        validationSchema={newsTypeValidationSchema}
      />
    </>
  );
};

export default Add;
