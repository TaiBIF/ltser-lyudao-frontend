import React, { createContext, useContext, ReactNode, useState } from 'react';

import { Dictionary } from 'lodash';

interface SurveyMapProviderProps {
  children: ReactNode;
}

const SurveyMapContext = createContext<any>(null);
export const useSurveyMapContext = () => useContext(SurveyMapContext);

export const SurveyMapProvider = ({ children }: SurveyMapProviderProps) => {
  const [filter, setFilter] = useState({
    id: '',
    year: '2023',
    item: '',
    chart: false,
  });

  const [idData, setIdData] = useState<Dictionary<number | string>>({});

  const contextData = {
    filter,
    setFilter,
    idData,
    setIdData,
  };

  return (
    <SurveyMapContext.Provider value={contextData}>
      {children}
    </SurveyMapContext.Provider>
  );
};
