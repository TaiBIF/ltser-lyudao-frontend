import React from 'react';

import Breadcrumb from 'components/Breadcrumb';

const MailVerification = () => {
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
                  會員註冊
                  <div className="line2" />
                </div>
              </div>
              <p className="center marb_20">
                我們將寄出一封驗證信至您填寫的信箱，請完成您的電子信箱認證就可啟用會員帳號。謝謝！！
              </p>
              <div className="mailbox">Awqtfdbhzfh@gmail.com</div>
              <button className="send">重新寄送</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MailVerification;
