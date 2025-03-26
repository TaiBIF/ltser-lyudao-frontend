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

const HeaderContext = createContext<any>(null);
export const useHeaderContext = () => useContext(HeaderContext);

interface HeaderProviderProps {
  children: ReactNode;
}

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const initialState = {
    menu3: false,
    menu3Map: {},
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

  const menu3Refs = useRef<Record<string, HTMLDivElement | null>>({});
  const mainMenuRef = useRef<HTMLDivElement>(null);
  const loginPopupRef = useRef<HTMLDivElement>(null);
  const menuMegaRef = useRef<HTMLDivElement>(null);
  const itemboxRefs = useRef<{ [key: string]: HTMLDivElement }>({});
  const secMenuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const [lastMenu3Key, setLastMenu3Key] = useState<string | null>(null);

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

  const handleMenu3Click = (elementID: string) => {
    // 單純管理 menu_3 開關
    setShow((prev) => ({
      ...prev,
      menu3Map: {
        // 這裡單獨管理不同 elementID 的開關
        ...prev.menu3Map,
        [elementID]: !prev.menu3Map[elementID],
      },
    }));
    setLastMenu3Key(elementID); // 紀錄當前是操作哪一個 element
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
    menu3Refs,
    lastMenu3Key,
    mainMenuRef,
    loginPopupRef,
    menuMegaRef,
    itemboxRefs,
    secMenuRef,
    langMenuRef,
    handleMenuClick,
    handleMenu3Click,
    handleMenuMouseLeave,
    handleLoginClick,
    handleItemboxRef,
    about,
    setAbout,
    isMobile,
  };

  return (
    <HeaderContext.Provider value={contextData}>
      {children}
    </HeaderContext.Provider>
  );
};
