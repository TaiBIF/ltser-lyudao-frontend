import React from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';
import { AboutItem } from 'types/about';

import { aboutFieldList } from 'data/dashboard';
import { aboutValidationSchema } from 'data/validationSchema';

const Add = () => {
  const initialValues: AboutItem = {
    type: 0,
    name: '',
    content: '',
    image: '',
    attachmentName: [],
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
        fieldList={aboutFieldList}
        validationSchema={aboutValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
