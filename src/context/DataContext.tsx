import React, { createContext, useContext, ReactNode } from 'react';

import { ContextItem } from 'types/utils';

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
import useHabitat from 'hooks/items/useHabitat';
import useFishing from 'hooks/items/useFishing';

interface DataProviderProps {
  children?: ReactNode;
}

const DataContext = createContext<any>(null);
export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }: DataProviderProps) => {
  const {
    sites: weatherSites,
    getDataSites: getWeatherSites,
    detail: weatherDetail,
    getDataDetail: getWeatherDetail,
    raws: weatherRaws,
    getDataRaws: getWeatherRaws,
    fields: weatherFields,
    getDataFields: getWeatherFields,
    series: weatherSeries,
    getDataSeries: getWeatherSeries,
  } = useWeather();

  const {
    sites: seaTemperatureSites,
    getDataSites: getSeaTemperatureSites,
    detail: seaTemperatureDetail,
    getDataDetail: getSeaTemperatureDetail,
    raws: seaTemperatureRaws,
    getDataRaws: getSeaTemperatureRaws,
    fields: seaTemperatureFields,
    getDataFields: getSeaTemperatureFields,
    series: seaTemperatureSeries,
    getDataSeries: getSeaTemperatureSeries,
  } = useSeaTemperature();

  const {
    sites: coralDivSites,
    getDataSites: getCoralDivSites,
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
    sites: coralRecSites,
    getDataSites: getCoralRecSites,
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
    sites: coralBleachSites,
    getDataSites: getCoralBleachSites,
    raws: coralBleachRaws,
    getDataRaws: getCoralBleachRaws,
    series: coralBleachSeries,
    getDataSeries: getCoralBleachSeries,
    fields: coralBleachFields,
    getDataFields: getCoralBleachFields,
  } = useCoralBleach();

  const {
    sites: coralCommSites,
    getDataSites: getCoralCommSites,
    raws: coralCommRaws,
    getDataRaws: getCoralCommRaws,
    series: coralCommSeries,
    getDataSeries: getCoralCommSeries,
    fields: coralCommFields,
    getDataFields: getCoralCommFields,
  } = useCoralComm();

  const {
    sites: zoobenthosSites,
    getDataSites: getZoobenthosSites,
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
    sites: plantSites,
    getDataSites: getPlantSites,
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
    sites: birdNetSoundSites,
    getDataSites: getBirdNetSoundSites,
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
    sites: fishDivSites,
    getDataSites: getFishDivSites,
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
    sites: waterSites,
    getDataSites: getWaterSites,
    raws: waterRaws,
    getDataRaws: getWaterRaws,
    fields: waterFields,
    getDataFields: getWaterFields,
    series: waterSeries,
    getDataSeries: getWaterSeries,
  } = useWater();

  const {
    sites: habitatSites,
    getDataSites: getHabitatSites,
    raws: habitatRaws,
    getDataRaws: getHabitatRaws,
    fields: habitatFields,
    getDataFields: getHabitatFields,
    series: habitatSeries,
    getDataSeries: getHabitatSeries,
  } = useHabitat();

  const {
    sites: terreSoundIndexSites,
    getDataSites: getTerreSoundIndexSites,
    raws: terreSoundIndexRaws,
    getDataRaws: getTerreSoundIndexRaws,
    fields: terreSoundIndexFields,
    getDataFields: getTerreSoundIndexFields,
    series: terreSoundIndexSeries,
    getDataSeries: getTerreSoundIndexSeries,
  } = useTerreSoundIndex();

  const {
    sites: oceanSoundIndexSites,
    getDataSites: getOceanSoundIndexSites,
    raws: oceanSoundIndexRaws,
    getDataRaws: getOceanSoundIndexRaws,
    fields: oceanSoundIndexFields,
    getDataFields: getOceanSoundIndexFields,
    series: oceanSoundIndexSeries,
    getDataSeries: getOceanSoundIndexSeries,
  } = useOceanSoundIndex();

  const {
    sites: bioSoundSites,
    getDataSites: getBioSoundSites,
    raws: bioSoundRaws,
    getDataRaws: getBioSoundRaws,
    series: bioSoundSeries,
    getDataSeries: getBioSoundSeries,
    fields: bioSoundFields,
    getDataFields: getBioSoundFields,
  } = useBioSound();

  const {
    sites: otolithSites,
    getDataSites: getOtolithSites,
    raws: otolithRaws,
    getDataRaws: getOtolithRaws,
    series: otolithSeries,
    getDataSeries: getOtolithSeries,
    fields: otolithFields,
    getDataFields: getOtolithFields,
  } = useOtolith();

  const {
    raws: fishingRaws,
    getDataRaws: getFishingRaws,
    fields: fishingFields,
    getDataFields: getFishingFields,
  } = useFishing();

  const contextData: ContextItem[] = [
    {
      id: 'weather',
      depositarUrl: 'https://data.depositar.io/dataset/ltser-lyudao-weather',
      sites: weatherSites,
      getSites: getWeatherSites,
      detail: weatherDetail,
      getDetail: getWeatherDetail,
      raws: weatherRaws,
      getRaws: getWeatherRaws,
      fields: weatherFields,
      getFields: getWeatherFields,
      series: weatherSeries,
      getSeries: getWeatherSeries,
    },
    {
      id: 'sea-temperature',
      depositarUrl:
        'https://data.depositar.io/dataset/ltser-lyudao-seatemperature',
      sites: seaTemperatureSites,
      getSites: getSeaTemperatureSites,
      detail: seaTemperatureDetail,
      getDetail: getSeaTemperatureDetail,
      raws: seaTemperatureRaws,
      getRaws: getSeaTemperatureRaws,
      fields: seaTemperatureFields,
      getFields: getSeaTemperatureFields,
      series: seaTemperatureSeries,
      getSeries: getSeaTemperatureSeries,
    },
    {
      id: 'coral-div',
      depositarUrl: 'https://data.depositar.io/dataset/ltser-lyudao-coraldiv',
      sites: coralDivSites,
      getSites: getCoralDivSites,
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
      depositarUrl: 'https://data.depositar.io/dataset/ltser-lyudao-coraljuv',
      sites: coralRecSites,
      getSites: getCoralRecSites,
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
      depositarUrl:
        'https://data.depositar.io/dataset/ltser-lyudao-coralbleach',
      sites: coralBleachSites,
      getSites: getCoralBleachSites,
      raws: coralBleachRaws,
      getRaws: getCoralBleachRaws,
      series: coralBleachSeries,
      getSeries: getCoralBleachSeries,
      fields: coralBleachFields,
      getFields: getCoralBleachFields,
    },
    {
      id: 'coral-comm',
      depositarUrl: 'https://data.depositar.io/dataset/ltser-lyudao-coralcomm',
      sites: coralCommSites,
      getSites: getCoralCommSites,
      raws: coralCommRaws,
      getRaws: getCoralCommRaws,
      series: coralCommSeries,
      getSeries: getCoralCommSeries,
      fields: coralCommFields,
      getFields: getCoralCommFields,
    },
    {
      id: 'zoobenthos',
      depositarUrl: 'https://data.depositar.io/dataset/ltser-lyudao-zoobenthos',
      sites: zoobenthosSites,
      getSites: getZoobenthosSites,
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
      depositarUrl: 'https://data.depositar.io/dataset/ltser-lyudao-plant',
      sites: plantSites,
      getSites: getPlantSites,
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
      depositarUrl:
        'https://data.depositar.io/dataset/ltser-lyudao-birdnetsound',
      sites: birdNetSoundSites,
      getSites: getBirdNetSoundSites,
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
      depositarUrl: 'https://data.depositar.io/dataset/ltser-lyudao-fishdiv',
      sites: fishDivSites,
      getSites: getFishDivSites,
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
      depositarUrl: 'https://data.depositar.io/dataset/ltser-lyudao-water',
      sites: waterSites,
      getSites: getWaterSites,
      raws: waterRaws,
      getRaws: getWaterRaws,
      fields: waterFields,
      getFields: getWaterFields,
      series: waterSeries,
      getSeries: getWaterSeries,
    },
    {
      id: 'habitat',
      depositarUrl: 'https://data.depositar.io/dataset/ltser-lyudao-habitat',
      sites: habitatSites,
      getSites: getHabitatSites,
      raws: habitatRaws,
      getRaws: getHabitatRaws,
      fields: habitatFields,
      getFields: getHabitatFields,
      series: habitatSeries,
      getSeries: getHabitatSeries,
    },
    {
      id: 'terre-sound-index',
      depositarUrl:
        'https://data.depositar.io/dataset/ltser-lyudao-terresoundindex',
      sites: terreSoundIndexSites,
      getSites: getTerreSoundIndexSites,
      raws: terreSoundIndexRaws,
      getRaws: getTerreSoundIndexRaws,
      fields: terreSoundIndexFields,
      getFields: getTerreSoundIndexFields,
      series: terreSoundIndexSeries,
      getSeries: getTerreSoundIndexSeries,
    },
    {
      id: 'ocean-sound-index',
      depositarUrl: 'https://data.depositar.io/dataset/ltser-lyudao-oceansound',
      sites: oceanSoundIndexSites,
      getSites: getOceanSoundIndexSites,
      raws: oceanSoundIndexRaws,
      getRaws: getOceanSoundIndexRaws,
      fields: oceanSoundIndexFields,
      getFields: getOceanSoundIndexFields,
      series: oceanSoundIndexSeries,
      getSeries: getOceanSoundIndexSeries,
    },
    {
      id: 'bio-sound',
      depositarUrl: 'https://data.depositar.io/dataset/ltser-lyudao-biosound',
      sites: bioSoundSites,
      getSites: getBioSoundSites,
      raws: bioSoundRaws,
      getRaws: getBioSoundRaws,
      series: bioSoundSeries,
      getSeries: getBioSoundSeries,
      fields: bioSoundFields,
      getFields: getBioSoundFields,
    },
    {
      id: 'otolith',
      depositarUrl: 'https://data.depositar.io/dataset/ltser-lyudao-otolith',
      sites: otolithSites,
      getSites: getOtolithSites,
      raws: otolithRaws,
      getRaws: getOtolithRaws,
      series: otolithSeries,
      getSeries: getOtolithSeries,
      fields: otolithFields,
      getFields: getOtolithFields,
    },
    {
      id: 'fishing',
      depositarUrl: 'https://data.depositar.io/dataset/ltser-lyudao-fishing',
      raws: fishingRaws,
      getRaws: getFishingRaws,
      fields: fishingFields,
      getFields: getFishingFields,
    },
  ];

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};
