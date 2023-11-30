import useWindowDimensions from 'hooks/utils/useWindowDimensions';
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useRef,
  useEffect,
} from 'react';
import { useLocation } from 'react-router-dom';

import { HeaderMenuItem, HeaderShowState } from 'types/common';

import { gsapFade } from 'utils/animation';

const HeaderContaxt = createContext<any>(null);
export const useHeaderContext = () => useContext(HeaderContaxt);

interface HeaderProviderProps {
  children: ReactNode;
}

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const initialState = {
    menu3: false,
    mainMenu: false,
    mobile: false,
    loginPopup: false,
    loginContent: 'login',
    menuMega: false,
    itembox: {},
    secMenu: false,
    langMenu: false,
  };
  const [show, setShow] = useState<HeaderShowState>({ ...initialState });
  const [about, setAbout] = useState<any>({});
  const { pathname } = useLocation();

  const menu3Ref = useRef<HTMLDivElement>(null);
  const mainMenuRef = useRef<HTMLDivElement>(null);
  const loginPopupRef = useRef<HTMLDivElement>(null);
  const menuMegaRef = useRef<HTMLDivElement>(null);
  const itemboxRefs = useRef<{ [key: string]: HTMLDivElement }>({});
  const secMenuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const { width } = useWindowDimensions();

  const isMobile = width && width < 1279;

  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    const targetKey = target.getAttribute('data-target');
    if (isMobile) {
      if (targetKey) {
        setShow({ ...show, [targetKey]: !show[targetKey], mobile: true });
      }
    } else {
      if (targetKey) {
        setShow({ ...show, [targetKey]: !show[targetKey], mobile: false });
      }
    }
  };

  const handleMenuMouseLeave = () => {
    setShow({ ...show, menu3: false });
  };

  const handleLoginClick = (action: string) => {
    const target = loginPopupRef.current;
    if (target) {
      setShow({ ...show, loginPopup: action === 'show' ? true : false });
      gsapFade(action === 'show' ? 'in' : 'out', target);
    }
  };

  const handleItemboxRef = (key: string) => (element: HTMLDivElement) => {
    if (element) {
      itemboxRefs.current[key] = element;
    } else {
      delete itemboxRefs.current[key];
    }
  };

  useEffect(() => {
    setShow({ ...initialState });
  }, [pathname]);

  const contextData = {
    show,
    setShow,
    menu3Ref,
    mainMenuRef,
    loginPopupRef,
    menuMegaRef,
    itemboxRefs,
    secMenuRef,
    langMenuRef,
    handleMenuClick,
    handleMenuMouseLeave,
    handleLoginClick,
    handleItemboxRef,
    about,
    setAbout,
    isMobile,
  };

  return (
    <HeaderContaxt.Provider value={contextData}>
      {children}
    </HeaderContaxt.Provider>
  );
};
