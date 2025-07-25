import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { QAItem } from 'types/qa';
import { ItemTypes, FieldItem } from 'types/utils';

import { qaFieldList } from 'data/dashboard';
import { qaList } from 'data/qa';
import { qaValidationSchema } from 'data/validationSchema';
import { QA_API_URL, QA_PATH, QA_TYPE_API_URL } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<QAItem>({
    id: 0,
    type_id: 0,
    question: '',
    answer: '',
  });
  const [fieldList, setFieldList] = useState<FieldItem[]>([]);
  const { qaId } = useParams();
  const { loading, getDetail, handleEdit, handleDelete, handleRelate } =
    useDashboard();

  const ID = qaId ?? '';
  const URL = QA_API_URL;
  const REDIRECT_PATH = QA_PATH;

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
    handleRelate({
      key: 'title',
      value: 'type_id',
      url: QA_TYPE_API_URL,
      prevList: qaFieldList,
      setList: setFieldList,
      relateKey: 'options',
    });
  }, []);
  return (
    <>
      <EditTemplate
        initialValues={initialValues}
        validationSchema={qaValidationSchema}
        fieldList={fieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
        loading={loading}
      />
    </>
  );
};

export default Edit;
