import React from 'react';

import loginPicImg from 'image/loginpic.png';

import { useHeaderContext } from 'context/HeaderContext';
import { fadeInitStyle } from 'utils/animation';
import CloseIcon from 'components/CloseIcon';
import { handleStopPropagation } from 'helpers/stopPropagation';

const LoginPopup = () => {
  const { loginPopupRef, handleLoginClick } = useHeaderContext();

  return (
    <>
      {/*login-pop*/}
      <div className="login-pop" style={fadeInitStyle} ref={loginPopupRef}>
        <div
          className="flex100"
          onClick={() => {
            handleLoginClick('close');
          }}
        >
          <div className="w_bgbox" onClick={handleStopPropagation}>
            <div
              className="xxx"
              onClick={() => {
                handleLoginClick('close');
              }}
            >
              <CloseIcon />
            </div>
            <div className="leftpic">
              <img src={loginPicImg} alt="login-pic" />
            </div>
            <div className="right-content">
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
                  <button className="res-btn">建立帳號</button>
                  <button className="forget-btn">忘記密碼</button>
                </div>
              </div>
              {/*忘記密碼*/}
              <div className="forget-set" style={{ display: 'none' }}>
                <div className="titlebox">忘記密碼</div>
                <p>
                  請輸入當初加入會員使用的E-Mail，我們將協助您重新設定密碼。
                </p>
                <div className="input-item">
                  <input type="text" placeholder="請輸入您的帳號(email)" />
                </div>
                <div className="btn-area">
                  <button className="login">確認送出</button>
                </div>
                <div className="btn-area2">
                  <button className="res-btn">建立帳號</button>
                  <button className="back-btn">返回登入</button>
                </div>
              </div>
              {/*註冊*/}
              <div className="register-set" style={{ display: 'none' }}>
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
                  <button className="back-btn">返回登入</button>
                  <div className="link">
                    <span className="col-red">*註冊即同意</span>{' '}
                    <a href="#">使⽤者條款</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
