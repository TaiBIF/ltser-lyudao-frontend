import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import { swalToast } from 'helpers/customSwal';

interface ProtectedRouteProps {
  redirectPath?: string;
  children?: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = '/',
  children,
}) => {
  const { auth } = useAuthContext();

  if (!auth) {
    swalToast.fire({
      icon: 'error',
      title: '請先登入',
    });
    return <Navigate to={redirectPath} replace />;
  }
  return children ?? <Outlet />;
};

export default ProtectedRoute;
