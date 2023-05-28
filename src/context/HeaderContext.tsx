import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useRef,
} from 'react';

import { HeaderShowState } from 'types/common';

import { gsapFade } from 'utils/animation';

const HeaderContaxt = createContext<any>(null);
export const useHeaderContext = () => useContext(HeaderContaxt);

interface HeaderProviderProps {
  children: ReactNode;
}

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [show, setShow] = useState<HeaderShowState>({
    menu3: false,
    mainMenu: false,
    mobile: false,
    loginPopup: false,
  });

  const m3titleRef = useRef<HTMLDivElement>(null);
  const menu3Ref = useRef<HTMLDivElement>(null);
  const mainMenuRef = useRef<HTMLDivElement>(null);
  const loginPopupRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    const key = target.getAttribute('data-target') as keyof HeaderShowState;
    setShow({ ...show, [key]: !show[key] });
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

  const contextData = {
    show,
    setShow,
    m3titleRef,
    menu3Ref,
    mainMenuRef,
    loginPopupRef,
    handleLoginClick,
    handleMenuClick,
    handleMenuMouseLeave,
  };

  return (
    <HeaderContaxt.Provider value={contextData}>
      {children}
    </HeaderContaxt.Provider>
  );
};
