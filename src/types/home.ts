import { LatLngExpression } from 'leaflet';

export type EnterState = {
  s2: boolean;
  s3: boolean;
  s4: boolean;
};

export type TabItem = {
  id: number | string;
  style: string;
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

type YearItem = {
  year: string;
  items: string[];
};

export type SiteYearItem = {
  site: string;
  years: YearItem[];
};

export type SiteItem = {
  sites: string[];
};

export type TimeRangeItem = {
  site: string;
  start: string;
  end: string;
};

export type SurveyMapFilterItem = {
  id: string;
  year: string;
  item: string;
  chart: boolean;
};

export type PlanItem = {
  id: string;
  title: string;
};
