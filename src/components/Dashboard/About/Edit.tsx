import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';
import { AboutItem } from 'types/about';

import { aboutList } from 'data/about';
import { aboutFieldList } from 'data/dashboard';
import { aboutValidationSchema } from 'data/validationSchema';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<AboutItem>({
    id: 0,
    type: 0,
    name: '',
    content: '',
    image: '',
  });
  const { contactId } = useParams();
  const [aboutItem, setAboutItem] = useState<AboutItem>({
    id: 0,
    type: 0,
    name: '',
    content: '',
    image: '',
  });

  const handleEditSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  const handleDeleteClick = () => {};

  return (
    <>
      <EditTemplate
        initialValues={initialValues}
        validationSchema={aboutValidationSchema}
        fieldList={aboutFieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
