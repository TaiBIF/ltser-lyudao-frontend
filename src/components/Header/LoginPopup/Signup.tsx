import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikConfig,
  FormikHelpers,
} from 'formik';
import { useTranslation } from 'react-i18next';

import ActionBtn from 'components/Header/LoginPopup/ActionBtn';
import Spinner from 'components/Spinner';

import { useAuthContext } from 'context/AuthContext';

import { signupValidationSchema } from 'data/validationSchema';
import { useHeaderContext } from 'context/HeaderContext';

const Signup = ({ I18N_KEY_PREFIX }: { I18N_KEY_PREFIX: string }) => {
  const PREFIX = 'Signup';
  const { t } = useTranslation();

  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  };

  const { loading, handleSignup } = useAuthContext();
  const { setShow } = useHeaderContext();

  const handleSubmit = (
    values: Record<string, any>,
    { setSubmitting }: FormikHelpers<Record<string, any>>
  ) => {
    handleSignup({ values, setShow });
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
        <div className="titlebox">
          {t(`${I18N_KEY_PREFIX}.${PREFIX}.title`)}
        </div>
        <Formik {...formikConfig}>
          {({ isSubmitting }) => (
            <Form>
              <div className="input-item">
                <Field
                  type="text"
                  name="last_name"
                  placeholder={t(`${I18N_KEY_PREFIX}.${PREFIX}.lastNameText`)}
                />
                <ErrorMessage
                  name="lastName"
                  component="small"
                  className="text-danger"
                />
              </div>
              <div className="input-item">
                <Field
                  type="text"
                  name="first_name"
                  placeholder={t(`${I18N_KEY_PREFIX}.${PREFIX}.firstNameText`)}
                />
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
                  placeholder={t(`${I18N_KEY_PREFIX}.emailText`)}
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
                  placeholder={t(`${I18N_KEY_PREFIX}.passwordText`)}
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
                  placeholder={t(`${I18N_KEY_PREFIX}.${PREFIX}.password2Text`)}
                />
                <ErrorMessage
                  name="password2"
                  component="small"
                  className="text-danger"
                />
              </div>
              <div className="btn-area">
                <button type="submit" className="login" disabled={isSubmitting}>
                  {!loading ? (
                    t(`${I18N_KEY_PREFIX}.${PREFIX}.signupBtn`)
                  ) : (
                    <Spinner />
                  )}
                </button>
              </div>
              <div className="btn-area2">
                <ActionBtn
                  type="login"
                  loading={loading}
                  I18N_KEY_PREFIX={I18N_KEY_PREFIX}
                />
                <div className="link">
                  <span className="col-red">
                    *{t(`${I18N_KEY_PREFIX}.${PREFIX}.hintText`)}
                  </span>{' '}
                  <a href="/">
                    {t(`${I18N_KEY_PREFIX}.${PREFIX}.hintTermLink`)}
                  </a>
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
