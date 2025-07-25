import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { HeaderShowState } from 'types/common';

import { useApi } from 'hooks/api/useApi';
import { swalToast } from 'helpers/customSwal';
import { useHeaderContext } from 'context/HeaderContext';
import { UserItem } from 'types/user';

interface AuthTokens {
  access: string;
  refresh: string;
}

interface Errors {
  [key: string]: string[];
}

export type GroupItem = {
  group: string;
};

interface AuthContextData {
  auth: boolean;
  group: string;
  info: UserItem;
  isInternalUser: boolean;
  loading: boolean;
  authTokens: AuthTokens;
  handleLogin: ({
    values,
    setShow,
  }: {
    values: Record<string, any>;
    setShow: Dispatch<SetStateAction<HeaderShowState>>;
  }) => Promise<void>;
  handleSignup: ({
    values,
    setShow,
  }: {
    values: Record<string, any>;
    setShow: Dispatch<SetStateAction<HeaderShowState>>;
  }) => Promise<void>;
  handleResendEmail: (values: Record<string, any>) => Promise<void>;
  handleVerifyEmail: (token: string) => Promise<void>;
  handleLogout: () => void;
  handleResetPswEmail: (values: Record<string, any>) => Promise<void>;
  handleResetPsw: ({
    uidb64,
    token,
    values,
  }: {
    uidb64: string | null;
    token: string | null;
    values: Record<string, any>;
  }) => Promise<void>;
  handleGoogleSignIn: ({
    code,
    setShow,
  }: {
    code: string;
    setShow: Dispatch<SetStateAction<HeaderShowState>>;
  }) => Promise<void>;
  getMemberInfo: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const PAGE_NAME = 'others';
  const COMPONENT_NAME = 'AuthContext';
  const PREFIX = 'alert';
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}.${PREFIX}`;

  const { t } = useTranslation();

  const initialAuthToken: AuthTokens = {
    access: '',
    refresh: '',
  };

  const [authTokens, setAuthTokens] = useState<AuthTokens>(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens') as string)
      : { ...initialAuthToken }
  );
  const [init, setInit] = useState<boolean>(true);
  const [auth, setAuth] = useState<boolean>(true);
  const [group, setGroup] = useState<string>('');
  const [info, setInfo] = useState<any | null>(null);

  const { loading, setLoading, handleApi, handleActions } = useApi();
  const navigate = useNavigate();
  const { show, setShow } = useHeaderContext();

  const isExistTokens = authTokens.access !== '';
  const internalGroupList: string[] = ['staff', 'superuser'];
  const isInternalUser = internalGroupList.includes(group);

  const headers = {
    Authorization: `Bearer ${authTokens.access}`,
  };

  const handleLoginSuccessAction = ({
    data,
    setShow,
  }: {
    data: AuthTokens;
    setShow: Dispatch<SetStateAction<HeaderShowState>>;
  }) => {
    setShow({
      menu3: false,
      menu3Map: {},
      mainMenu: false,
      mobile: false,
      loginPopup: false,
      loginContent: 'login',
    });
    setAuthTokens({ ...data });
    localStorage.setItem('authTokens', JSON.stringify(data));
    navigate('/');
  };

  const handleLogin = async ({
    values,
    setShow,
  }: {
    values: Record<string, any>;
    setShow: Dispatch<SetStateAction<HeaderShowState>>;
  }) => {
    const result = await handleApi({
      type: 'auth',
      method: 'post',
      data: values,
      url: `/login/`,
    });
    if (values.rememberMe) {
      localStorage.setItem('rememberMe', values.email);
    } else {
      localStorage.removeItem('rememberMe');
    }
    handleActions({
      result,
      success: {
        title: t(`${I18N_KEY_PREFIX}.login.success`),
        action: () => {
          handleLoginSuccessAction({ data: result?.response.data, setShow });
        },
      },
      error: {
        title: result?.response.data.detail,
      },
    });
  };

  const handleGoogleSignIn = async ({
    code,
    setShow,
  }: {
    code: string;
    setShow: Dispatch<SetStateAction<HeaderShowState>>;
  }) => {
    const result = await handleApi({
      type: 'auth',
      method: 'post',
      data: { authorization_code: code },
      url: `/google/`,
    });
    const handleErrorAction = () => {
      navigate('/');
    };
    handleActions({
      result,
      success: {
        title: t(`${I18N_KEY_PREFIX}.login.success`),
        action: () => {
          handleLoginSuccessAction({ data: result?.response.data, setShow });
        },
      },
      error: {
        title: t(`${I18N_KEY_PREFIX}.login.fail`),
        action: () => {
          handleErrorAction();
        },
      },
    });
  };

  const handleLogout = () => {
    setLoading(true);
    setAuthTokens({ ...initialAuthToken });
    localStorage.removeItem('authTokens');
    swalToast.fire({
      icon: 'success',
      title: t(`${I18N_KEY_PREFIX}.logout.success`),
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
      getGroup();
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
        title: t(`${I18N_KEY_PREFIX}.updateToken.fail`),
        action: handleErrorAction,
      },
    });
  };

  const getGroup = async () => {
    const result = await handleApi({
      type: 'auth',
      method: 'get',
      url: `/identity/`,
      headers,
    });
    const handleSuccessAction = (data: GroupItem) => {
      setGroup(data.group);
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
        title: t(`${I18N_KEY_PREFIX}.getGroup.fail`),
        action: () => {
          handleErrorAction();
        },
      },
    });
  };

  const getMemberInfo = async () => {
    const result = await handleApi({
      type: 'api',
      method: 'get',
      url: `/users/member-info/`,
      headers,
    });
    const handleSuccessAction = (data: any) => {
      setInfo(data);
    };
    // const handleErrorAction = () => {
    //   handleLogout();
    // };
    handleActions({
      result,
      success: {
        action: () => {
          handleSuccessAction(result?.response.data);
        },
      },
      error: {
        title: '讀取會員資料失敗',
        action: () => {
          // handleErrorAction();
        },
      },
    });
  };

  const handleSignup = async ({
    values,
    setShow,
  }: {
    values: Record<string, any>;
    setShow: Dispatch<SetStateAction<HeaderShowState>>;
  }) => {
    const result = await handleApi({
      type: 'auth',
      method: 'post',
      data: { username: values.email, ...values },
      url: `/signUp/`,
    });

    let errorMessage = t(`${I18N_KEY_PREFIX}.signup.fail`);
    if (result?.response?.data?.errors) {
      const errors: Errors = result.response.data.errors;
      errorMessage = Object.entries(errors)
        .filter(([field]) => field !== 'username') // 不需要顯示 username 的錯誤訊息
        .map(([, messages]) => messages.join(','))
        .join(' | ');
    }

    const handleSuccessAction = () => {
      localStorage.setItem('email', values.email);
      navigate('/verify-email');
      setShow({
        menu3: false,
        menu3Map: {},
        mainMenu: false,
        mobile: false,
        loginPopup: false,
        loginContent: 'login',
      });
    };
    handleActions({
      result,
      success: {
        title: t(`${I18N_KEY_PREFIX}.signup.success`),
        action: handleSuccessAction,
      },
      error: {
        title: errorMessage,
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
        title: t(`${I18N_KEY_PREFIX}.resendEmail.success`),
      },
      error: {
        title: t(`${I18N_KEY_PREFIX}.resendEmail.fail`),
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
        title: t(`${I18N_KEY_PREFIX}.verifyEmail.success`),
        action: () => {
          handleSuccessAction();
        },
      },
      error: {
        title: t(`${I18N_KEY_PREFIX}.verifyEmail.fail`),
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
        title: t(`${I18N_KEY_PREFIX}.resetPswEmail.success`),
      },
      error: {
        title: result?.response.data.message,
      },
    });
  };

  const handleResetPsw = async ({
    uidb64,
    token,
    values,
  }: {
    uidb64: string | null;
    token: string | null;
    values: Record<string, any>;
  }) => {
    const data = {
      password: values.password,
      uidb64: uidb64,
      token: token,
    };
    const result = await handleApi({
      type: 'auth',
      method: 'patch',
      data,
      url: `/password-reset-complete/`,
    });
    const handleSuccessAction = () => {
      setTimeout(() => {
        setShow({ ...show, loginPopup: true, loginContent: 'login' });
      }, 3000);
    };
    handleActions({
      result,
      success: {
        title: t(`${I18N_KEY_PREFIX}.resetPsw.success`),
        action: handleSuccessAction,
      },
      error: {
        title: t(`${I18N_KEY_PREFIX}.resetPsw.fail`),
      },
    });
  };

  useEffect(() => {
    if (!init) {
      if (isExistTokens) {
        setAuth(true);
        getGroup();
        getMemberInfo();
      } else {
        setAuth(false);
      }
    }
  }, [authTokens.access, init]);

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
    if (authTokens) {
      setInit(false);
    }
  }, [authTokens.access]);

  const contextData: AuthContextData = {
    auth,
    group,
    info,
    isInternalUser,
    loading,
    authTokens,
    handleLogin,
    handleSignup,
    handleResendEmail,
    handleVerifyEmail,
    handleLogout,
    handleResetPswEmail,
    handleResetPsw,
    handleGoogleSignIn,
    getMemberInfo,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {init ? null : children}
    </AuthContext.Provider>
  );
};
