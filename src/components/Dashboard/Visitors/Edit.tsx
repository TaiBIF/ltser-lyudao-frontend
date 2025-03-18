import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';
import { VisitorItem } from 'types/visitors';

import { visitorFieldList } from 'data/dashboard';
import { visitorValidationSchema } from 'data/validationSchema';
import { VISITORS_API_URL, VISITORS_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<VisitorItem>({
    id: 0,
    year: '',
    visitors: '',
  });
  const { visitorId } = useParams();
  const { loading, getDetail, handleEdit, handleDelete } = useDashboard();

  const ID = visitorId ?? '';
  const URL = VISITORS_API_URL;
  const REDIRECT_PATH = VISITORS_PATH;

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
        validationSchema={visitorValidationSchema}
        fieldList={visitorFieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
        loading={loading}
      />
    </>
  );
};

export default Edit;
