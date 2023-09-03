import React, { useEffect, useRef } from 'react';
import { ErrorMessage, Field, useFormikContext } from 'formik';

import Spinner from 'components/Spinner';

import { useAuthContext } from 'context/AuthContext';
import { useHeaderContext } from 'context/HeaderContext';
import { FE_URL, GSI_CLIENT_ID } from 'utils/config';

const LoginFieldLayout = ({
  isSubmitting,
  loading,
}: {
  isSubmitting: boolean;
  loading: boolean;
}) => {
  // const googleSignInRef = useRef(null);
  // const { handleGoogleSignIn } = useAuthContext();
  const { show, setShow } = useHeaderContext();
  const formik = useFormikContext();

  useEffect(() => {
    formik.resetForm();
  }, [show]);

  // const handleGoogleResponse = (response: { credential: any }) => {
  //   handleGoogleSignIn({ code: response.credential, setShow });
  // };

  const handleGoogleClick = () => {
    const redirectUri = `${FE_URL}`;
    const scope = 'openid email profile';
    const responseType = 'code';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GSI_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
    window.location.href = authUrl;
  };

  useEffect(() => {
    // if (typeof google !== 'undefined') {
    //   google.accounts.id.initialize({
    //     client_id:
    //       '293650145366-i0mnv9rn0jqptkvtrr677dh9cb6nhttp.apps.googleusercontent.com',
    //     callback: handleGoogleResponse,
    //   });
    //   if (googleSignInRef.current) {
    //     google.accounts.id.renderButton(googleSignInRef.current, {
    //       theme: 'outline',
    //       size: 'large',
    //       type: 'standard',
    //     });
    //   }
    // }
  }, []);

  return (
    <>
      <div className="input-item">
        <Field type="text" name="email" placeholder="請輸入您的帳號(email)" />
        <ErrorMessage name="email" component="small" className="text-danger" />
      </div>
      <div className="input-item">
        <Field type="password" name="password" placeholder="請輸入您的密碼" />
        <ErrorMessage
          name="password"
          component="small"
          className="text-danger"
        />
      </div>
      <div className="check-area">
        <label className="check-item">
          記住我的帳號
          <Field type="checkbox" name="rememberMe" />
          <span className="checkmark" />
        </label>
      </div>
      <div className="btn-area">
        <button type="submit" className="login" disabled={isSubmitting}>
          {!loading ? '登入' : <Spinner />}
        </button>
        {/* <div ref={googleSignInRef}>
          <button className="logingoogle">使用GOOGLE登入</button>
        </div> */}
        <button className="logingoogle" onClick={handleGoogleClick}>
          使用GOOGLE登入
        </button>
      </div>
    </>
  );
};

export default LoginFieldLayout;
