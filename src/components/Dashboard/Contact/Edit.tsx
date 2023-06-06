import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';
import { ContactItem } from 'types/contact';

import { contactList } from 'data/contact';
import { contactEditFieldList } from 'data/dashboard';
import { contactValidationSchema } from 'data/validationSchema';

import useDashboard from 'hooks/useDashboard';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<ContactItem>({
    id: 0,
    type: 0,
    name: '',
    unit: '',
    content: '',
    contact: '',
    image: '',
  });
  const { contactId } = useParams();
  const { getDetail, handleEdit, handleDelete } = useDashboard();

  const ID = contactId ?? '';
  const URL = 'contacts';
  const REDIRECT_PATH = 'conatct';

  const handleEditSubmit = async (
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

  const handleDeleteClick = async () => {
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
        validationSchema={contactValidationSchema}
        fieldList={contactEditFieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
