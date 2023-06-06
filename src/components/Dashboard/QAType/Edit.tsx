import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { TypeItem, ItemTypes } from 'types/utils';

import { typeFieldList, qaTypeList } from 'data/dashboard';
import { qaTypeValidationSchema } from 'data/validationSchema';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<TypeItem>({
    id: 0,
    title: '',
  });
  const { qaTypeId } = useParams();
  const [qaTypeItem, setQaTypeItem] = useState<TypeItem>({
    id: 0,
    title: '',
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
        validationSchema={qaTypeValidationSchema}
        fieldList={typeFieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
