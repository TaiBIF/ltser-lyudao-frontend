import React, { createContext, useContext, ReactNode } from 'react';

import useWeather from 'hooks/items/useWeather';
import useSeaTemperature from 'hooks/items/useSeaTemperature';
import useCoralDiv from 'hooks/items/useCoralDiv';
import useCoralRec from 'hooks/items/useCoralRec';
import useCoralBleach from 'hooks/items/useCoralBleach';
import useCoralComm from 'hooks/items/useCoralComm';
import useFishDiv from 'hooks/items/useFishDiv';
import useZoobenthos from 'hooks/items/useZoobenthos';
import usePlant from 'hooks/items/usePlant';
import useBirdNetSound from 'hooks/items/useBirdNetSound';
import useWater from 'hooks/items/useWater';
import useTerreSoundIndex from 'hooks/items/useTerreSoundIndex';
import useOceanSoundIndex from 'hooks/items/useOceanSoundIndex';
import useBioSound from 'hooks/items/useBioSound';
import useOtolith from 'hooks/items/useOtolith';

import { ContextItem } from 'types/utils';

interface DataProviderProps {
  children?: ReactNode;
}

const DataContext = createContext<any>(null);
export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }: DataProviderProps) => {
  const {
    detail: weatherDetail,
    getDataDetail: getWeatherDetail,
    raws: weatherRaws,
    getDataRaws: getWeatherRaws,
    fields: weatherFields,
    getDataFields: getWeatherFields,
  } = useWeather();

  const {
    detail: seaTemperatureDetail,
    getDataDetail: getSeaTemperatureDetail,
    raws: seaTemperatureRaws,
    getDataRaws: getSeaTemperatureRaws,
    fields: seaTemperatureFields,
    getDataFields: getSeaTemperatureFields,
  } = useSeaTemperature();

  const {
    detail: coralDivDetail,
    getDataDetail: getCoralDivDetail,
    raws: coralDivRaws,
    getDataRaws: getCoralDivRaws,
    series: coralDivSeries,
    getDataSeries: getCoralDivSeries,
    fields: coralDivFields,
    getDataFields: getCoralDivFields,
  } = useCoralDiv();

  const {
    detail: coralRecDetail,
    getDataDetail: getCoralRecDetail,
    raws: coralRecRaws,
    getDataRaws: getCoralRecRaws,
    series: coralRecSeries,
    getDataSeries: getCoralRecSeries,
    fields: coralRecFields,
    getDataFields: getCoralRecFields,
  } = useCoralRec();

  const {
    raws: coralBleachRaws,
    getDataRaws: getCoralBleachRaws,
    series: coralBleachSeries,
    getDataSeries: getCoralBleachSeries,
    fields: coralBleachFields,
    getDataFields: getCoralBleachFields,
  } = useCoralBleach();

  const {
    raws: coralCommRaws,
    getDataRaws: getCoralCommRaws,
    series: coralCommSeries,
    getDataSeries: getCoralCommSeries,
    fields: coralCommFields,
    getDataFields: getCoralCommFields,
  } = useCoralComm();

  const {
    raws: zoobenthosRaws,
    getDataRaws: getZoobenthosRaws,
    detail: zoobenthosDetail,
    getDataDetail: getZoobenthosDetail,
    series: zoobenthosSeries,
    getDataSeries: getZoobenthosSeries,
    fields: zoobenthosFields,
    getDataFields: getZoobenthosFields,
  } = useZoobenthos();

  const {
    raws: plantRaws,
    getDataRaws: getPlantRaws,
    detail: plantDetail,
    getDataDetail: getPlantDetail,
    series: plantSeries,
    getDataSeries: getPlantSeries,
    fields: plantFields,
    getDataFields: getPlantFields,
  } = usePlant();

  const {
    detail: birdNetSoundDetail,
    getDataDetail: getBirdNetSoundDetail,
    raws: birdNetSoundRaws,
    getDataRaws: getBirdNetSoundRaws,
    series: birdNetSoundSeries,
    getDataSeries: getBirdNetSoundSeries,
    fields: birdNetSoundFields,
    getDataFields: getBirdNetSoundFields,
  } = useBirdNetSound();

  const {
    detail: fishDivDetail,
    getDataDetail: getFishDivDetail,
    raws: fishDivRaws,
    getDataRaws: getFishDivRaws,
    series: fishDivSeries,
    getDataSeries: getFishDivSeries,
    fields: fishDivFields,
    getDataFields: getFishDivFields,
  } = useFishDiv();

  const {
    raws: waterRaws,
    getDataRaws: getWaterRaws,
    fields: waterFields,
    getDataFields: getWaterFields,
  } = useWater();

  const {
    raws: terreSoundIndexRaws,
    getDataRaws: getTerreSoundIndexRaws,
    fields: terreSoundIndexFields,
    getDataFields: getTerreSoundIndexFields,
  } = useTerreSoundIndex();

  const {
    raws: oceanSoundIndexRaws,
    getDataRaws: getOceanSoundIndexRaws,
    fields: oceanSoundIndexFields,
    getDataFields: getOceanSoundIndexFields,
  } = useOceanSoundIndex();

  const {
    raws: bioSoundRaws,
    getDataRaws: getBioSoundRaws,
    series: bioSoundSeries,
    getDataSeries: getBioSoundSeries,
    fields: bioSoundFields,
    getDataFields: getBioSoundFields,
  } = useBioSound();

  const {
    raws: otolithRaws,
    getDataRaws: getOtolithRaws,
    series: otolithSeries,
    getDataSeries: getOtolithSeries,
    fields: otolithFields,
    getDataFields: getOtolithFields,
  } = useOtolith();

  const contextData: ContextItem[] = [
    {
      id: 'weather',
      detail: weatherDetail,
      getDetail: getWeatherDetail,
      raws: weatherRaws,
      getRaws: getWeatherRaws,
      fields: weatherFields,
      getFields: getWeatherFields,
    },
    {
      id: 'sea-temperature',
      detail: seaTemperatureDetail,
      getDetail: getSeaTemperatureDetail,
      raws: seaTemperatureRaws,
      getRaws: getSeaTemperatureRaws,
      fields: seaTemperatureFields,
      getFields: getSeaTemperatureFields,
    },
    {
      id: 'coral-div',
      detail: coralDivDetail,
      getDetail: getCoralDivDetail,
      raws: coralDivRaws,
      getRaws: getCoralDivRaws,
      series: coralDivSeries,
      getSeries: getCoralDivSeries,
      fields: coralDivFields,
      getFields: getCoralDivFields,
    },
    {
      id: 'coral-rec',
      detail: coralRecDetail,
      getDetail: getCoralRecDetail,
      raws: coralRecRaws,
      getRaws: getCoralRecRaws,
      series: coralRecSeries,
      getSeries: getCoralRecSeries,
      fields: coralRecFields,
      getFields: getCoralRecFields,
    },
    {
      id: 'coral-bleach',
      raws: coralBleachRaws,
      getRaws: getCoralBleachRaws,
      series: coralBleachSeries,
      getSeries: getCoralBleachSeries,
      fields: coralBleachFields,
      getFields: getCoralBleachFields,
    },
    {
      id: 'coral-comm',
      raws: coralCommRaws,
      getRaws: getCoralCommRaws,
      series: coralCommSeries,
      getSeries: getCoralCommSeries,
      fields: coralCommFields,
      getFields: getCoralCommFields,
    },
    {
      id: 'zoobenthos',
      raws: zoobenthosRaws,
      getRaws: getZoobenthosRaws,
      detail: zoobenthosDetail,
      getDetail: getZoobenthosDetail,
      series: zoobenthosSeries,
      getSeries: getZoobenthosSeries,
      fields: zoobenthosFields,
      getFields: getZoobenthosFields,
    },
    {
      id: 'plant',
      raws: plantRaws,
      getRaws: getPlantRaws,
      detail: plantDetail,
      getDetail: getPlantDetail,
      series: plantSeries,
      getSeries: getPlantSeries,
      fields: plantFields,
      getFields: getPlantFields,
    },
    {
      id: 'bird-net-sound',
      raws: birdNetSoundRaws,
      getRaws: getBirdNetSoundRaws,
      detail: birdNetSoundDetail,
      getDetail: getBirdNetSoundDetail,
      series: birdNetSoundSeries,
      getSeries: getBirdNetSoundSeries,
      fields: birdNetSoundFields,
      getFields: getBirdNetSoundFields,
    },
    {
      id: 'fish-div',
      raws: fishDivRaws,
      getRaws: getFishDivRaws,
      detail: fishDivDetail,
      getDetail: getFishDivDetail,
      series: fishDivSeries,
      getSeries: getFishDivSeries,
      fields: fishDivFields,
      getFields: getFishDivFields,
    },
    {
      id: 'water',
      raws: waterRaws,
      getRaws: getWaterRaws,
      fields: waterFields,
      getFields: getWaterFields,
    },
    {
      id: 'terre-sound-index',
      raws: terreSoundIndexRaws,
      getRaws: getTerreSoundIndexRaws,
      fields: terreSoundIndexFields,
      getFields: getTerreSoundIndexFields,
    },
    {
      id: 'ocean-sound-index',
      raws: oceanSoundIndexRaws,
      getRaws: getOceanSoundIndexRaws,
      fields: oceanSoundIndexFields,
      getFields: getOceanSoundIndexFields,
    },
    {
      id: 'bio-sound',
      raws: bioSoundRaws,
      getRaws: getBioSoundRaws,
      series: bioSoundSeries,
      getSeries: getBioSoundSeries,
      fields: bioSoundFields,
      getFields: getBioSoundFields,
    },
    {
      id: 'otolith',
      raws: otolithRaws,
      getRaws: getOtolithRaws,
      series: otolithSeries,
      getSeries: getOtolithSeries,
      fields: otolithFields,
      getFields: getOtolithFields,
    },
  ];

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};
