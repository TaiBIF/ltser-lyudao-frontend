import React, { useState, useEffect } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ColItem, FieldItem, ItemTypes, TypeItem } from 'types/utils';
import { QAItem } from 'types/qa';

import { qaColList, qaFieldList } from 'data/dashboard';
import { qaValidationSchema } from 'data/validationSchema';

import useDashboard from 'hooks/useDashboard';
import {
  QA_DASHBOARD_API_URL,
  QA_DASHBOARD_PATH,
  QA_TYPE_DASHBOARD_API_URL,
} from 'data/api';

const Add = () => {
  const initialValues: QAItem = {
    id: 0,
    type: 0,
    question: '',
    answer: '',
  };
  const { handleAdd, handleRelate } = useDashboard();
  const [fieldList, setFieldList] = useState<FieldItem[]>([]);

  const handleAddSubmit = async (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: QA_DASHBOARD_API_URL,
      redirectPath: QA_DASHBOARD_PATH,
    });
    setSubmitting(false);
  };

  useEffect(() => {
    handleRelate({
      url: QA_TYPE_DASHBOARD_API_URL,
      prevList: qaFieldList,
      setList: setFieldList,
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
