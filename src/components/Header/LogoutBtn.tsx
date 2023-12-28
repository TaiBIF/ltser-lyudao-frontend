import React from 'react';

import LogoutIcon from './LogoutIcon';

import { useAuthContext } from 'context/AuthContext';
import { Link } from 'react-router-dom';

const LogoutBtn = () => {
  const { auth, handleLogout } = useAuthContext();

  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <>
      <div className="logoutbox" onClick={handleLogoutClick}>
        <div className="formb">
          <LogoutIcon />
          <p>登出</p>
        </div>
        <div className="menu_2">
          <div className="w_bg">
            <Link to="/dashboard/user/edit">後台</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutBtn;
