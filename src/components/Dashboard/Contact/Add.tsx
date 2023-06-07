import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ContactItem } from 'types/contact';
import { ItemTypes } from 'types/utils';

import { contactAddFieldList } from 'data/dashboard';
import { contactValidationSchema } from 'data/validationSchema';
import { CONTACT_DASHBOARD_API_URL, CONTACT_DASHBOARD_PATH } from 'data/api';

import useDashboard from 'hooks/useDashboard';

const Add = () => {
  const initialValues: ContactItem = {
    type: '',
    name: '',
    unit: '',
    content: '',
    contact: '',
    image: '',
  };
  const { handleAdd } = useDashboard();

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: CONTACT_DASHBOARD_API_URL,
      redirectPath: CONTACT_DASHBOARD_PATH,
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
      />
    </>
  );
};

export default Add;
