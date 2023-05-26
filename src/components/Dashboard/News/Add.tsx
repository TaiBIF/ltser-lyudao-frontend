import React from 'react';

import AddTemplate from 'components/Dashboard/Template/Add';

import { newsFieldList } from 'data/dashboard';
import { newsValidationSchema } from 'data/validationSchema';
import { NewsItem } from 'types/news';

const Add = () => {
  const initialValues: NewsItem = {
    type: 0,
    title: '',
    content: ``,
    image: [],
    attachments: [],
    modified: '',
  };

  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={newsFieldList}
        validationSchema={newsValidationSchema}
      />
    </>
  );
};

export default Add;
