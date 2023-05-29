import React from 'react';

import {
  Form,
  Formik,
  FormikHelpers,
  FormikConfig,
  Field,
  ErrorMessage,
} from 'formik';

import Breadcrumb from 'components/Breadcrumb';

import { ResetPasswordItem } from 'types/auth';
import { resetPasswordValidationSchema } from 'data/validationSchema';

const ForgotPsw = () => {
  const initialValues: ResetPasswordItem = {
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (
    values: ResetPasswordItem,
    { setSubmitting }: FormikHelpers<ResetPasswordItem>
  ) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  const formikConfig: FormikConfig<ResetPasswordItem> = {
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: resetPasswordValidationSchema,
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
                          id="confirmPassword"
                          name="confirmPassword"
                          className="c-form__input"
                          placeholder="請再輸入一次密碼"
                          required={true}
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component="small"
                          className="c-form__hint"
                        />
                      </div>
                    </div>
                  </Form>
                </Formik>
                <button className="send">確認送出</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPsw;
