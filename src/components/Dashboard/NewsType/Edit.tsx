import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { TypeItem, ItemTypes } from 'types/utils';

import { typeFieldList } from 'data/dashboard';
import { newsTypeValidationSchema } from 'data/validationSchema';
import { newsTypeList } from 'data/news';
import { NEWS_TYPE_API_URL, NEWS_TYPE_PATH } from 'data/api';
import useDashboard from 'hooks/page/useDashboard';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<TypeItem>({
    id: 0,
    title: '',
  });

  const { newsTypeId } = useParams();
  const { loading, getDetail, handleEdit, handleDelete } = useDashboard();

  const ID = newsTypeId ?? '';
  const URL = NEWS_TYPE_API_URL;
  const REDIRECT_PATH = NEWS_TYPE_PATH;

  useEffect(() => {
    getDetail({
      id: ID,
      url: URL,
      setData: setInitialValues,
      redirectPath: REDIRECT_PATH,
    });
  }, []);

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

  return (
    <>
      <EditTemplate
        initialValues={initialValues}
        validationSchema={newsTypeValidationSchema}
        fieldList={typeFieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
        loading={loading}
      />
    </>
  );
};

export default Edit;
