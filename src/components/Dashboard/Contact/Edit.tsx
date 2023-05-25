import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as Yup from 'yup';

import EditTemplate from 'components/Dashboard/Template/Edit';
import { ContactItem } from 'types/contact';
import { contactList } from 'data/contact';
import { contactEditFieldList } from 'data/dashboard';
import { contactValidationSchema } from 'data/validationSchema';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<ContactItem>({
    id: '',
    type: '',
    name: '',
    unit: '',
    content: '',
    contact: '',
    image: '',
  });
  const { contactId } = useParams();

  return (
    <>
      <EditTemplate
        param={contactId}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        validationSchema={contactValidationSchema}
        fieldList={contactEditFieldList}
        targetList={contactList}
      />
    </>
  );
};

export default Edit;
