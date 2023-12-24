import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';

import { socialInterviewDataFieldList } from 'data/dashboard';
import { socialInterviewDataSchema } from 'data/validationSchema';
import {
  SOCIAL_INTERVIEW_DATA_API_URL,
  SOCIAL_INTERVIEW_DATA_PATH,
} from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Add = () => {
  const initialValues: any = {};
  const { loading, handleAdd } = useDashboard();

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: SOCIAL_INTERVIEW_DATA_API_URL,
      redirectPath: SOCIAL_INTERVIEW_DATA_PATH,
    });
    setSubmitting(false);
  };

  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={socialInterviewDataFieldList}
        validationSchema={socialInterviewDataSchema}
        handleSubmit={handleAddSubmit}
        loading={loading}
      />
    </>
  );
};

export default Add;
