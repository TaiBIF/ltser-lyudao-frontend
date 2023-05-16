import React from 'react';

import AddTemplate from 'components/Dashboard/Template/Add';

import { contactAddFieldList } from 'data/dashboard';
import { contactValidationSchema } from 'data/validationSchema';

const Add = () => {
  const initialValues = {
    type: '',
    name: '',
    unit: '',
    content: '',
    contact: '',
    image: '',
  };
  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={contactAddFieldList}
        validationSchema={contactValidationSchema}
      />
    </>
  );
};

export default Add;
