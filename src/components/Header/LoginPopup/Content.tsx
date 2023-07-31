import React, { useEffect, ReactNode } from 'react';

import CloseIcon from 'components/CloseIcon';
import ForgotPsw from 'components/Header/LoginPopup/ForgotPsw';
import Login from 'components/Header/LoginPopup/Login';
import Signup from 'components/Header/LoginPopup/Signup';

import loginPicImg from 'image/loginpic.png';

import { useHeaderContext } from 'context/HeaderContext';
import { fadeInitStyle, gsapFade } from 'utils/animation';
import { handleStopPropagation } from 'helpers/stopPropagation';
import { useLocation } from 'react-router-dom';
import useWindowDimensions from 'hooks/utils/useWindowDimensions';

type loginContentItem = {
  id: number | string;
  content: ReactNode;
};

const Content = () => {
  const { show, setShow, loginPopupRef, handleLoginClick } = useHeaderContext();
  const { pathname } = useLocation();
  const { width } = useWindowDimensions();

  const isMobile = width && width < 1279;

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
      }, 400);
    }
  }, [show.loginPopup]);

  useEffect(() => {
    const target = loginPopupRef.current;
    if (target) {
      gsapFade(show.loginPopup ? 'in' : 'out', target);
    }
  }, [show.loginPopup]);

  useEffect(() => {
    setShow({
      menu3: false,
      mainMenu: false,
      mobile: false,
      loginPopup: false,
      loginContent: 'login',
    });
  }, [pathname]);

  useEffect(() => {
    if (isMobile) {
      setShow({ ...show, mobile: true });
    } else {
      setShow({ ...show, mobile: false });
    }
  }, [width]);

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
