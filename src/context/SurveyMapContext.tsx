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
import { AllDeatilItem } from 'types/detail';

interface SurveyMapProviderProps {
  children: ReactNode;
}

const SurveyMapContext = createContext<any>(null);
export const useSurveyMapContext = () => useContext(SurveyMapContext);

export const SurveyMapProvider = ({ children }: SurveyMapProviderProps) => {
  const [filter, setFilter] = useState<SurveyMapFilterItem>({
    id: '', // 測站/樣區
    year: '2023', // 年份
    item: '', // 觀測項目
    chart: false, // 圖表
  });
  const [show, setShow] = useState<ShowState>({
    downloadPopup: false,
  });
  const downloadPopupRef = useRef<HTMLDivElement>(null);
  const [idData, setIdData] = useState<Dictionary<number | string>>({});

  const [allDetail, setAllDetail] = useState<AllDeatilItem | null>(null);

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
    allDetail,
    setAllDetail,
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
