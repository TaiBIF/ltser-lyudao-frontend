import React from 'react';
import { Link } from 'react-router-dom';

import UserIcon from 'components/Header/UserIcon';

import { useHeaderContext } from 'context/HeaderContext';
import { useAuthContext } from 'context/AuthContext';

const LoginBtn = () => {
  const { handleLoginClick } = useHeaderContext();
  const { auth, handleLogout } = useAuthContext();

  const handleBtnClick = () => {
    if (!auth) {
      handleLoginClick('show');
    }
  };

  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <>
      <div className="loginbox">
        <div className="formb" onClick={handleBtnClick}>
          <UserIcon />
          <p>{auth ? 'Hi' : '登入'}</p>
        </div>
        {auth && (
          <div className="menu_2">
            <div className="w_bg">
              <Link to="/dashboard/about">後台</Link>
              <Link to="#" onClick={handleLogoutClick}>
                登出
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginBtn;
