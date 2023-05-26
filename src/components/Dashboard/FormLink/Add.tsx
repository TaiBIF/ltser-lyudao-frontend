import React from 'react';

import AddTemplate from 'components/Dashboard/Template/Add';

import { formLinkFieldList } from 'data/dashboard';
import { formLinkValidationSchema } from 'data/validationSchema';
import { FormLinkItem } from 'types/formLink';

const Add = () => {
  const initialValues: FormLinkItem = {
    name: '',
    attachments: '',
  };
  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={formLinkFieldList}
        validationSchema={formLinkValidationSchema}
      />
    </>
  );
};

export default Add;
