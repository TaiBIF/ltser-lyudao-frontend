import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import EditTemplate from 'components/Dashboard/Template/Edit';
import { AboutItem } from 'types/about';
import { aboutList } from 'data/about';
import { aboutFieldList } from 'data/dashboard';
import { aboutValidationSchema } from 'data/validationSchema';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<AboutItem>({
    id: 0,
    type: 0,
    name: '',
    content: '',
    image: '',
  });
  const { contactId } = useParams();

  return (
    <>
      <EditTemplate
        param={contactId}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        validationSchema={aboutValidationSchema}
        fieldList={aboutFieldList}
        targetList={aboutList}
      />
    </>
  );
};

export default Edit;
