import React from 'react';

import ActionBtn from 'components/Header/LoginPopup/ActionBtn';

const Login = () => {
  return (
    <>
      {/*登入*/}
      <div className="login-set">
        <div className="titlebox">會員登入</div>
        <div className="input-item">
          <input type="text" placeholder="請輸入您的帳號(email)" />
        </div>
        <div className="input-item">
          <input type="text" placeholder="請輸入您的密碼" />
        </div>
        <div className="check-area">
          <label className="check-item">
            記住我的帳號
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
        <div className="btn-area">
          <button className="login">登入</button>
          <button className="logingoogle">使用GOOGLE登入</button>
        </div>
        <div className="btn-area2">
          <ActionBtn type="signup" />
          <ActionBtn type="forgotPsw" />
        </div>
      </div>
    </>
  );
};

export default Login;
