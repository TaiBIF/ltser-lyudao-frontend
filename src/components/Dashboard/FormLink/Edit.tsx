import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';
import { FormLinkItem } from 'types/formLink';

import { formLinkList } from 'data/formLink';
import { formLinkFieldList } from 'data/dashboard';
import { formLinkValidationSchema } from 'data/validationSchema';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<FormLinkItem>({
    id: 0,
    name: '',
    attachments: '',
    created: '',
    modified: '',
  });
  const { formLinkId } = useParams();
  const [formLinkItem, setFormLinkItem] = useState<FormLinkItem>({
    id: 0,
    name: '',
    attachments: '',
    created: '',
    modified: '',
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
        param={formLinkId}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        validationSchema={formLinkValidationSchema}
        fieldList={formLinkFieldList}
        targetItem={formLinkItem}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
