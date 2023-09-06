import React from 'react';
import { Link } from 'react-router-dom';

import UserIcon from 'components/Header/UserIcon';

import { useHeaderContext } from 'context/HeaderContext';
import { useAuthContext } from 'context/AuthContext';

const LoginBtn = () => {
  const { handleLoginClick } = useHeaderContext();
  const { auth } = useAuthContext();

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
          <p>登入</p>
        </div>
      </div>
    </>
  );
};

export default LoginBtn;
