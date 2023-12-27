import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Form,
  Formik,
  FormikConfig,
  FormikHelpers,
  useFormikContext,
} from 'formik';

import EditTemplate from 'components/Dashboard/Template/Edit';

import { ItemTypes } from 'types/utils';
import { UserItem } from 'types/user';

import { userValidationSchema } from 'data/validationSchema';

import useDashboard from 'hooks/page/useDashboard';
import FieldsLayout from './FieldsLayout';
import { useAuthContext } from 'context/AuthContext';

const Edit = () => {
  const [initialValues, setInitialValues] = useState<UserItem>({
    first_name: '',
    last_name: '',
    role: '',
    email: '',
  });
  const { handleEditInfo } = useDashboard();
  const [shouldRerender, setShouldRerender] = useState<boolean>(false);
  const { getMemberInfo } = useAuthContext();

  const handleSubmit = (
    values: ItemTypes,
    { setSubmitting }: FormikHelpers<ItemTypes>
  ) => {
    handleEditInfo({
      data: values,
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setShouldRerender(true);
  };

  useEffect(() => {
    getMemberInfo();
  }, [shouldRerender]);

  const formikConfig: FormikConfig<ItemTypes> = {
    initialValues,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validationSchema: userValidationSchema,
  };

  return (
    <>
      <Formik {...formikConfig}>
        {() => {
          return (
            <Form className="d-flex flex-column justify-content-between h-100">
              <FieldsLayout
                shouldRerender={shouldRerender}
                setShouldRerender={setShouldRerender}
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Edit;
