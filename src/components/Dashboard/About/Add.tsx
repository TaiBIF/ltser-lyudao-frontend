import React from 'react';

import AddTemplate from 'components/Dashboard/Template/Add';

import { aboutFieldList } from 'data/dashboard';
import { aboutValidationSchema } from 'data/validationSchema';
import { AboutItem } from 'types/about';

const Add = () => {
  const initialValues: AboutItem = {
    type: 0,
    name: '',
    content: '',
    image: '',
  };
  return (
    <>
      <AddTemplate
        initialValues={initialValues}
        fieldList={aboutFieldList}
        validationSchema={aboutValidationSchema}
      />
    </>
  );
};

export default Add;
