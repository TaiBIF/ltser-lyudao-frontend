import React from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';
import { FormLinkFormItem } from 'types/formLink';

import { formLinkAddFieldList } from 'data/dashboard';
import { formLinkValidationSchema } from 'data/validationSchema';
import useDashboard from 'hooks/page/useDashboard';
import { FORM_LINK_API_URL, FORM_LINK_PATH } from 'data/api';

const Add = () => {
  const initialValues: FormLinkFormItem = {
    name: '',
    link: '',
    files: [],
  };

  const { loading, handleAdd } = useDashboard();

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: FORM_LINK_API_URL,
      redirectPath: FORM_LINK_PATH,
      placeholder: true,
    });
    setSubmitting(false);
  };

  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={formLinkAddFieldList}
        validationSchema={formLinkValidationSchema}
        handleSubmit={handleAddSubmit}
        loading={loading}
      />
    </>
  );
};

export default Add;
