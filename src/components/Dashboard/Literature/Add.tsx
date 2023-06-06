import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';
import { LiteratureItem } from 'types/literature';

import { literatureFieldList } from 'data/dashboard';
import { literatureValidationSchema } from 'data/validationSchema';

import useDashboard from 'hooks/useDashboard';

const Add = () => {
  const initialValues: LiteratureItem = {
    name: '',
  };
  const { handleAdd } = useDashboard();

  const handleAddSubmit = async (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: 'literatures',
      redirectPath: 'related-literature',
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
