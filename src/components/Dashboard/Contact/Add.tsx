import React from 'react';

import AddTemplate from 'components/Dashboard/Template/Add';

import { contactAddFieldList } from 'data/dashboard';
import { contactValidationSchema } from 'data/validationSchema';
import { ContactItem } from 'types/contact';

const Add = () => {
  const initialValues: ContactItem = {
    type: 0,
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
