import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import UserIcon from 'components/Header/UserIcon';

import { useHeaderContext } from 'context/HeaderContext';
import { useAuthContext } from 'context/AuthContext';

const LoginBtn = ({ I18N_KEY_PREFIX }: { I18N_KEY_PREFIX: string }) => {
  const { t } = useTranslation();

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
          <p>
            {auth
              ? t(`${I18N_KEY_PREFIX}.greetingText`)
              : t(`${I18N_KEY_PREFIX}.loginBtn`)}
          </p>
        </div>
        {auth && (
          <div className="menu_2">
            <div className="w_bg">
              <Link to="/dashboard/user/edit">
                {t(`${I18N_KEY_PREFIX}.dashboardBtn`)}
              </Link>
              <Link to="#" onClick={handleLogoutClick}>
                {t(`${I18N_KEY_PREFIX}.logoutBtn`)}
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginBtn;
