export type WeatherItem = {
  [key: string]: any;
  season?: string;
  airTemperature: number;
  precipitation: number;
};

export type SeaTemperatureItem = {
  [key: string]: any;
  season?: string;
  seaTemperature: number;
};

export type SeasonalCountItem = {
  [key: string]: any;
  season?: string;
  count: number;
};

type SurveyMapItemTypes = WeatherItem | SeaTemperatureItem | SeasonalCountItem;

export type AnnualSeasonalItem = {
  site: string;
  year: string;
  annual: SurveyMapItemTypes;
  seasonal: SurveyMapItemTypes[];
};

export type SeasonalItem = {
  site: string;
  year: string;
  seasonal: SurveyMapItemTypes[];
};

export type CountItem = {
  site: string;
  year: string;
  count: number;
};

export type DetailItemTypes = AnnualSeasonalItem | SeasonalItem | CountItem;

export type AllDeatilItem = {
  [key: string]: any;
  weather: WeatherItem;
  seaTemperature: SeaTemperatureItem;
  coralDiv: CountItem;
  coralRec: CountItem;
  plant: SeasonalItem;
  birdNetSound: SeasonalItem;
  fishDiv: SeasonalItem;
  zoobenthos: SeasonalItem;
};
