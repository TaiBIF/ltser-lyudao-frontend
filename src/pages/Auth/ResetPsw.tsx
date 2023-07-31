import React from 'react';
import { useLocation } from 'react-router-dom';

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
                  忘記密碼
                  <div className="line2" />
                </div>
              </div>
              <p className="center marb_20">
                您可在下方欄位修改您的密碼，下次請使用新的密碼登入
              </p>
              <div className="inpbox">
                <p>
                  新密碼<span className="col-red"> (8-12位含英文與數字)</span>
                </p>
                <Formik {...formikConfig}>
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="flex-input c-form">
                        <div className="c-form__set">
                          <label htmlFor="password" className="visually-hidden">
                            密碼
                          </label>
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            className="c-form__input"
                            placeholder="請輸入密碼"
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
                            確認密碼
                          </label>
                          <Field
                            type="password"
                            id="password2"
                            name="password2"
                            className="c-form__input"
                            placeholder="請再輸入一次密碼"
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
                        {!loading ? '確認送出' : <Spinner />}
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
