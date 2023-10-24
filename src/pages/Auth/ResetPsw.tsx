import React from 'react';
import { useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import {
  Form,
  Formik,
  FormikHelpers,
  FormikConfig,
  Field,
  ErrorMessage,
} from 'formik';

import Breadcrumb from 'components/Breadcrumb';

import { resetPswValidationSchema } from 'data/validationSchema';
import { useAuthContext } from 'context/AuthContext';
import Spinner from 'components/Spinner';
import { spinnerBtnStyle } from 'utils/style';

const ResetPsw = () => {
  const PAGE_NAME = 'Auth';
  const COMPONENT_NAME = 'ResetPsw';
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

  const { t } = useTranslation();

  const initialValues = {
    password: '',
    password2: '',
  };

  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');
  const uidb64 = new URLSearchParams(location.search).get('uidb64');
  const { loading, handleResetPsw } = useAuthContext();

  const handleSubmit = (
    values: Record<string, any>,
    { setSubmitting }: FormikHelpers<Record<string, any>>
  ) => {
    console.log({ token, uidb64, values });
    handleResetPsw({ token, uidb64, values });
    setSubmitting(false);
  };

  const formikConfig: FormikConfig<Record<string, any>> = {
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: resetPswValidationSchema,
  };

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
              <div className="inpbox">
                <p>
                  {t(`${I18N_KEY_PREFIX}.passwordTitle`)}
                  <span className="col-red">
                    {' '}
                    {t(`${I18N_KEY_PREFIX}.passwordHint`)}
                  </span>
                </p>
                <Formik {...formikConfig}>
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="flex-input c-form">
                        <div className="c-form__set">
                          <label htmlFor="password" className="visually-hidden">
                            {t(`${I18N_KEY_PREFIX}.passwordLabel`)}
                          </label>
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            className="c-form__input"
                            placeholder={t(`${I18N_KEY_PREFIX}.passwordText`)}
                            required={true}
                          />
                          <ErrorMessage
                            name="password"
                            component="small"
                            className="c-form__hint"
                          />
                        </div>
                        <div className="c-form__set">
                          <label
                            htmlFor="confirmPassword"
                            className="visually-hidden"
                          >
                            {t(`${I18N_KEY_PREFIX}.password2Label`)}
                          </label>
                          <Field
                            type="password"
                            id="password2"
                            name="password2"
                            className="c-form__input"
                            placeholder={t(`${I18N_KEY_PREFIX}.password2Text`)}
                            required={true}
                          />
                          <ErrorMessage
                            name="password2"
                            component="small"
                            className="c-form__hint"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="send"
                        style={spinnerBtnStyle}
                        disabled={isSubmitting}
                      >
                        {!loading ? (
                          t(`${I18N_KEY_PREFIX}.submitBtn`)
                        ) : (
                          <Spinner />
                        )}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPsw;
