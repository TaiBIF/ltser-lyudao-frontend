import React from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';
import { AboutItem } from 'types/about';

import { aboutFieldList } from 'data/dashboard';
import { aboutValidationSchema } from 'data/validationSchema';
import useDashboard from 'hooks/page/useDashboard';
import { ABOUT_API_URL, ABOUT_PATH } from 'data/api';

const Add = () => {
  const initialValues: AboutItem = {
    type: '',
    name: '',
    content: '',
    image: '',
  };

  const { handleAdd } = useDashboard();

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
        fieldList={aboutFieldList}
        validationSchema={aboutValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
