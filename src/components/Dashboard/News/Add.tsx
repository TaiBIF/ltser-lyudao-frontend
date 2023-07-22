import React, { useState, useEffect } from 'react';
import { FormikHelpers } from 'formik';

import AddTemplate from 'components/Dashboard/Template/Add';

import { FieldItem, ItemTypes, TypeItem } from 'types/utils';
import { NewsItem } from 'types/news';

import { newsFieldList } from 'data/dashboard';
import { newsValidationSchema } from 'data/validationSchema';
import { NEWS_API_URL, NEWS_PATH } from 'data/api';

import useDashboard from 'hooks/page/useDashboard';

const Add = () => {
  const initialValues: NewsItem = {
    type: [],
    title: '',
    content: ``,
    newsDate: '',
    user: 0,
    images: [],
    attachments: [],
  };
  const [typeList, setTypeList] = useState<TypeItem[]>([]);
  const [fieldList, setFieldList] = useState<FieldItem[]>([]);

  const { getList, handleAdd } = useDashboard();

  const isFetchingTypeList = typeList.length === 0;

  useEffect(() => {
    getList({
      url: NEWS_API_URL,
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
