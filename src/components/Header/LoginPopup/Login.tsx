import React, { useEffect, useRef } from 'react';
import { Formik, Form, FormikConfig, FormikHelpers } from 'formik';

import { useTranslation } from 'react-i18next';

import ActionBtn from 'components/Header/LoginPopup/ActionBtn';

import { loginValidationSchema } from 'data/validationSchema';

import { useAuthContext } from 'context/AuthContext';
import { useHeaderContext } from 'context/HeaderContext';
import LoginFieldLayout from './LoginFieldLayout';

const Login = ({ I18N_KEY_PREFIX }: { I18N_KEY_PREFIX: string }) => {
  const PREFIX = 'Login';
  const { t } = useTranslation();

  const hasRememberMe = localStorage.getItem('rememberMe');
  const initialValues = {
    email: hasRememberMe ? hasRememberMe : '',
    password: '',
    rememberMe: hasRememberMe ? true : false,
  };

  const { loading, handleLogin } = useAuthContext();
  const { setShow } = useHeaderContext();

  const handleSubmit = (
    values: Record<string, any>,
    { setSubmitting }: FormikHelpers<Record<string, any>>
  ) => {
    handleLogin({ values, setShow });
    setSubmitting(false);
  };

  const formikConfig: FormikConfig<Record<string, any>> = {
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: loginValidationSchema,
    enableReinitialize: true,
  };

  return (
    <>
      {/* 登入 */}
      <div className="login-set">
        <div className="titlebox">
          {t(`${I18N_KEY_PREFIX}.${PREFIX}.loginBtn`)}
        </div>
        <Formik {...formikConfig}>
          {({ isSubmitting }) => (
            <Form>
              <LoginFieldLayout
                isSubmitting={isSubmitting}
                loading={loading}
                I18N_KEY_PREFIX={I18N_KEY_PREFIX}
              />
              <div className="btn-area2">
                <ActionBtn
                  type="signup"
                  loading={loading}
                  I18N_KEY_PREFIX={I18N_KEY_PREFIX}
                />
                <ActionBtn
                  type="forgotPsw"
                  loading={loading}
                  I18N_KEY_PREFIX={I18N_KEY_PREFIX}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
