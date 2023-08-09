import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useRef,
} from 'react';

import { Dictionary } from 'lodash';

import { SurveyMapFilterItem } from 'types/home';
import { ShowState } from 'types/utils';

import { gsapFade } from 'utils/animation';

interface SurveyMapProviderProps {
  children: ReactNode;
}

const SurveyMapContext = createContext<any>(null);
export const useSurveyMapContext = () => useContext(SurveyMapContext);

export const SurveyMapProvider = ({ children }: SurveyMapProviderProps) => {
  const [filter, setFilter] = useState<SurveyMapFilterItem>({
    id: '',
    year: '2023',
    item: '',
    chart: false,
  });
  const [show, setShow] = useState<ShowState>({
    downloadPopup: false,
  });
  const downloadPopupRef = useRef<HTMLDivElement>(null);
  const [idData, setIdData] = useState<Dictionary<number | string>>({});

  const handleDownloadPopup = (action: string) => {
    const target = downloadPopupRef.current;
    if (target) {
      setShow({ ...show, downloadPopup: action === 'show' ? true : false });
      gsapFade(action === 'show' ? 'in' : 'out', target);
    }
  };

  const contextData = {
    filter,
    setFilter,
    idData,
    setIdData,
    show,
    downloadPopupRef,
    handleDownloadPopup,
  };

  return (
    <SurveyMapContext.Provider value={contextData}>
      {children}
    </SurveyMapContext.Provider>
  );
};
