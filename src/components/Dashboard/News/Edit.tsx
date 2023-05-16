import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import EditTemplate from 'components/Dashboard/Template/Edit';
import { NewsItem } from 'types/dashboard';
import { newsFieldList, newsList } from 'data/dashboard';
import { newsValidationSchema } from 'data/validationSchema';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<NewsItem>({
    id: '',
    type: [],
    userId: '',
    title: '',
    content: ``,
    image: [],
    attachments: [],
    date: '',
    cover: '',
  });
  const { newsId } = useParams();

  return (
    <>
      <EditTemplate
        param={newsId}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        validationSchema={newsValidationSchema}
        fieldList={newsFieldList}
        targetList={newsList}
      />
    </>
  );
};

export default Edit;
