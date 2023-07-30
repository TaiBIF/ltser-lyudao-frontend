import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';

import { useApi } from 'hooks/api/useApi';
import { useNavigate } from 'react-router-dom';
import { swalToast } from 'helpers/customSwal';
import { useHeaderContext } from './HeaderContext';

interface AuthTokens {
  access: string;
  refresh: string;
}

interface AuthContextData {
  auth: boolean;
  handleLogin: (values: Record<string, any>) => Promise<void>;
  handleSignup: (values: Record<string, any>) => Promise<void>;
  handleResendEmail: (values: Record<string, any>) => Promise<void>;
  handleVerifyEmail: (token: string) => Promise<void>;
  handleLogout: () => void;
  handleResetPswEmail: (values: Record<string, any>) => Promise<void>;
  handleResetPsw: ({
    uidb64,
    token,
    values,
  }: {
    uidb64: string;
    token: string;
    values: Record<string, any>;
  }) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const initialAuthToken: AuthTokens = {
    access: '',
    refresh: '',
  };

  const [authTokens, setAuthTokens] = useState<AuthTokens>(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens') as string)
      : { ...initialAuthToken }
  );
  const [init, setInit] = useState<boolean>(false);
  const [auth, setAuth] = useState<boolean>(true);

  const { setLoading, handleApi, handleActions } = useApi();
  const navigate = useNavigate();
  const { show, setShow } = useHeaderContext();

  const isExistTokens = authTokens.access !== '';

  const handleLogin = async (values: Record<string, any>) => {
    const result = await handleApi({
      type: 'auth',
      method: 'post',
      data: values,
      url: `/login/`,
    });
    const handleSuccessAction = (data: AuthTokens) => {
      setAuthTokens({ ...data });
      localStorage.setItem('authTokens', JSON.stringify(data));
      navigate('/');
    };
    handleActions({
      result,
      success: {
        title: '登入成功',
        action: () => {
          handleSuccessAction(result?.response.data);
        },
      },
      error: {
        title: result?.response.data.detail,
      },
    });
  };

  const handleLogout = () => {
    setLoading(true);
    setAuthTokens({ ...initialAuthToken });
    localStorage.removeItem('authTokens');
    swalToast.fire({
      icon: 'success',
      title: '已登出',
    });
    navigate('/');
    setLoading(false);
  };

  const handleUpdateTokens = async () => {
    const result = await handleApi({
      type: 'auth',
      method: 'post',
      data: {
        refresh: authTokens.refresh,
      },
      url: `/login/refresh/`,
    });
    const handleSuccessAction = (data: AuthTokens) => {
      setAuthTokens({ ...authTokens, ...data });
      localStorage.setItem('authTokens', JSON.stringify(authTokens));
      console.log('token updated');
      if (init) {
        setInit(false);
      }
    };
    const handleErrorAction = () => {
      handleLogout();
    };
    handleActions({
      result,
      success: {
        action: () => {
          handleSuccessAction(result?.response.data);
        },
      },
      error: {
        title: '更新權限發生錯誤，即將登出',
        action: handleErrorAction,
      },
    });
  };

  const handleSignup = async (values: Record<string, any>) => {
    const result = await handleApi({
      type: 'auth',
      method: 'post',
      data: { username: values.email, ...values },
      url: `/signUp/`,
    });
    const handleSuccessAction = () => {
      localStorage.setItem('email', values['email']);
      navigate('/verify-email');
    };
    handleActions({
      result,
      success: {
        title: '登入成功',
        action: handleSuccessAction,
      },
      error: {
        title: '發生錯誤，註冊失敗',
      },
    });
  };

  const handleResendEmail = async (values: Record<string, any>) => {
    const result = await handleApi({
      type: 'auth',
      method: 'post',
      data: values,
      url: `/resend-email-verify/`,
    });
    handleActions({
      result,
      success: {
        title: '發送成功',
      },
      error: {
        title: '發生錯誤，發送失敗',
      },
    });
  };

  const handleVerifyEmail = async (token: string) => {
    const result = await handleApi({
      type: 'auth',
      method: 'get',
      params: {
        token,
      },
      url: `/email-verify/`,
    });
    const handleSuccessAction = () => {
      navigate('/verify-email-success');
    };
    handleActions({
      result,
      success: {
        title: '驗證成功',
        action: () => {
          handleSuccessAction();
        },
      },
      error: {
        title: '發生錯誤，驗證失敗',
      },
    });
  };

  const handleResetPswEmail = async (values: Record<string, any>) => {
    const result = await handleApi({
      type: 'auth',
      method: 'post',
      data: values,
      url: `/request-rest-email/`,
    });
    handleActions({
      result,
      success: {
        title: '發送成功',
      },
      error: {
        title: '發生錯誤，發送失敗',
      },
    });
  };

  const handleResetPsw = async ({
    uidb64,
    token,
    values,
  }: {
    uidb64: string;
    token: string;
    values: Record<string, any>;
  }) => {
    const data = {
      password: values.newPassword,
      uidb64: uidb64,
      token: token,
    };
    const result = await handleApi({
      type: 'auth',
      method: 'patch',
      data,
      url: `/password-reset-complete/`,
    });
    const handleAction = () => {
      setShow({ ...show, loginPopup: true, loginContent: 'login' });
    };
    handleActions({
      result,
      success: {
        title: '更改成功',
      },
      error: {
        title: '發生錯誤，更改失敗',
      },
      action: {
        type: 'custom',
        action: handleAction,
      },
    });
  };

  useEffect(() => {
    if (isExistTokens) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [authTokens.access]);

  useEffect(() => {
    const time = 11.9 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      if (isExistTokens) {
        handleUpdateTokens();
      }
    }, time);
    return () => clearInterval(interval);
  }, [authTokens, init]);

  useEffect(() => {
    if (authTokens.access !== '') {
      setInit(false);
    }
  }, [authTokens.access]);

  const contextData: AuthContextData = {
    auth,
    handleLogin,
    handleSignup,
    handleResendEmail,
    handleVerifyEmail,
    handleLogout,
    handleResetPswEmail,
    handleResetPsw,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {init ? null : children}
    </AuthContext.Provider>
  );
};
