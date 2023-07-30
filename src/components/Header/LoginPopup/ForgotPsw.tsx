import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikConfig,
  FormikHelpers,
} from 'formik';

import ActionBtn from 'components/Header/LoginPopup/ActionBtn';

import { resetPswEmailValidationSchema } from 'data/validationSchema';

import { useAuthContext } from 'context/AuthContext';

const ForgotPsw = () => {
  const initialValues = {
    email: '',
  };

  const { handleResetPswEmail } = useAuthContext();

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
        <div className="titlebox">忘記密碼</div>
        <p>請輸入當初加入會員使用的E-Mail，我們將協助您重新設定密碼。</p>
        <Formik {...formikConfig}>
          {({ isSubmitting }) => (
            <Form>
              <div className="input-item">
                <Field
                  type="text"
                  name="email"
                  placeholder="請輸入您的帳號(email)"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-danger"
                />
              </div>
              <div className="btn-area">
                <button className="login" type="submit" disabled={isSubmitting}>
                  確認送出
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="btn-area2">
          <ActionBtn type="signup" />
          <ActionBtn type="login" />
        </div>
      </div>
    </>
  );
};

export default ForgotPsw;
