import React, { useEffect } from 'react';

import { ErrorMessage, Field, useFormikContext } from 'formik';

import Spinner from 'components/Spinner';
import { ShowState } from 'types/utils';

interface DownloadPopupFieldProps {
  isSubmitting: boolean;
  loading: boolean;
  show: ShowState;
}

const DownloadPopupFieldLayout = (props: DownloadPopupFieldProps) => {
  const { isSubmitting, loading, show } = props;
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
          placeholder="請輸入您email"
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
          placeholder="您的身份"
          required={true}
        />
        <ErrorMessage
          name="password"
          component="small"
          className="c-form__hint"
        />
      </div>
      <p>下載原因</p>
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
        {!loading ? '送出申請' : <Spinner />}
      </button>
    </>
  );
};

export default DownloadPopupFieldLayout;
