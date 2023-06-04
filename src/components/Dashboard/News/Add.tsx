import React from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';
import { NewsItem } from 'types/news';

import { newsFieldList } from 'data/dashboard';
import { newsValidationSchema } from 'data/validationSchema';

const Add = () => {
  const initialValues: NewsItem = {
    type: 0,
    title: '',
    content: ``,
    image: [],
    attachments: [],
    modified: '',
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
        fieldList={newsFieldList}
        validationSchema={newsValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
