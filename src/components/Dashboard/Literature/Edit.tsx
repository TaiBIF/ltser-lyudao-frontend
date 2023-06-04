import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';
import { LiteratureItem } from 'types/literature';

import { literatureFieldList } from 'data/dashboard';
import { literatureValidationSchema } from 'data/validationSchema';
import { literatureList } from 'data/literature';

import { useApi } from 'hooks/useApi';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<LiteratureItem>({
    id: 0,
    name: '',
  });
  const { literatureId } = useParams();
  const [result, loading, getApiData, handleActions] = useApi();
  const [literatureItem, setLiteratureItem] = useState<LiteratureItem>({
    id: 0,
    name: '',
  });

  const getLiteratureList = async () => {
    const result = await getApiData({
      method: 'get',
      url: '/users/literatures/',
      params: {
        id: literatureId,
      },
    });
    // setLiteratureItem({
    //   id: 2,
    //   name: 'Kilkeary, R. (1975). The energy crisis and decision-making in the family. National Technical Information Service.',
    //   created_at: '2023-06-04',
    //   updated_at: '2023-06-04',
    // });
    if (result) {
      setLiteratureItem({ ...result });
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
        id: literatureId,
      },
      url: '/users/literatures/',
    });
    setSubmitting(false);
  };

  const handleDeleteClick = () => {
    getApiData({
      method: 'delete',
      params: {
        id: literatureId,
      },
      url: '/users/literatures/',
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
    getLiteratureList();
  }, []);

  return (
    <>
      <EditTemplate
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        validationSchema={literatureValidationSchema}
        fieldList={literatureFieldList}
        targetItem={literatureItem}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
