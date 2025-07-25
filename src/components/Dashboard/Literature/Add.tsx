import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { ItemTypes } from 'types/utils';
import { LiteratureItem } from 'types/literature';

import { literatureFieldList } from 'data/dashboard';
import { literatureValidationSchema } from 'data/validationSchema';
import { LITERATURE_API_URL, LITERATURE_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Add = () => {
  const initialValues: LiteratureItem = {
    name: '',
    title: '',
    year: '',
    author: '',
    unit: '',
    url: '',
    category: '',
  };
  const { loading, handleAdd } = useDashboard();

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: LITERATURE_API_URL,
      redirectPath: LITERATURE_PATH,
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
        loading={loading}
      />
    </>
  );
};

export default Add;
