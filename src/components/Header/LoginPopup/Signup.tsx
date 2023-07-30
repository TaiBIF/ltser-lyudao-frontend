import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikConfig,
  FormikHelpers,
} from 'formik';

import ActionBtn from 'components/Header/LoginPopup/ActionBtn';

import { useAuthContext } from 'context/AuthContext';

import { signupValidationSchema } from 'data/validationSchema';

const Signup = () => {
  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  };

  const { handleSignup } = useAuthContext();

  const handleSubmit = (
    values: Record<string, any>,
    { setSubmitting }: FormikHelpers<Record<string, any>>
  ) => {
    handleSignup(values);
    setSubmitting(false);
  };

  const formikConfig: FormikConfig<Record<string, any>> = {
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: signupValidationSchema,
  };
  return (
    <>
      {/*註冊*/}
      <div className="register-set">
        <div className="titlebox">會員註冊</div>
        <Formik {...formikConfig}>
          {({ isSubmitting }) => (
            <Form>
              <div className="input-item">
                <Field type="text" name="last_name" placeholder="姓" />
                <ErrorMessage
                  name="lastName"
                  component="small"
                  className="text-danger"
                />
              </div>
              <div className="input-item">
                <Field type="text" name="first_name" placeholder="名" />
                <ErrorMessage
                  name="firstName"
                  component="small"
                  className="text-danger"
                />
              </div>
              <div className="input-item">
                <Field
                  type="email"
                  name="email"
                  placeholder="請輸入您的Email作為帳號"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-danger"
                />
              </div>
              <div className="input-item">
                <Field
                  type="password"
                  name="password"
                  placeholder="請輸入您的密碼"
                />
                <ErrorMessage
                  name="password"
                  component="small"
                  className="text-danger"
                />
              </div>
              <div className="input-item">
                <Field
                  type="password"
                  name="password2"
                  placeholder="請再次輸入密碼"
                />
                <ErrorMessage
                  name="password2"
                  component="small"
                  className="text-danger"
                />
              </div>
              <div className="btn-area">
                <button type="submit" className="login" disabled={isSubmitting}>
                  註冊
                </button>
              </div>
              <div className="btn-area2">
                <ActionBtn type="login" />
                <div className="link">
                  <span className="col-red">*註冊即同意</span>{' '}
                  <a href="/">使用者條款</a>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Signup;
