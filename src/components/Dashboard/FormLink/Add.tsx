import React from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';
import { FormLinkItem } from 'types/formLink';

import { formLinkFieldList } from 'data/dashboard';
import { formLinkValidationSchema } from 'data/validationSchema';

const Add = () => {
  const initialValues: FormLinkItem = {
    name: '',
    attachments: '',
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
        fieldList={formLinkFieldList}
        validationSchema={formLinkValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
