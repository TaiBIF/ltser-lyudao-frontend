import React, { useEffect, useRef } from 'react';
import { ErrorMessage, Field, useFormikContext } from 'formik';

import { useTranslation } from 'react-i18next';

import Spinner from 'components/Spinner';
import { useHeaderContext } from 'context/HeaderContext';
import { FE_URL, GSI_CLIENT_ID } from 'utils/config';

const LoginFieldLayout = ({
  isSubmitting,
  loading,
  I18N_KEY_PREFIX,
}: {
  isSubmitting: boolean;
  loading: boolean;
  I18N_KEY_PREFIX: string;
}) => {
  const PREFIX = 'Login';
  const { t } = useTranslation();

  const { show } = useHeaderContext();
  const formik = useFormikContext();

  useEffect(() => {
    formik.resetForm();
  }, [show]);

  const handleGoogleClick = () => {
    const redirectUri = `${FE_URL}`;
    const scope = 'openid email profile';
    const responseType = 'code';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GSI_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
    window.location.href = authUrl;
  };

  return (
    <>
      <div className="input-item">
        <Field
          type="text"
          name="email"
          placeholder={t(`${I18N_KEY_PREFIX}.emailText`)}
        />
        <ErrorMessage name="email" component="small" className="text-danger" />
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
      <div className="check-area">
        <label className="check-item">
          {t(`${I18N_KEY_PREFIX}.${PREFIX}.rememberMeLabel`)}
          <Field type="checkbox" name="rememberMe" />
          <span className="checkmark" />
        </label>
      </div>
      <div className="btn-area">
        <button type="submit" className="login" disabled={isSubmitting}>
          {!loading ? t(`${I18N_KEY_PREFIX}.${PREFIX}.loginBtn`) : <Spinner />}
        </button>
        <button className="logingoogle" onClick={handleGoogleClick}>
          {t(`${I18N_KEY_PREFIX}.${PREFIX}.googleLoginBtn`)}
        </button>
      </div>
    </>
  );
};

export default LoginFieldLayout;
