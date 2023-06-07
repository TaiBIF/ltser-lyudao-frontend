import React, { useState, useEffect } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { FieldItem, ItemTypes } from 'types/utils';
import { QAItem } from 'types/qa';

import { qaFieldList } from 'data/dashboard';
import { qaValidationSchema } from 'data/validationSchema';
import { QA_API_URL, QA_PATH, QA_TYPE_API_URL } from 'data/api';

import useDashboard from 'hooks/useDashboard';

const Add = () => {
  const initialValues: QAItem = {
    id: 0,
    type_id: 0,
    question: '',
    answer: '',
  };
  const { handleAdd, handleRelate } = useDashboard();
  const [fieldList, setFieldList] = useState<FieldItem[]>([]);

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: QA_API_URL,
      redirectPath: QA_PATH,
    });
    setSubmitting(false);
  };

  useEffect(() => {
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
      <AddTemplate
        initialValues={initialValues}
        fieldList={fieldList}
        validationSchema={qaValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
