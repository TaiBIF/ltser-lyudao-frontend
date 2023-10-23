import React, { useEffect } from 'react';

import { ErrorMessage, Field, useFormikContext } from 'formik';

import Spinner from 'components/Spinner';
import { ShowState } from 'types/utils';
import { useTranslation } from 'react-i18next';

interface DownloadPopupFieldProps {
  isSubmitting: boolean;
  loading: boolean;
  show: ShowState;
  I18N_KEY_PREFIX: string;
}

const DownloadPopupFieldLayout = (props: DownloadPopupFieldProps) => {
  const { isSubmitting, loading, show, I18N_KEY_PREFIX } = props;

  const { t } = useTranslation();

  const formik = useFormikContext();

  useEffect(() => {
    formik.resetForm();
  }, [show]);

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
        <ErrorMessage
          name="password"
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
        <ErrorMessage
          name="password"
          component="small"
          className="c-form__hint"
        />
      </div>
      <p>{t(`${I18N_KEY_PREFIX}.contentLabel`)}</p>
      <Field
        as="textarea"
        id="content"
        name="content"
        className="c-form__input"
        required={true}
      />
      <ErrorMessage
        name="password"
        component="small"
        className="c-form__hint"
      />
      <button type="submit" disabled={isSubmitting}>
        {!loading ? t(`${I18N_KEY_PREFIX}.submitBtn`) : <Spinner />}
      </button>
    </>
  );
};

export default DownloadPopupFieldLayout;
