import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import EditTemplate from 'components/Dashboard/Template/Edit';
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
