import React, { useEffect } from 'react';

import { ErrorMessage, Field, useFormikContext } from 'formik';

import Spinner from 'components/Spinner';
import { ShowState } from 'types/utils';
import { useTranslation } from 'react-i18next';
import { useAuthContext } from 'context/AuthContext';
import { useLocation } from 'react-router-dom';

interface DownloadPopupFieldProps {
  isSubmitting: boolean;
  loading: boolean;
  show: ShowState;
  I18N_KEY_PREFIX: string;
}

const DownloadPopupFieldLayout = (props: DownloadPopupFieldProps) => {
  const { isSubmitting, loading, show, I18N_KEY_PREFIX } = props;

  const { t } = useTranslation();
  const { pathname } = useLocation();

  const { values, setValues, resetForm } = useFormikContext();
  const { info } = useAuthContext();
  const isFetchingInfo = info === null;

  useEffect(() => {
    if (!isFetchingInfo) {
      setValues({
        email: info.email,
        role: info.role,
        last_name: info.last_name,
        first_name: info.first_name,
        content: '',
      });
    }
  }, [info]);

  useEffect(() => {
    resetForm();
  }, [pathname]);

  return (
    <>
      <div className="input-item">
        <Field
          type="email"
          id="email"
          name="email"
          className="c-form__input"
          placeholder={t(`${I18N_KEY_PREFIX}.emailText`)}
          required={true}
        />
        <ErrorMessage name="email" component="small" className="c-form__hint" />
      </div>
      <div className="input-item">
        <Field
          type="text"
          id="lastName"
          name="last_name"
          className="c-form__input"
          placeholder={t(`${I18N_KEY_PREFIX}.lastNameText`)}
          required={true}
        />
        <ErrorMessage
          name="last_name"
          component="small"
          className="c-form__hint"
        />
      </div>
      <div className="input-item">
        <Field
          type="text"
          id="firstName"
          name="first_name"
          className="c-form__input"
          placeholder={t(`${I18N_KEY_PREFIX}.firstNameText`)}
          required={true}
        />
        <ErrorMessage
          name="first_name"
          component="small"
          className="c-form__hint"
        />
      </div>
      <div className="input-item">
        <Field
          type="text"
          id="role"
          name="role"
          className="c-form__input"
          placeholder={t(`${I18N_KEY_PREFIX}.roleText`)}
          required={true}
        />
        <ErrorMessage name="role" component="small" className="c-form__hint" />
      </div>
      <p>{t(`${I18N_KEY_PREFIX}.contentLabel`)}</p>
      <div className="c-form__set">
        <Field
          as="textarea"
          id="content"
          name="content"
          className="c-form__input mb-0"
          required={true}
        />
        <ErrorMessage
          name="content"
          component="small"
          className="c-form__hint"
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        {!loading ? t(`${I18N_KEY_PREFIX}.submitBtn`) : <Spinner />}
      </button>
    </>
  );
};

export default DownloadPopupFieldLayout;
