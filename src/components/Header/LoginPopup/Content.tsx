import React, { useEffect, ReactNode } from 'react';

import CloseIcon from 'components/CloseIcon';
import ForgotPsw from 'components/Header/LoginPopup/ForgotPsw';
import Login from 'components/Header/LoginPopup/Login';
import Signup from 'components/Header/LoginPopup/Signup';

import loginPicImg from 'image/loginpic.png';

import { useHeaderContext } from 'context/HeaderContext';
import { fadeInitStyle } from 'utils/animation';
import { handleStopPropagation } from 'helpers/stopPropagation';

type loginContentItem = {
  id: number | string;
  content: ReactNode;
};

const Content = () => {
  const { show, setShow, loginPopupRef, handleLoginClick } = useHeaderContext();

  const loginContentList: loginContentItem[] = [
    {
      id: 'login',
      content: <Login />,
    },
    {
      id: 'forgotPsw',
      content: <ForgotPsw />,
    },
    {
      id: 'signup',
      content: <Signup />,
    },
  ];

  useEffect(() => {
    if (!show.loginPopup) {
      setTimeout(() => {
        setShow({ ...show, loginContent: 'login' });
      }, 5000);
    }
  }, [show.loginPopup]);

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
              {loginContentList.map((v) => {
                const { id, content } = v;
                return (
                  id === show.loginContent && (
                    <React.Fragment key={id}>{content}</React.Fragment>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
