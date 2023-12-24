import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';

import { socialInterviewDataFieldList } from 'data/dashboard';
import { socialInterviewDataSchema } from 'data/validationSchema';
import {
  SOCIAL_INTERVIEW_DATA_API_URL,
  SOCIAL_INTERVIEW_DATA_PATH,
} from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<any>({
    id: 0,
  });
  const { id } = useParams();
  const { loading, getDetail, handleEdit, handleDelete } = useDashboard();

  const ID = id ?? '';
  const URL = SOCIAL_INTERVIEW_DATA_API_URL;
  const REDIRECT_PATH = SOCIAL_INTERVIEW_DATA_PATH;

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
        validationSchema={socialInterviewDataSchema}
        fieldList={socialInterviewDataFieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
        loading={loading}
      />
    </>
  );
};

export default Edit;
