import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import EditTemplate from 'components/Dashboard/Template/Edit';
import { QAItem } from 'types/dashboard';
import { qaFieldList, qaList } from 'data/dashboard';
import { qaValidationSchema } from 'data/validationSchema';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<QAItem>({
    id: 0,
    type: 0,
    question: '',
    answer: '',
  });
  const { qaId } = useParams();

  return (
    <>
      <EditTemplate
        param={qaId}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        validationSchema={qaValidationSchema}
        fieldList={qaFieldList}
        targetList={qaList}
      />
    </>
  );
};

export default Edit;
