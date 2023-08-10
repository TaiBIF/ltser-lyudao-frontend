import React, { useEffect, useRef } from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikConfig,
  FormikHelpers,
} from 'formik';

import ActionBtn from 'components/Header/LoginPopup/ActionBtn';
import Spinner from 'components/Spinner';

import { FieldItem } from 'types/utils';

import { loginValidationSchema } from 'data/validationSchema';

import { useAuthContext } from 'context/AuthContext';
import { useHeaderContext } from 'context/HeaderContext';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
    // rememberMe: false,
  };

  const { loading, handleLogin, handleGoogleSignIn } = useAuthContext();
  const { setShow } = useHeaderContext();
  const googleSignInRef = useRef(null);

  const handleGoogleResponse = (response: { credential: any }) => {
    console.log(response);
    handleGoogleSignIn({ code: response.credential, setShow });
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        '293650145366-i0mnv9rn0jqptkvtrr677dh9cb6nhttp.apps.googleusercontent.com',
      callback: handleGoogleResponse,
    });
    if (googleSignInRef.current) {
      google.accounts.id.renderButton(googleSignInRef.current, {
        theme: 'outline',
        size: 'large',
        type: 'standard',
      });
    }
  }, []);

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
  };

  return (
    <>
      {/* 登入 */}
      <div className="login-set">
        <div className="titlebox">會員登入</div>
        <Formik {...formikConfig}>
          {({ isSubmitting }) => (
            <Form>
              <div className="input-item">
                <Field
                  type="text"
                  name="email"
                  placeholder="請輸入您的帳號(email)"
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
              {/* <div className="check-area">
              <label className="check-item">
                記住我的帳號
                <Field type="checkbox" name="rememberMe" />
                <span className="checkmark" />
              </label>
            </div> */}
              <div className="btn-area">
                <button type="submit" className="login" disabled={isSubmitting}>
                  {!loading ? '登入' : <Spinner />}
                </button>
                <div ref={googleSignInRef}>
                  <button className="logingoogle">使用GOOGLE登入</button>
                </div>
              </div>
              <div className="btn-area2">
                <ActionBtn type="signup" loading={loading} />
                <ActionBtn type="forgotPsw" loading={loading} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
