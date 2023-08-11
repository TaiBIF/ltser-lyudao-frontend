import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ContactItem } from 'types/contact';
import { ItemTypes } from 'types/utils';

import { contactAddFieldList } from 'data/dashboard';
import { contactValidationSchema } from 'data/validationSchema';
import { CONTACT_API_URL, CONTACT_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Add = () => {
  const initialValues: ContactItem = {
    type: 0,
    name: '',
    unit: '',
    content: '',
    contact: '',
    image: '',
  };
  const { loading, handleAdd } = useDashboard();

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: CONTACT_API_URL,
      redirectPath: CONTACT_PATH,
      placeholder: true,
    });
    setSubmitting(false);
  };

  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={contactAddFieldList}
        validationSchema={contactValidationSchema}
        handleSubmit={handleAddSubmit}
        loading={loading}
      />
    </>
  );
};

export default Add;
