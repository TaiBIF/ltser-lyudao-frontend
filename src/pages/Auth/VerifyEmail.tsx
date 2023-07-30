import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikConfig,
  FormikHelpers,
} from 'formik';

import Breadcrumb from 'components/Breadcrumb';

import { resendEmailValidationSchema } from 'data/validationSchema';

import { useAuthContext } from 'context/AuthContext';

const VerifyEmail = () => {
  const mail = localStorage.getItem('email');
  const initialValues = {
    email: mail ? mail : '',
  };
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  const { handleResendEmail, handleVerifyEmail } = useAuthContext();

  const handleSubmit = (
    values: Record<string, any>,
    { setSubmitting }: FormikHelpers<Record<string, any>>
  ) => {
    handleResendEmail(values);
    setSubmitting(false);
  };

  const formikConfig: FormikConfig<Record<string, any>> = {
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: resendEmailValidationSchema,
  };

  useEffect(() => {
    if (token) {
      handleVerifyEmail(token);
    }
  }, [token]);

  return (
    <>
      <div className="innbox">
        <Breadcrumb />
        <div className="contentbox gray-bg">
          <div className="main-box">
            <div className="box-1000">
              <div className="line-titlarea">
                <div className="peo-title">
                  <div className="line1" />
                  會員註冊
                  <div className="line2" />
                </div>
              </div>
              <p className="center marb_20">
                我們將寄出一封驗證信至您填寫的信箱，請完成您的電子信箱認證就可啟用會員帳號。謝謝！！
              </p>
              <Formik {...formikConfig}>
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mailbox">
                      <Field
                        type="text"
                        name="email"
                        placeholder="Awqtfdbhzfh@gmail.com"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                    <button
                      type="submit"
                      className="send"
                      disabled={isSubmitting}
                    >
                      重新寄送
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
