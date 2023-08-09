import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import { swalToast } from 'helpers/customSwal';
import { useEffect, useState } from 'react';

interface RouteGuardProps {
  roles: string[];
  redirectPath?: string;
  children?: any;
}

const RouteGuard: React.FC<RouteGuardProps> = ({
  roles,
  redirectPath = '/',
  children,
}) => {
  const { group } = useAuthContext();
  const [allow, setAllow] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);

  useEffect(() => {
    if (roles.includes(group)) {
      setAllow(true);
    }
    setRender(true);
  }, [group]);

  useEffect(() => {
    if (!allow && render) {
      setRedirect(true);
    }
  }, [allow, render]);

  const navigate = useNavigate();

  useEffect(() => {
    if (redirect && render) {
      setTimeout(() => {
        navigate(redirectPath);
      }, 0);
    }
  }, [redirect, render]);

  if (!render) {
    return null;
  }

  return children ?? <Outlet />;
};

export default RouteGuard;
