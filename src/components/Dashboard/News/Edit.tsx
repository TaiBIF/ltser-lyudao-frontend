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
  const [detail, setDetail] = useState<NewsFormItem>({
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
  const { loading, getList, getDetail, handleEdit, handleDelete } =
    useDashboard();

  const isFetchingTypeList = typeList.length === 0;

  const ID = newsId ?? '';
  const URL = NEWS_API_URL;
  const REDIRECT_PATH = NEWS_PATH;
  const isFetchingDetail = detail.title === '';

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

  useEffect(() => {
    getDetail({
      id: ID,
      url: URL,
      setData: setDetail,
      redirectPath: REDIRECT_PATH,
    });
    getList({
      url: NEWS_TYPE_API_URL,
      setList: setTypeList,
    });
  }, []);

  useEffect(() => {
    if (!isFetchingDetail) {
      const values = {
        ...detail,
        type: detail.type.map(String),
      };
      setInitialValues({ ...values });
    }
  }, [detail]);

  const handleEditSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    const isObjectOrEmpty = (key: string) => {
      return typeof values[key][0] === 'object' || values[key].length === 0;
    };
    const { user_email, attachments, ...rest } = values;
    const data: any = {
      ...rest,
      type: values.type.map(Number),
      images: isObjectOrEmpty('images') ? undefined : values.images,
      files: isObjectOrEmpty('attachments') ? undefined : values.files,
    };
    handleEdit({
      values: data,
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
        loading={loading}
      />
    </>
  );
};

export default Edit;
