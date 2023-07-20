import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';
import { FormLinkFormItem } from 'types/formLink';

import { formLinkList } from 'data/formLink';
import { formLinkFieldList } from 'data/dashboard';
import { formLinkValidationSchema } from 'data/validationSchema';
import { FORM_LINK_API_URL, FORM_LINK_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<FormLinkFormItem>({
    id: 0,
    title: '',
    files: [],
    created_at: '',
  });
  const { formLinkId } = useParams();
  const { getDetail, handleEdit, handleDelete } = useDashboard();

  const ID = formLinkId ?? '';
  const URL = FORM_LINK_API_URL;
  const REDIRECT_PATH = FORM_LINK_PATH;

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
  }, []);

  return (
    <>
      <EditTemplate
        initialValues={initialValues}
        validationSchema={formLinkValidationSchema}
        fieldList={formLinkFieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
