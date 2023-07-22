import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { FieldItem, ItemTypes, TypeItem } from 'types/utils';
import { NewsItem } from 'types/news';

import { newsFieldList } from 'data/dashboard';
import { newsValidationSchema } from 'data/validationSchema';
import { NEWS_API_URL, NEWS_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<NewsItem>({
    type: [],
    title: '',
    content: ``,
    newsDate: '',
    user: 0,
    images: [],
    attachments: [],
  });
  const [typeList, setTypeList] = useState<TypeItem[]>([]);
  const [fieldList, setFieldList] = useState<FieldItem[]>([]);

  const { newsId } = useParams();
  const { getList, getDetail, handleEdit, handleDelete } = useDashboard();

  const isFetchingTypeList = typeList.length === 0;

  const ID = newsId ?? '';
  const URL = NEWS_API_URL;
  const REDIRECT_PATH = NEWS_PATH;

  useEffect(() => {
    getList({
      url: URL,
      setTypes: setTypeList,
    });
  }, []);

  useEffect(() => {
    if (!isFetchingTypeList) {
      const typeFieldList = newsFieldList.map((v) => {
        if (v.title === 'type') {
          return {
            ...v,
            options: typeList,
          };
        }
        return v;
      });
      setFieldList([...typeFieldList]);
    }
  }, [typeList]);

  useEffect(() => {
    getDetail({
      id: ID,
      url: URL,
      setData: setInitialValues,
      redirectPath: REDIRECT_PATH,
    });
  }, []);

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

  return (
    <>
      <EditTemplate
        initialValues={initialValues}
        validationSchema={newsValidationSchema}
        fieldList={newsFieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
