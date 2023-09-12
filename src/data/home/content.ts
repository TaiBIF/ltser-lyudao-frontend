import { map, zipObject, Dictionary } from 'lodash';
import { DateTime } from 'luxon';

import { TabItem, SurveyMapParams, TimeRangeItem } from 'types/home';
import { ObservationItem, SelectItem } from 'types/utils';

import localityData from 'data/home/locality.json';

export const surveyMapParams: SurveyMapParams = {
  center: [22.6581038, 121.4870464],
  zoom: 14,
};

export const tabList: TabItem[] = [
  {
    id: 'ecologicalObservation',
    title: '生態觀測',
    subtitle: ['Ecological', 'Observation'],
    link: 'ecological-observation',
  },
  {
    id: 'environmentalObservation',
    title: '環境觀測',
    subtitle: ['Environmental', 'Observation'],
    link: 'environmental-observation',
  },
  {
    id: 'socialObservation',
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
    col: 'eventDate',
    title: '年份',
  },
  {
    id: 'locality',
    col: 'verbatimLocality',
    title: '地點名稱',
  },
  {
    id: 'latitude',
    col: 'decimalLatitude',
    title: '地點經度',
  },
  {
    id: 'longitude',
    col: 'decimalLongitude',
    title: '地點緯度',
  },
  {
    id: 'annualAirTemperature',
    plan: 'weather',
    col: 'airTemperature',
    title: '年均溫',
  },
  {
    id: 'annualPrecipitation',
    plan: 'weather',
    col: 'precipitation',
    title: '年雨量',
  },
  {
    id: 'annualSeaTemperature',
    plan: 'sea-temperature',
    col: 'seaTemperature',
    title: '年均海溫',
  },
  {
    id: 'coralDiv',
    plan: 'coral-div',
    col: 'scientificName',
    title: '珊瑚礁種類數',
  },
  {
    id: 'coralRec',
    plan: 'coral-rec',
    col: 'individualCount',
    title: '珊瑚礁入添數量',
  },
];

export const surveyMapItemList: SelectItem[] = [
  {
    id: 'annualAirTemperature',
    plan: 'weather',
    title: '年均溫',
  },
  {
    id: 'seasonalAirTemperature',
    plan: 'weather',
    title: '季均溫',
  },
  {
    id: 'annualPrecipitation',
    plan: 'weather',
    title: '年雨量',
  },
  {
    id: 'seasonalPrecipitation',
    plan: 'weather',
    title: '季雨量',
  },
  {
    id: 'annualSeaTemperature',
    plan: 'sea-temperature',
    title: '年均海溫',
  },
  {
    id: 'seasonalSeaTemperature',
    plan: 'sea-temperature',
    title: '季均海溫',
  },
  {
    id: 'coralDiv',
    plan: 'coral-div',
    title: '珊瑚礁種類數',
  },
  {
    id: 'coralRec',
    plan: 'coral-rec',
    title: '珊瑚礁入添數量',
  },
  {
    id: 'zoobenthos',
    plan: 'zoobenthos',
    title: '底棲動物種類數',
  },
  {
    id: 'plant',
    plan: 'plant',
    title: '陸域植物種類數',
  },
  {
    id: 'birdNetSound',
    plan: 'bird-net-sound',
    title: '鳥種數(鳥音)',
  },
  {
    id: 'fishDiv',
    plan: 'fish-div',
    title: '魚種數',
  },
];

export const defaultAllDetail = {
  weather: {
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
  },
  seaTemperature: {
    site: 'CK',
    year: '2023',
    annual: {
      seaTemperature: 0,
    },
    seasonal: [
      {
        season: '1-3',
        seaTemperature: 0,
      },
      {
        season: '4-6',
        seaTemperature: 0,
      },
      {
        season: '7-9',
        seaTemperature: 0,
      },
      {
        season: '10-12',
        seaTemperature: 0,
      },
    ],
  },
  coralRec: {
    site: 'GG',
    year: '2023',
    count: 0,
  },
  plant: {
    site: '001',
    year: '2023',
    seasonal: [
      {
        season: '1-3',
        count: 0,
      },
      {
        season: '4-6',
        count: 0,
      },
      {
        season: '7-9',
        count: 0,
      },
      {
        season: '10-12',
        count: 0,
      },
    ],
  },
  birdNetSound: {
    site: 'YZH',
    year: '2023',
    seasonal: [
      {
        season: '1-3',
        count: 0,
      },
      {
        season: '4-6',
        count: 0,
      },
      {
        season: '7-9',
        count: 0,
      },
      {
        season: '10-12',
        count: 0,
      },
    ],
  },
  fishDiv: {
    site: 'KZY',
    year: '2023',
    seasonal: [
      {
        season: '1-3',
        count: 0,
      },
      {
        season: '4-6',
        count: 0,
      },
      {
        season: '7-9',
        count: 0,
      },
      {
        season: '10-12',
        count: 0,
      },
    ],
  },
  zoobenthos: {
    site: 'KZY',
    year: '2023',
    seasonal: [
      {
        season: '1-3',
        count: 0,
      },
      {
        season: '4-6',
        count: 0,
      },
      {
        season: '7-9',
        count: 0,
      },
      {
        season: '10-12',
        count: 0,
      },
    ],
  },
};

export const defaultTimeRange: TimeRangeItem = {
  site: '',
  start: '',
  end: '',
};

export const defaultSites = {
  sites: ['001', 'KZY', '032'],
};

export const defaultIdTimeRange = {
  site: 'A1',
  // start: `${DateTime.now().toFormat('yyyy')}-01-01`,
  start: '2022-01-01',
  end: DateTime.now().toFormat('yyyy-MM-dd'),
};

export const weatherDetail = {
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

export const seaTemperatureDeatil = {
  site: 'CK',
  year: '2023',
  annual: {
    seaTemperature: 0,
  },
  seasonal: [
    {
      season: '1-3',
      seaTemperature: 0,
    },
    {
      season: '4-6',
      seaTemperature: 0,
    },
    {
      season: '7-9',
      seaTemperature: 0,
    },
    {
      season: '10-12',
      seaTemperature: 0,
    },
  ],
};

export const coralRecDetail = {
  site: 'GG',
  year: '2023',
  count: 0,
};

export const coralDivDetail = {
  site: 'GG',
  year: '2023',
  count: 0,
};

export const plantDetail = {
  site: '001',
  year: '2023',
  seasonal: [
    {
      season: '1-3',
      count: 0,
    },
    {
      season: '4-6',
      count: 0,
    },
    {
      season: '7-9',
      count: 0,
    },
    {
      season: '10-12',
      count: 0,
    },
  ],
};

export const birdNetSoundDetail = {
  site: 'YZH',
  year: '2023',
  seasonal: [
    {
      season: '1-3',
      count: 0,
    },
    {
      season: '4-6',
      count: 0,
    },
    {
      season: '7-9',
      count: 0,
    },
    {
      season: '10-12',
      count: 0,
    },
  ],
};

export const fishDivDetail = {
  site: 'KZY',
  year: '2023',
  seasonal: [
    {
      season: '1-3',
      count: 0,
    },
    {
      season: '4-6',
      count: 0,
    },
    {
      season: '7-9',
      count: 0,
    },
    {
      season: '10-12',
      count: 0,
    },
  ],
};

export const zoobenthosDetail = {
  site: 'KZY',
  year: '2023',
  seasonal: [
    {
      season: '1-3',
      count: 0,
    },
    {
      season: '4-6',
      count: 0,
    },
    {
      season: '7-9',
      count: 0,
    },
    {
      season: '10-12',
      count: 0,
    },
  ],
};

export const time = [
  {
    time: '',
    windSpeed: '',
    windDirection: '',
    precipitation: '',
    airTemperature: '',
  },
];
