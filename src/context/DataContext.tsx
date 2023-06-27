import React, { createContext, useContext, ReactNode } from 'react';

import useWeather from 'hooks/useWeather';
import useSeaTemperature from 'hooks/useSeaTemperature';
import useCoralDiv from 'hooks/useCoralDiv';
import useCoralRec from 'hooks/useCoralRec';
import useFishDiv from 'hooks/useFishDiv';
import usePlant from 'hooks/usePlant';
import useBirdNetSound from 'hooks/useBirdNetSound';

interface DataProviderProps {
  children?: ReactNode;
}

const DataContext = createContext<any>(null);
export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }: DataProviderProps) => {
  const { detail: weatherDetail, getDataDetail: getWeatherDataDetail } =
    useWeather();
  const {
    detail: seaTemperatureDetail,
    getDataDetail: getSeaTemperatureDataDetail,
  } = useSeaTemperature();
  const { detail: coralDivDetail, getDataDetail: getCoralDivDataDetail } =
    useCoralDiv();
  const { detail: coralRecDetail, getDataDetail: getCoralRecDataDetail } =
    useCoralRec();
  const { detail: plantDetail, getDataDetail: getPlantDataDetail } = usePlant();
  const {
    detail: birdNetSoundDetail,
    getDataDetail: getBirdNetSoundDataDetail,
  } = useBirdNetSound();
  const { detail: fishDivDetail, getDataDetail: getFishDivDataDetail } =
    useFishDiv();

  const contextData = {
    weatherDetail,
    seaTemperatureDetail,
    coralDivDetail,
    coralRecDetail,
    plantDetail,
    birdNetSoundDetail,
    fishDivDetail,
    getWeatherDataDetail,
    getSeaTemperatureDataDetail,
    getCoralDivDataDetail,
    getCoralRecDataDetail,
    getPlantDataDetail,
    getBirdNetSoundDataDetail,
    getFishDivDataDetail,
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};
