import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { literatureFieldList } from 'data/dashboard';
import { literatureValidationSchema } from 'data/validationSchema';
import { LiteratureItem } from 'types/literature';
import { literatureList } from 'data/literature';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<LiteratureItem>({
    id: 0,
    name: '',
  });
  const { contactId } = useParams();

  return (
    <>
      <EditTemplate
        param={contactId}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        validationSchema={literatureValidationSchema}
        fieldList={literatureFieldList}
        targetList={literatureList}
      />
    </>
  );
};

export default Edit;
