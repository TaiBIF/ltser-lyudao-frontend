import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumb from 'components/Breadcrumb';

const SignupSuccess = () => {
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
                  驗證成功
                  <div className="line2" />
                </div>
              </div>
              <div className="mailbox">
                ※ 您的電子信箱驗證成功，歡迎加入LTSER_LYUDAO網站會員！
              </div>
              <Link to="/" className="send">
                回首頁
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupSuccess;
