import React, { createContext, useContext, ReactNode, useState } from 'react';

// import useWeather from 'hooks/useWeather';
// import useSeaTemperature from 'hooks/useSeaTemperature';
// import useCoralDiv from 'hooks/useCoralDiv';
// import useCoralRec from 'hooks/useCoralDiv';

interface SurveyMapProviderProps {
  children: ReactNode;
}

const SurveyMapContext = createContext<any>(null);
export const useSurveyMapContext = () => useContext(SurveyMapContext);

export const SurveyMapProvider = ({ children }: SurveyMapProviderProps) => {
  const [filter, setFilter] = useState({
    id: '',
    year: '',
    item: '',
    chart: false,
  });
  // const { detail: weatherDetail, getDataDetail: getWeatherDataDetail } =
  //   useWeather();
  // const {
  //   detail: seaTemperatureDetail,
  //   getDataDetail: getSeaTemperatureDataDetail,
  // } = useSeaTemperature();
  // const { detail: coralDivDetail, getDataDetail: getCoralDivDataDetail } =
  //   useCoralDiv();
  // const { detail: coralRecDetail, getDataDetail: getCoralRecDataDetail } =
  //   useCoralRec();

  const contextData = {
    filter,
    setFilter,
    // weatherDetail,
    // seaTemperatureDetail,
    // coralDivDetail,
    // coralRecDetail,
    // getWeatherDataDetail,
    // getSeaTemperatureDataDetail,
    // getCoralDivDataDetail,
    // getCoralRecDataDetail,
  };

  return (
    <SurveyMapContext.Provider value={contextData}>
      {children}
    </SurveyMapContext.Provider>
  );
};
