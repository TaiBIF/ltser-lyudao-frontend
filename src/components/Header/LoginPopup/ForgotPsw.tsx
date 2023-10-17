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

import { resetPswEmailValidationSchema } from 'data/validationSchema';

import { useAuthContext } from 'context/AuthContext';

const ForgotPsw = ({ I18N_KEY_PREFIX }: { I18N_KEY_PREFIX: string }) => {
  const PREFIX = 'ForgotPsw';
  const { t } = useTranslation();

  const initialValues = {
    email: '',
  };

  const { loading, handleResetPswEmail } = useAuthContext();

  const handleSubmit = (
    values: Record<string, any>,
    { setSubmitting }: FormikHelpers<Record<string, any>>
  ) => {
    handleResetPswEmail(values);
    setSubmitting(false);
  };

  const formikConfig: FormikConfig<Record<string, any>> = {
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: resetPswEmailValidationSchema,
  };

  return (
    <>
      {/*忘記密碼*/}
      <div className="forget-set">
        <div className="titlebox">
          {t(`${I18N_KEY_PREFIX}.${PREFIX}.title`)}
        </div>
        <p>{t(`${I18N_KEY_PREFIX}.${PREFIX}.subtitle`)}</p>
        <Formik {...formikConfig}>
          {({ isSubmitting }) => (
            <Form>
              <div className="input-item">
                <Field
                  type="text"
                  name="email"
                  placeholder={t(`${I18N_KEY_PREFIX}.emailText`)}
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-danger"
                />
              </div>
              <div className="btn-area">
                <button className="login" type="submit" disabled={isSubmitting}>
                  {!loading ? (
                    t(`${I18N_KEY_PREFIX}.${PREFIX}.submitBtn`)
                  ) : (
                    <Spinner />
                  )}
                </button>
              </div>
              <div className="btn-area2">
                <ActionBtn
                  type="signup"
                  loading={loading}
                  I18N_KEY_PREFIX={I18N_KEY_PREFIX}
                />
                <ActionBtn
                  type="login"
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

export default ForgotPsw;
