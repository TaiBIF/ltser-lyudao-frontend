import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';
import { ContactItem } from 'types/contact';

import { contactList } from 'data/contact';
import { contactEditFieldList } from 'data/dashboard';
import { contactValidationSchema } from 'data/validationSchema';

import { useApi } from 'hooks/useApi';

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
  const [result, loading, getApiData, handleActions] = useApi();
  const [contactItem, setContactItem] = useState<ContactItem>({
    id: 0,
    type: 0,
    name: '',
    unit: '',
    content: '',
    contact: '',
    image: '',
  });

  const getContactList = async () => {
    const result = await getApiData({
      method: 'get',
      url: '/users/contacts/',
      params: {
        id: contactId,
      },
    });
    // setContactItem({
    //   id: 1,
    //   type: 'leader',
    //   name: '陳昭倫',
    //   unit: '中央研究院',
    //   content: '生物多樣性研究中心 研究員',
    //   contact: 'cacgate.sinica.edu.tw',
    //   image: '/media/images/contact1.jpeg',
    // });
    if (result) {
      setContactItem({ ...result });
    }
  };

  const handleEditSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    getApiData({
      method: 'patch',
      data: values,
      params: {
        id: contactId,
      },
      url: '/users/contacts/',
    });
    setSubmitting(false);
  };

  const handleDeleteClick = () => {
    getApiData({
      method: 'delete',
      params: {
        id: contactId,
      },
      url: '/users/contacts/',
    });
  };

  useEffect(() => {
    if (result) {
      handleActions({
        result: result,
        success: {
          title: result.data.message,
        },
        error: {
          title: result.data.message,
        },
      });
    }
  }, [result]);

  useEffect(() => {
    getContactList();
  }, []);

  return (
    <>
      <EditTemplate
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        validationSchema={contactValidationSchema}
        fieldList={contactEditFieldList}
        targetItem={contactItem}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
