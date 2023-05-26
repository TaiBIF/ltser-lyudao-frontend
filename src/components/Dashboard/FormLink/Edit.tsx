import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import EditTemplate from 'components/Dashboard/Template/Edit';
import { FormLinkItem } from 'types/formLink';
import { formLinkList } from 'data/formLink';
import { formLinkFieldList } from 'data/dashboard';
import { formLinkValidationSchema } from 'data/validationSchema';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<FormLinkItem>({
    id: 0,
    name: '',
    attachments: '',
    created: '',
    modified: '',
  });
  const { formLinkId } = useParams();

  return (
    <>
      <EditTemplate
        param={formLinkId}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        validationSchema={formLinkValidationSchema}
        fieldList={formLinkFieldList}
        targetList={formLinkList}
      />
    </>
  );
};

export default Edit;
