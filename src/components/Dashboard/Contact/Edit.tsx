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
  const { loading, getApiData, handleActions } = useApi();

  const getContactList = async () => {
    // setContactItem({
    //   type: 'executor',
    //   name: '楊松穎',
    //   unit: '嘉義大學',
    //   content: '水生生物科學系 助理教授',
    //   contact: 'syyang@mail.ncyu.edu.tw',
    //   image: '/media/images/contact2.jpeg',
    // });
    const result = await getApiData({
      method: 'get',
      url: '/users/contacts/',
      params: {
        id: contactId,
      },
    });
    if (result?.status === 'success') {
      setInitialValues({ ...result.response.data });
    } else {
      handleActions({
        result: result?.response,
        error: {
          title: '發生錯誤，id不存在',
        },
        action: {
          type: 'redirect',
          path: '/dashboard/contact',
        },
      });
    }
  };

  const handleEditSubmit = async (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    const data = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === 'image' && typeof value === 'string') {
        return;
      }
      data.append(key, value);
    });
    const result = await getApiData({
      method: 'patch',
      data: data,
      params: {
        id: contactId,
      },
      url: '/users/contacts/',
    });
    handleActions({
      result: result?.response,
      success: {
        title: '更新成功',
      },
      error: {
        title: '發生錯誤，更新失敗',
      },
      action: {
        type: 'redirect',
        path: '/dashboard/contact',
      },
    });
    setSubmitting(false);
  };

  const handleDeleteClick = async () => {
    const result = await getApiData({
      method: 'delete',
      params: {
        id: contactId,
      },
      url: '/users/contacts/',
    });
    handleActions({
      result: result?.response,
      success: {
        title: '刪除成功',
      },
      error: {
        title: '發生錯誤，刪除失敗',
      },
      action: {
        type: 'redirect',
        path: '/dashboard/contact',
      },
    });
  };

  useEffect(() => {
    getContactList();
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
