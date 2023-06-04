import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { QAItem } from 'types/dashboard';
import { ItemTypes } from 'types/utils';

import { qaFieldList, qaList } from 'data/dashboard';
import { qaValidationSchema } from 'data/validationSchema';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<QAItem>({
    id: 0,
    type: 0,
    question: '',
    answer: '',
  });
  const { qaId } = useParams();
  const [qaItem, setQaItem] = useState<QAItem>({
    id: 0,
    type: 0,
    question: '',
    answer: '',
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
        param={qaId}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        validationSchema={qaValidationSchema}
        fieldList={qaFieldList}
        targetItem={qaItem}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
