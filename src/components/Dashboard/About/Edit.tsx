import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';
import { AboutItem } from 'types/about';

import { aboutFieldList } from 'data/dashboard';
import { aboutValidationSchema } from 'data/validationSchema';
import { ABOUT_API_URL, ABOUT_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<AboutItem>({
    id: 0,
    type: '',
    name: '',
    content: '',
    image: '',
  });
  const { aboutId } = useParams();
  const { getDetail, handleEdit, handleDelete } = useDashboard();

  const ID = aboutId ?? '';
  const URL = ABOUT_API_URL;
  const REDIRECT_PATH = ABOUT_PATH;

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
        validationSchema={aboutValidationSchema}
        fieldList={aboutFieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
