import React from 'react';
import { Link } from 'react-router-dom';

import UserIcon from 'components/Header/UserIcon';

import { useHeaderContext } from 'context/HeaderContext';
import { useAuthContext } from 'context/AuthContext';

const LoginBtn = () => {
  const { handleLoginClick } = useHeaderContext();
  const { auth, isInternalUser, handleLogout } = useAuthContext();

  const handleLogoutClick = () => {
    handleLogout();
  };

  const handleBtnClick = () => {
    if (!auth) {
      handleLoginClick('show');
    }
  };

  return (
    <>
      <div className="loginbox">
        <div className="formb" onClick={handleBtnClick}>
          <UserIcon />
          <p>{auth ? '已' : ''}登入</p>
        </div>
        {auth && (
          <div className="menu_2">
            {isInternalUser && (
              <div className="w_bg">
                <Link to="/dashboard/about">後台</Link>
              </div>
            )}
            <div className="w_bg" onClick={handleLogoutClick}>
              <button type="button">登出</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginBtn;
