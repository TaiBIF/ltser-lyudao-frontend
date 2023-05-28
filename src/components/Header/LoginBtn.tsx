import React from 'react';
import { Link } from 'react-router-dom';

import UserIcon from 'components/Header/UserIcon';

import { useHeaderContext } from 'context/HeaderContext';

const LoginBtn = () => {
  const { handleLoginClick } = useHeaderContext();
  return (
    <>
      <div
        className="loginbox"
        onClick={() => {
          handleLoginClick('show');
        }}
      >
        <UserIcon />
        <div className="menu_2">
          <div className="w_bg">
            <Link to="/dashboard/about">後台</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginBtn;
