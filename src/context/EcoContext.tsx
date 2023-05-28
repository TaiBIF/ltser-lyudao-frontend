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
    download: false,
  });
  const downloadPopupRef = useRef<HTMLDivElement>(null);

  const handleDownloadShowClick = () => {
    const target = downloadPopupRef.current;
    if (target) {
      setShow({ ...show, download: true });
      gsapFade('in', target);
    }
  };
  const handleDownloadCloseClick = () => {
    const target = downloadPopupRef.current;
    if (target) {
      setShow({ ...show, download: false });
      gsapFade('out', target);
    }
  };

  const contextData = {
    show,
    downloadPopupRef,
    handleDownloadShowClick,
    handleDownloadCloseClick,
  };

  return (
    <EcoContext.Provider value={contextData}>{children}</EcoContext.Provider>
  );
};
