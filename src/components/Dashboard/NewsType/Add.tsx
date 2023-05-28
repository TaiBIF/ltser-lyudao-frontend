import React from 'react';

import AddTemplate from 'components/Dashboard/Template/Add';

import { TypeItem } from 'types/utils';

import { typeFieldList } from 'data/dashboard';
import { newsTypeValidationSchema } from 'data/validationSchema';

const Add = () => {
  const initialValues: TypeItem = {
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
