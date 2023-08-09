import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import { swalToast } from 'helpers/customSwal';

interface SuperuserProps {
  redirectPath?: string;
  children?: any;
}

const Superuser: React.FC<SuperuserProps> = ({
  redirectPath = '/dashboard/about',
  children,
}) => {
  const { group } = useAuthContext();
  const isSuperuser = group === 'superuser';

  if (!isSuperuser) {
    // swalToast.fire({
    //   icon: 'error',
    //   title: '權限不足。',
    // });
    return <Navigate to={redirectPath} replace />;
  }

  return children ?? <Outlet />;
};

export default Superuser;
