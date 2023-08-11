import React from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';
import { AboutItem } from 'types/about';

import { aboutAddFieldList } from 'data/dashboard';
import { aboutValidationSchema } from 'data/validationSchema';
import useDashboard from 'hooks/page/useDashboard';
import { ABOUT_API_URL, ABOUT_PATH } from 'data/api';

const Add = () => {
  const initialValues: AboutItem = {
    type: 0,
    name: '',
    content: '',
    image: '',
  };

  const { loading, handleAdd } = useDashboard();

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: ABOUT_API_URL,
      redirectPath: ABOUT_PATH,
      placeholder: true,
    });
    setSubmitting(false);
  };
  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={aboutAddFieldList}
        validationSchema={aboutValidationSchema}
        handleSubmit={handleAddSubmit}
        loading={loading}
      />
    </>
  );
};

export default Add;
