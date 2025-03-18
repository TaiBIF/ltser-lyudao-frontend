import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';
import { VisitorItem } from 'types/visitors';

import { visitorFieldList } from 'data/dashboard';
import { visitorValidationSchema } from 'data/validationSchema';
import { VISITORS_API_URL, VISITORS_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Add = () => {
  const initialValues: VisitorItem = {
    year: '',
    visitors: '',
  };
  const { loading, handleAdd } = useDashboard();

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: VISITORS_API_URL,
      redirectPath: VISITORS_PATH,
    });
    setSubmitting(false);
  };

  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={visitorFieldList}
        validationSchema={visitorValidationSchema}
        handleSubmit={handleAddSubmit}
        loading={loading}
      />
    </>
  );
};

export default Add;
