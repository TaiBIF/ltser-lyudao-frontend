import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useRef,
} from 'react';

import { ShowState } from 'types/siteData';

import { gsapFade } from 'utils/animation';

const EcoContext = createContext<any>(null);
export const useEcoContext = () => useContext(EcoContext);

interface EcoProviderProps {
  children: ReactNode;
}

export const EcoProvider = ({ children }: EcoProviderProps) => {
  const [show, setShow] = useState<ShowState>({
    downloadPopup: false,
  });
  const downloadPopupRef = useRef<HTMLDivElement>(null);

  const handleLoginClick = (action: string) => {
    const target = downloadPopupRef.current;
    if (target) {
      setShow({ ...show, downloadPopup: action === 'show' ? true : false });
      gsapFade(action === 'show' ? 'in' : 'out', target);
    }
  };

  const contextData = {
    show,
    downloadPopupRef,
    handleLoginClick,
  };

  return (
    <EcoContext.Provider value={contextData}>{children}</EcoContext.Provider>
  );
};
