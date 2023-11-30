import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';
import { UserItem } from 'types/user';

import { userFieldList } from 'data/dashboard';
import { userValidationSchema } from 'data/validationSchema';
import { USER_API_URL, USER_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<UserItem>({
    id: 0,
    name: '',
    role: '',
    email: '',
  });
  const { userId } = useParams();
  const { loading, getDetail, handleEdit, handleDelete } = useDashboard();

  const ID = userId ?? '';
  const URL = USER_API_URL;
  const REDIRECT_PATH = USER_PATH;

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
        validationSchema={userValidationSchema}
        fieldList={userFieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
        loading={loading}
      />
    </>
  );
};

export default Edit;
