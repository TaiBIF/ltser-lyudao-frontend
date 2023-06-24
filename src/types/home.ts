import { LatLngExpression } from 'leaflet';

export type EnterState = {
  s2: boolean;
  s3: boolean;
  s4: boolean;
};

export type TabItem = {
  id: number | string;
  title: string;
  subtitle: [string, string];
  link: string;
};

export type SurveyMapParams = {
  center: LatLngExpression;
  zoom: number;
};

export type LocalityItem = {
  _id: number;
  locationID: string;
  region: string;
  locality: string;
  verbatimLocality: string;
  decimalLatitude: number;
  decimalLongitude: number;
  country: string;
  county: string;
  municipality: string;
};

export type SiteItem = {
  sites: string[];
};

export type TimeRangeItem = {
  site: string;
  start: string;
  end: string;
};

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

type SurveyMapItemTypes = WeatherItem | SeaTemperatureItem;

export type AnnualSeasonalItem = {
  site: string;
  year: string;
  annual: SurveyMapItemTypes;
  seasonal: SurveyMapItemTypes[];
};

export type CountItem = {
  site: string;
  year: string;
  count: number;
};

export type DetailItem = AnnualSeasonalItem | CountItem;

export type FilterItem = {
  id: string;
  year: string;
  item: string;
};
