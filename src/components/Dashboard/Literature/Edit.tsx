import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';
import { LiteratureItem } from 'types/literature';

import { literatureFieldList } from 'data/dashboard';
import { literatureValidationSchema } from 'data/validationSchema';
import { literatureList } from 'data/literature';

import useDashboard from 'hooks/useDashboard';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<LiteratureItem>({
    id: 0,
    name: '',
  });
  const { literatureId } = useParams();
  const { getDetail, handleEdit, handleDelete } = useDashboard();

  const ID = literatureId ?? '';
  const URL = 'literatures';
  const REDIRECT_PATH = 'related-literature';

  const handleEditSubmit = async (
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

  const handleDeleteClick = async () => {
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
        validationSchema={literatureValidationSchema}
        fieldList={literatureFieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
