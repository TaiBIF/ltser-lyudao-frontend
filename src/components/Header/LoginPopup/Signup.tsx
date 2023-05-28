import React from 'react';

import ActionBtn from 'components/Header/LoginPopup/ActionBtn';

const Signup = () => {
  return (
    <>
      {/*註冊*/}
      <div className="register-set">
        <div className="titlebox">會員註冊</div>
        <div className="input-item">
          <input type="text" placeholder="姓名" />
        </div>
        <div className="input-item">
          <input type="text" placeholder="請輸入您的Email作為帳號" />
        </div>
        <div className="input-item">
          <input type="text" placeholder="請輸入您的密碼" />
        </div>
        <div className="input-item">
          <input type="text" placeholder="請再次輸入密碼" />
        </div>
        <div className="btn-area">
          <button className="login">註冊</button>
        </div>
        <div className="btn-area2">
          <ActionBtn type="login" />
          <div className="link">
            <span className="col-red">*註冊即同意</span>{' '}
            <a href="/">使⽤者條款</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
