import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { TypeItem, ItemTypes } from 'types/utils';

import { typeFieldList } from 'data/dashboard';
import { qaTypeList } from 'data/qa';
import { qaTypeValidationSchema } from 'data/validationSchema';

import useDashboard from 'hooks/page/useDashboard';
import { QA_TYPE_API_URL, QA_TYPE_PATH } from 'data/api';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<TypeItem>({
    id: 0,
    title: '',
  });
  const { qaTypeId } = useParams();
  const { getDetail, handleEdit, handleDelete } = useDashboard();

  const ID = qaTypeId ?? '';
  const URL = QA_TYPE_API_URL;
  const REDIRECT_PATH = QA_TYPE_PATH;

  const handleEditSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleEdit({
      values,
      id: ID,
      url: URL,
      redirectPath: REDIRECT_PATH,
    });
    setSubmitting(false);
  };

  const handleDeleteClick = () => {
    handleDelete({
      id: ID,
      url: URL,
      redirectPath: REDIRECT_PATH,
    });
  };

  useEffect(() => {
    getDetail({
      id: ID,
      url: URL,
      setData: setInitialValues,
      redirectPath: REDIRECT_PATH,
    });
  }, []);

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
