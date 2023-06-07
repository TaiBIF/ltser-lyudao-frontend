import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';
import { LiteratureItem } from 'types/literature';

import { literatureFieldList } from 'data/dashboard';
import { literatureValidationSchema } from 'data/validationSchema';
import {
  LITERATURE_DASHBOARD_API_URL,
  LITERATURE_DASHBOARD_PATH,
} from 'data/api';

import useDashboard from 'hooks/useDashboard';

const Add = () => {
  const initialValues: LiteratureItem = {
    name: '',
  };
  const { handleAdd } = useDashboard();

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: LITERATURE_DASHBOARD_API_URL,
      redirectPath: LITERATURE_DASHBOARD_PATH,
    });
    setSubmitting(false);
  };

  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={literatureFieldList}
        validationSchema={literatureValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
