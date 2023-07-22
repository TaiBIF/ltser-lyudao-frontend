import React, { useState, useEffect } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { FieldItem, ItemTypes, TypeItem } from 'types/utils';
import { NewsFormItem, NewsItem } from 'types/news';

import { newsAddFieldList } from 'data/dashboard';
import { newsValidationSchema } from 'data/validationSchema';
import { NEWS_API_URL, NEWS_PATH, NEWS_TYPE_API_URL } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Add = () => {
  const initialValues: NewsFormItem = {
    type: [],
    title: '',
    content: ``,
    cover: '',
    user: 1,
    newsDate: '',
    images: [],
    files: [],
  };
  const [typeList, setTypeList] = useState<TypeItem[]>([]);
  const [fieldList, setFieldList] = useState<FieldItem[]>([]);

  const { getList, handleAdd } = useDashboard();

  const isFetchingTypeList = typeList.length === 0;

  useEffect(() => {
    getList({
      url: NEWS_TYPE_API_URL,
      setList: setTypeList,
    });
  }, []);

  useEffect(() => {
    if (!isFetchingTypeList) {
      const typeFieldList = newsAddFieldList.map((v) => {
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

  const handleAddSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleAdd({
      values,
      url: NEWS_API_URL,
      redirectPath: NEWS_PATH,
      placeholder: true,
    });
    setSubmitting(false);
  };

  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={fieldList}
        validationSchema={newsValidationSchema}
        handleSubmit={handleAddSubmit}
      />
    </>
  );
};

export default Add;
