import React, { ReactNode, useContext } from 'react';
import { RouteProps, useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { useAuthContext } from 'context/AuthContext';
import { swalToast } from 'helpers/customSwal';

interface PrivateRouteProps {
  roles: string[];
  redirectPath: string;
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  roles,
  redirectPath = '/',
  children,
}) => {
  const PAGE_NAME = 'others';
  const COMPONENT_NAME = 'PrivateRoute';
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

  const { t } = useTranslation();

  const { auth, group } = useAuthContext();
  const navigate = useNavigate();

  const isFetchingGroup = group === '';

  if (!auth) {
    swalToast.fire({
      icon: 'warning',
      title: t(`${I18N_KEY_PREFIX}.authAlert`),
    });
    navigate(redirectPath);
    return null;
  }
  if (roles && !isFetchingGroup && !roles.includes(group as any)) {
    swalToast.fire({
      icon: 'warning',
      title: t(`${I18N_KEY_PREFIX}.roleAlert`),
    });
    navigate(redirectPath);
    return null;
  }
  return <>{children}</>;
};

export default PrivateRoute;
