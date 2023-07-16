export type CountSeriesItem = {
  [key: string]: number | string;
  time: string;
  count: number;
};

export type WeatherSeriesItem = {
  [key: string]: number | string;
  time: string;
  windSpeed: number;
  windDirection: number;
  precipitation: number;
  airTemperature: number;
};

export type SeaTemperatureSeriesItem = {
  [key: string]: number | string;
  time: string;
  seaTemperature: number;
};

export type OceanSoundIndexSeriesItem = {
  [key: string]: number | string;
  time: string;
  lower_200Hz: number;
  '200_1500Hz': number;
  higher_1500Hz: number;
};

export type TerreSoundIndexSeriesItem = {
  [key: string]: number | string;
  time: string;
  ACI: number;
  ADI: number;
  BI: number;
  NDSI: number;
};

export type WaterSeriesItem = {
  [key: string]: number | string;
  time: string;
  waterTemperature: number;
  DO: number;
  conductivity: number;
  clarity: number;
  TSS: number;
  TBC: number;
  vibrio: number;
};

export type SeriesItemTypes =
  | CountSeriesItem
  | WeatherSeriesItem
  | SeaTemperatureSeriesItem
  | OceanSoundIndexSeriesItem
  | TerreSoundIndexSeriesItem
  | WaterSeriesItem;
