import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { FieldItem, ItemTypes, TypeItem } from 'types/utils';
import { NewsFormItem, NewsItem } from 'types/news';

import { newsEditFieldList } from 'data/dashboard';
import { newsValidationSchema } from 'data/validationSchema';
import { NEWS_API_URL, NEWS_PATH, NEWS_TYPE_API_URL } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<NewsFormItem>({
    type: [],
    title: '',
    content: ``,
    user: 1,
    cover: '',
    newsDate: '',
    images: [],
    files: [],
  });
  const [typeList, setTypeList] = useState<TypeItem[]>([]);
  const [fieldList, setFieldList] = useState<FieldItem[]>([]);

  const { newsId } = useParams();
  const { getList, getDetail, handleEdit, handleDelete } = useDashboard();

  const isFetchingTypeList = typeList.length === 0;

  const ID = newsId ?? '';
  const URL = NEWS_API_URL;
  const REDIRECT_PATH = NEWS_PATH;
  const isFetchingDetail = initialValues.title === '';

  useEffect(() => {
    if (!isFetchingTypeList) {
      const typeFieldList = newsEditFieldList.map((v) => {
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

  const handleInitialValue = async () => {
    await getDetail({
      id: ID,
      url: URL,
      setData: setInitialValues,
      redirectPath: REDIRECT_PATH,
    });
    const values = {
      ...initialValues,
      type: initialValues.type.map(Number),
    };
    setInitialValues({ ...values });
  };

  useEffect(() => {
    handleInitialValue();
    getList({
      url: NEWS_TYPE_API_URL,
      setList: setTypeList,
    });
  }, []);

  const handleEditSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    values = {
      ...values,
      type: values.type.map(Number),
    };
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
        fieldList={fieldList}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
