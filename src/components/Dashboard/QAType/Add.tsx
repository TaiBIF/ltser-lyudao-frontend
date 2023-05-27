import React from 'react';

import AddTemplate from 'components/Dashboard/Template/Add';

import { TypeItem } from 'types/utils';

import { typeFieldList } from 'data/dashboard';
import { qaTypeValidationSchema } from 'data/validationSchema';

const Add = () => {
  const initialValues: TypeItem = {
    id: 0,
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
