import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useRef,
  useEffect,
} from 'react';

import { ShowState } from 'types/utils';

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
  const [downloadTarget, setDownloadTarget] = useState('');

  const handleDownloadParams = ({
    item,
    target,
  }: {
    item: string;
    target: string;
  }) => {
    let url;
    let fileName;
    switch (target) {
      case 'species':
        url = `${item}/raws/species`;
        fileName = `${item}_species`;
        break;
      case 'all':
      default:
        url = `${item}/raws`;
        fileName = `${item}`;
        break;
    }
    return { url, fileName };
  };

  const handleDownloadPopup = (action: string) => {
    const popup = downloadPopupRef.current;
    if (popup) {
      setShow({ ...show, downloadPopup: action === 'show' ? true : false });
      gsapFade(action === 'show' ? 'in' : 'out', popup);
    }
  };

  const contextData = {
    show,
    downloadPopupRef,
    handleDownloadPopup,
    downloadTarget,
    setDownloadTarget,
    handleDownloadParams,
  };

  return (
    <EcoContext.Provider value={contextData}>{children}</EcoContext.Provider>
  );
};
