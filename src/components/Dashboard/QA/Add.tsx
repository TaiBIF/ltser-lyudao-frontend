import React from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';
import { QAItem } from 'types/qa';

import { qaFieldList } from 'data/dashboard';
import { qaValidationSchema } from 'data/validationSchema';

import useDashboard from 'hooks/useDashboard';
import { QA_DASHBOARD_API_URL, QA_DASHBOARD_PATH } from 'data/api';

const Add = () => {
  const initialValues: QAItem = {
    id: 0,
    type: 0,
    question: '',
    answer: '',
  };
  const { handleAdd } = useDashboard();

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

  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={qaFieldList}
        validationSchema={qaValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
