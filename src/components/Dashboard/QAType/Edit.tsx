import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { TypeItem } from 'types/common';

import { typeFieldList, qaTypeList } from 'data/dashboard';
import { qaTypeValidationSchema } from 'data/validationSchema';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<TypeItem>({
    id: 0,
    title: '',
  });
  const { qaTypeId } = useParams();

  return (
    <>
      <EditTemplate
        param={qaTypeId}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        validationSchema={qaTypeValidationSchema}
        fieldList={typeFieldList}
        targetList={qaTypeList}
      />
    </>
  );
};

export default Edit;
