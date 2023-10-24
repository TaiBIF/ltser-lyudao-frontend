import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

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
import Spinner from 'components/Spinner';
import { spinnerBtnStyle } from 'utils/style';

const VerifyEmail = () => {
  const PAGE_NAME = 'Auth';
  const COMPONENT_NAME = 'VerifyEmail';
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

  const { t } = useTranslation();

  const mail = localStorage.getItem('email');
  const initialValues = {
    email: mail ? mail : '',
  };
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  const { loading, handleResendEmail, handleVerifyEmail } = useAuthContext();

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
                  {t(`${I18N_KEY_PREFIX}.title`)}
                  <div className="line2" />
                </div>
              </div>
              <p className="center marb_20">
                {t(`${I18N_KEY_PREFIX}.subtitle`)}
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
                      style={spinnerBtnStyle}
                      disabled={isSubmitting}
                    >
                      {!loading ? t(`${I18N_KEY_PREFIX}.sendBtn`) : <Spinner />}
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
