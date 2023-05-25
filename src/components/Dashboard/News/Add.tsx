import React from 'react';

import AddTemplate from 'components/Dashboard/Template/Add';

import { newsFieldList } from 'data/dashboard';
import { newsValidationSchema } from 'data/validationSchema';
import { NewsItem } from 'types/dashboard';

const Add = () => {
  const initialValues: NewsItem = {
    type: [],
    title: '',
    content: ``,
    image: [],
    attachments: [],
    date: '',
    cover: '',
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
