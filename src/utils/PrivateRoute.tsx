import React, { ReactNode, useContext } from 'react';
import { RouteProps, useNavigate } from 'react-router-dom';
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
  const { auth, group } = useAuthContext();
  const navigate = useNavigate();

  if (!auth) {
    swalToast.fire({
      icon: 'warning',
      title: '請先登入。',
    });
    navigate(redirectPath);
    return null;
  }

  if (roles && !roles.includes(group as any)) {
    swalToast.fire({
      icon: 'warning',
      title: '權限不足。',
    });
    navigate(redirectPath);
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
