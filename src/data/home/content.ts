import { map, zipObject, Dictionary } from 'lodash';
import { DateTime } from 'luxon';

import { TabItem, SurveyMapParams, TimeRangeItem, PlanItem } from 'types/home';
import { ObservationItem, SelectItem, SiteObservationItem } from 'types/utils';

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
    id: 'items',
    col: 'items',
    title: '觀測項目',
  },
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
    category: 'environmental',
    plan: 'weather',
    col: 'airTemperature',
    title: '年均溫',
  },
  {
    id: 'annualPrecipitation',
    category: 'environmental',
    plan: 'weather',
    col: 'precipitation',
    title: '年雨量',
  },
  {
    id: 'annualSeaTemperature',
    category: 'environmental',
    plan: 'sea-temperature',
    col: 'seaTemperature',
    title: '年均海溫',
  },
  {
    id: 'coralDiv',
    category: 'ecological',
    plan: 'coral-div',
    col: 'scientificName',
    title: '珊瑚礁種類數',
  },
  {
    id: 'coralRec',
    category: 'ecological',
    plan: 'coral-rec',
    col: 'individualCount',
    title: '珊瑚礁入添數量',
  },
  {
    id: 'aquaticfauna',
    category: 'ecological',
    plan: 'aquaticfauna',
    col: 'scientificName',
    title: '溪流生物物種數',
  },
];

export const planList: PlanItem[] = [
  {
    id: 'coral-div',
    title: '珊瑚多樣性',
  },
  {
    id: 'coral-rec',
    title: '珊瑚入添',
  },
  {
    id: 'coral-bleach',
    title: '珊瑚白化',
  },
  {
    id: 'coral-comm',
    title: '珊瑚群聚',
  },
  {
    id: 'otolith',
    title: '耳石',
  },
  {
    id: 'ocean-sound',
    title: '海域聲學-調查事件',
  },
  {
    id: 'fish-div',
    title: '魚類多樣性',
  },
  {
    id: 'fishing',
    title: '休閒漁業',
  },
  {
    id: 'plant',
    title: '陸域植物',
  },
  {
    id: 'terre-sound',
    title: '陸域聲學-調查事件',
  },
  {
    id: 'terre-sound-index',
    title: '陸域聲學-聲音指數',
  },
  {
    id: 'bird-net-sound',
    title: '陸域聲學-鳥音辨識',
  },
  {
    id: 'bio-sound',
    title: '陸域聲學-生物辨識',
  },
  {
    id: 'water',
    title: '海域水質',
  },
  {
    id: 'habitat',
    title: '棲地評估',
  },
  {
    id: 'zoobenthos',
    title: '底棲動物',
  },
  {
    id: 'aquatic-fauna',
    title: '溪流生物',
  },
  {
    id: 'stream',
    title: '溪流水質',
  },
  {
    id: 'weather',
    title: '氣象觀測',
  },
  {
    id: 'ocean-env',
    title: '海洋觀測',
  },
  {
    id: 'sea-temperature',
    title: '海洋觀測-海溫',
  },
  {
    id: 'issue',
    title: '社會觀測-議題盤點',
  },
];

export const surveyMapItemList: SelectItem[] = [
  {
    id: 'annualAirTemperature',
    type: 'environmental',
    plan: 'weather',
    title: '年均溫',
    redirect: false,
  },
  {
    id: 'seasonalAirTemperature',
    type: 'environmental',
    plan: 'weather',
    title: '季均溫',
    redirect: null,
  },
  {
    id: 'annualPrecipitation',
    type: 'environmental',
    plan: 'weather',
    title: '年雨量',
    redirect: false,
  },
  {
    id: 'seasonalPrecipitation',
    type: 'environmental',
    plan: 'weather',
    title: '季雨量',
    redirect: null,
  },
  {
    id: 'annualSeaTemperature',
    type: 'environmental',
    plan: 'sea-temperature',
    title: '年均海溫',
    redirect: false,
  },
  {
    id: 'seasonalSeaTemperature',
    type: 'environmental',
    plan: 'sea-temperature',
    title: '季均海溫',
    redirect: null,
  },
  {
    id: 'coralDiv',
    type: 'ecological',
    plan: 'coral-div',
    title: '珊瑚礁種類數',
    redirect: true,
  },
  {
    id: 'coralRec',
    type: 'ecological',
    plan: 'coral-rec',
    title: '珊瑚礁入添數量',
    redirect: true,
  },
  {
    id: 'zoobenthos',
    type: 'ecological',
    plan: 'zoobenthos',
    title: '底棲動物種類數',
    redirect: null,
  },
  {
    id: 'plant',
    type: 'ecological',
    plan: 'plant',
    title: '陸域植物種類數',
    redirect: null,
  },
  {
    id: 'birdNetSound',
    type: 'ecological',
    plan: 'bird-net-sound',
    title: '鳥種數(鳥音)',
    redirect: null,
  },
  {
    id: 'fishDiv',
    type: 'ecological',
    plan: 'fish-div',
    title: '魚種數',
    redirect: null,
  },
  {
    id: 'aquaticfauna',
    type: 'ecological',
    plan: 'aquaticfauna',
    title: '溪流生物',
    redirect: null,
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
