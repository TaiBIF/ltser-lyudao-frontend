import { map, zipObject, Dictionary } from 'lodash';

import { TabItem, SurveyMapParams } from 'types/home';
import { ObservationItem } from 'types/utils';

import localityData from 'data/home/locality.json';

export const surveyMapParams: SurveyMapParams = {
  center: [22.6581038, 121.4870464],
  zoom: 14,
};

export const tabList: TabItem[] = [
  {
    id: 1,
    title: '生態觀測',
    subtitle: ['Ecological', 'Observation'],
    link: 'ecological-observation',
  },
  {
    id: 2,
    title: '環境觀測',
    subtitle: ['Environmental', 'Observation'],
    link: 'environmental-observation',
  },
  {
    id: 3,
    title: '社會觀測',
    subtitle: ['Social', 'Observation'],
    link: 'social-observation',
  },
];

export const localityList: Dictionary<string | number>[] = map(
  localityData.records,
  (record) => zipObject(map(localityData.fields, 'id'), record)
);

export const surveyMapColList: ObservationItem[] = [
  {
    id: 'year',
    colId: 'eventDate',
    title: '年份',
  },
  {
    id: 'locality',
    colId: 'verbatimLocality',
    title: '地點名稱',
  },
  {
    id: 'latitude',
    colId: 'decimalLatitude',
    title: '地點經度',
  },
  {
    id: 'longitude',
    colId: 'decimalLongitude',
    title: '地點緯度',
  },
  {
    id: 'annualAirTemperature',
    planId: 'weather',
    colId: 'airTemperature',
    title: '年均溫',
  },
  {
    id: 'annualPrecipitation',
    planId: 'weather',
    colId: 'precipitation',
    title: '年雨量',
  },
  {
    id: 'annualSeaTemperature',
    planId: 'seaTemperature',
    colId: 'seaTemperature',
    title: '年均海溫',
  },
  {
    id: 'coralNumber',
    planId: 'coralDiv',
    colId: 'scientificName',
    title: '珊瑚礁種類數',
  },
  {
    id: 'coralAddNumber',
    planId: 'coralAdd',
    colId: 'individualCount',
    title: '珊瑚礁入添數量',
  },
];

export const weatherAllSites = {
  sites: ['001', 'KZY', '032'],
};

export const weatherTimeRangeById = {
  site: 'A1',
  start: '2023-01-01',
  end: '2023-06-20',
};

export const weatherDataById = {
  site: 'A1',
  year: '2023',
  annual: {
    airTemperature: 0,
    precipitation: 0,
  },
  seasonal: [
    {
      season: '1-3',
      airTemperature: 0,
      precipitation: 0,
    },
    {
      season: '4-6',
      airTemperature: 0,
      precipitation: 0,
    },
    {
      season: '7-9',
      airTemperature: 0,
      precipitation: 0,
    },
    {
      season: '10-12',
      airTemperature: 0,
      precipitation: 0,
    },
  ],
};

export const seaTemperature = {
  site: 'CK',
  year: '2023',
  annual: {
    seaTemperature: 20,
  },
  seasonal: [
    {
      season: '1-3',
      seaTemperature: 20,
    },
    {
      season: '4-6',
      seaTemperature: 20,
    },
    {
      season: '7-9',
      seaTemperature: 20,
    },
    {
      season: '10-12',
      seaTemperature: 20,
    },
  ],
};

export const coralRec = {
  site: 'GG',
  year: '2023',
  count: 100,
};

export const plant = {
  site: '001',
  year: '2023',
  seasonal: [
    {
      season: '1-3',
      count: 50,
    },
    {
      season: '4-6',
      count: 50,
    },
    {
      season: '7-9',
      count: 50,
    },
    {
      season: '10-12',
      count: 50,
    },
  ],
};

export const birdNetSound = {
  site: 'YZH',
  year: '2023',
  seasonal: [
    {
      season: '1-3',
      count: 50,
    },
    {
      season: '4-6',
      count: 50,
    },
    {
      season: '7-9',
      count: 50,
    },
    {
      season: '10-12',
      count: 50,
    },
  ],
};

export const fishDiv = {
  site: 'KZY',
  year: '2023',
  seasonal: [
    {
      season: '1-3',
      count: 50,
    },
    {
      season: '4-6',
      count: 50,
    },
    {
      season: '7-9',
      count: 50,
    },
    {
      season: '10-12',
      count: 50,
    },
  ],
};
