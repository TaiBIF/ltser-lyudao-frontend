import React, { createContext, useContext, ReactNode, useState } from 'react';

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

  const contextData = {
    filter,
    setFilter,
  };

  return (
    <SurveyMapContext.Provider value={contextData}>
      {children}
    </SurveyMapContext.Provider>
  );
};
