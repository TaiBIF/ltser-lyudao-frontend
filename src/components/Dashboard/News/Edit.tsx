import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';
import { NewsItem } from 'types/news';

import { newsFieldList } from 'data/dashboard';
import { newsValidationSchema } from 'data/validationSchema';
import { newsList } from 'data/news';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<NewsItem>({
    id: 0,
    type: 0,
    userId: '',
    title: '',
    content: ``,
    image: [],
    attachments: [],
    created: '',
    modified: '',
  });
  const { newsId } = useParams();
  const [newsItem, setNewsItem] = useState<NewsItem>({
    id: 0,
    type: 0,
    userId: '',
    title: '',
    content: ``,
    image: [],
    attachments: [],
    created: '',
    modified: '',
  });

  const handleEditSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  const handleDeleteClick = () => {};

  return (
    <>
      <EditTemplate
        param={newsId}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        validationSchema={newsValidationSchema}
        fieldList={newsFieldList}
        targetItem={newsItem}
        handleSubmit={handleEditSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default Edit;
