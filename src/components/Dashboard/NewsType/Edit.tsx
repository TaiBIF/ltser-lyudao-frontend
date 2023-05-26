import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { TypeItem } from 'types/common';

import { typeFieldList } from 'data/dashboard';
import { newsTypeValidationSchema } from 'data/validationSchema';
import { newsTypeList } from 'data/news';

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
        validationSchema={newsTypeValidationSchema}
        fieldList={typeFieldList}
        targetList={newsTypeList}
      />
    </>
  );
};

export default Edit;
