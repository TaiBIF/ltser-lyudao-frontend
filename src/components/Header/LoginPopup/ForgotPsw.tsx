import React from 'react';

import ActionBtn from 'components/Header/LoginPopup/ActionBtn';

const ForgotPsw = () => {
  return (
    <>
      {/*忘記密碼*/}
      <div className="forget-set">
        <div className="titlebox">忘記密碼</div>
        <p>請輸入當初加入會員使用的E-Mail，我們將協助您重新設定密碼。</p>
        <div className="input-item">
          <input type="text" placeholder="請輸入您的帳號(email)" />
        </div>
        <div className="btn-area">
          <button className="login">確認送出</button>
        </div>
        <div className="btn-area2">
          <ActionBtn type="signup" />
          <ActionBtn type="login" />
        </div>
      </div>
    </>
  );
};

export default ForgotPsw;
