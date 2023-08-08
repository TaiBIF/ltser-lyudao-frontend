import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import { swalToast } from 'helpers/customSwal';

interface Staff {
  redirectPath?: string;
  children?: any;
}

const Staff: React.FC<Staff> = ({ redirectPath = '/', children }) => {
  const { group } = useAuthContext();
  const isStaff = group === 'staff';

  if (!isStaff) {
    swalToast.fire({
      icon: 'error',
      title: '權限不足。',
    });
    return <Navigate to={redirectPath} replace />;
  }

  return children ?? <Outlet />;
};

export default Staff;
