import { map, zipObject, Dictionary } from 'lodash';
import { DateTime } from 'luxon';
import i18n from 'i18next';

import { TabItem, SurveyMapParams, TimeRangeItem, PlanItem } from 'types/home';
import { ObservationItem, SelectItem, SiteObservationItem } from 'types/utils';

import localityData from 'data/home/locality.json';

const PAGE_NAME = 'data';
const COMPONENT_NAME = 'home';
const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

const langPreference = localStorage.getItem('lang');

export const surveyMapParams: SurveyMapParams = {
  center: [22.6581038, 121.4870464],
  zoom: 14,
};

// tabList
// TabItem[]
export const generateAboutTabList = (): TabItem[] => [
  {
    id: 'ecologicalObservation',
    style: '1',
    title: i18n.t(`${I18N_KEY_PREFIX}.aboutTab.ecologicalObservation.title`),
    subtitle: [
      i18n.t(`${I18N_KEY_PREFIX}.aboutTab.ecologicalObservation.subtitle1`),
      i18n.t(`${I18N_KEY_PREFIX}.aboutTab.ecologicalObservation.subtitle2`),
    ],
    link: 'ecological-observation',
  },
  {
    id: 'environmentalObservation',
    style: '2',
    title: i18n.t(`${I18N_KEY_PREFIX}.aboutTab.environmentalObservation.title`),
    subtitle: [
      i18n.t(`${I18N_KEY_PREFIX}.aboutTab.environmentalObservation.subtitle1`),
      i18n.t(`${I18N_KEY_PREFIX}.aboutTab.environmentalObservation.subtitle2`),
    ],
    link: 'environmental-observation',
  },
  {
    id: 'socialObservation',
    style: '3',
    title: i18n.t(`${I18N_KEY_PREFIX}.aboutTab.socialObservation.title`),
    subtitle: [
      i18n.t(`${I18N_KEY_PREFIX}.aboutTab.socialObservation.subtitle1`),
      i18n.t(`${I18N_KEY_PREFIX}.aboutTab.socialObservation.subtitle2`),
    ],
    link: 'social-observation/social-economy-data',
  },
  {
    id: 'projectIntroduction',
    style: '',
    title: i18n.t(`${I18N_KEY_PREFIX}.aboutTab.projectIntroduction.title`),
    subtitle: [
      i18n.t(`${I18N_KEY_PREFIX}.aboutTab.projectIntroduction.subtitle1`),
      i18n.t(`${I18N_KEY_PREFIX}.aboutTab.projectIntroduction.subtitle2`),
    ],
    link: 'project-introduction',
  },
];

export const localityList: Dictionary<string | number>[] = map(
  localityData.records,
  (record) => zipObject(map(localityData.fields, 'id'), record)
);

// surveyMapItemList
// SelectItem[]
export const generateSurveyMapItemList = (): SelectItem[] => [
  {
    id: 'annualAirTemperature',
    type: 'environmental',
    plan: 'weather',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.annualAirTemperature`),
    redirect: false,
  },
  {
    id: 'seasonalAirTemperature',
    type: 'environmental',
    plan: 'weather',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.seasonalAirTemperature`),
    redirect: null,
  },
  {
    id: 'annualPrecipitation',
    type: 'environmental',
    plan: 'weather',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.annualPrecipitation`),
    redirect: false,
  },
  {
    id: 'seasonalPrecipitation',
    type: 'environmental',
    plan: 'weather',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.seasonalPrecipitation`),
    redirect: null,
  },
  {
    id: 'annualSeaTemperature',
    type: 'environmental',
    plan: 'sea-temperature',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.annualSeaTemperature`),
    redirect: false,
  },
  {
    id: 'seasonalSeaTemperature',
    type: 'environmental',
    plan: 'sea-temperature',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.seasonalSeaTemperature`),
    redirect: null,
  },
  {
    id: 'coralDiv',
    type: 'ecological',
    plan: 'coral-div',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.coralDiv`),
    redirect: true,
  },
  {
    id: 'coralRec',
    type: 'ecological',
    plan: 'coral-rec',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.coralRec`),
    redirect: true,
  },
  {
    id: 'coralComm',
    type: 'ecological',
    plan: 'coral-comm',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.coralComm`),
    redirect: true,
  },
  {
    id: 'coralBleach',
    type: 'ecological',
    plan: 'coral-bleach',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.coralBleach`),
    redirect: true,
  },
  {
    id: 'zoobenthos',
    type: 'ecological',
    plan: 'zoobenthos',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.zoobenthos`),
    redirect: null,
  },
  {
    id: 'plant',
    type: 'ecological',
    plan: 'plant',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.plant`),
    redirect: null,
  },
  {
    id: 'birdNetSound',
    type: 'ecological',
    plan: 'bird-net-sound',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.birdNetSound`),
    redirect: null,
  },
  {
    id: 'fishDiv',
    type: 'ecological',
    plan: 'fish-div',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.fishDiv`),
    redirect: null,
  },
  {
    id: 'aquaticfauna',
    type: 'ecological',
    plan: 'aquaticfauna',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.aquaticfauna`),
    redirect: null,
  },
  {
    id: 'otolith',
    type: 'ecological',
    plan: 'otolith',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.otolith`),
    redirect: true,
  },
];

// surveyMapColList
// ObservationItem[]
export const generateSurveyMapColList = (): ObservationItem[] => [
  {
    id: 'items',
    col: 'items',
    title: i18n.t(`${I18N_KEY_PREFIX}.col.title.items`),
  },
  {
    id: 'year',
    col: 'eventDate',
    title: i18n.t(`${I18N_KEY_PREFIX}.col.title.year`),
  },
  {
    id: 'locality',
    col: 'verbatimLocality',
    title: i18n.t(`${I18N_KEY_PREFIX}.col.title.locality`),
  },
  {
    id: 'latitude',
    col: 'decimalLatitude',
    title: i18n.t(`${I18N_KEY_PREFIX}.col.title.latitude`),
  },
  {
    id: 'longitude',
    col: 'decimalLongitude',
    title: i18n.t(`${I18N_KEY_PREFIX}.col.title.longitude`),
  },
  {
    id: 'annualAirTemperature',
    category: 'environmental',
    plan: 'weather',
    col: 'airTemperature',
    title: i18n.t(`${I18N_KEY_PREFIX}.col.title.annualAirTemperature`),
    unit: '°C',
  },
  {
    id: 'annualPrecipitation',
    category: 'environmental',
    plan: 'weather',
    col: 'precipitation',
    title: i18n.t(`${I18N_KEY_PREFIX}.col.title.annualPrecipitation`),
    unit: 'mm',
  },
  {
    id: 'annualSeaTemperature',
    category: 'environmental',
    plan: 'sea-temperature',
    col: 'seaTemperature',
    title: i18n.t(`${I18N_KEY_PREFIX}.col.title.annualSeaTemperature`),
    unit: '°C',
  },
  {
    id: 'coralDiv',
    category: 'ecological',
    plan: 'coral-div',
    col: 'scientificName',
    title: i18n.t(`${I18N_KEY_PREFIX}.col.title.coralDiv`),
    unit: '種',
  },
  {
    id: 'coralRec',
    category: 'ecological',
    plan: 'coral-rec',
    col: 'individualCount',
    title: i18n.t(`${I18N_KEY_PREFIX}.col.title.coralRec`),
    unit: '株',
  },
  {
    id: 'aquaticfauna',
    category: 'ecological',
    plan: 'aquaticfauna',
    col: 'scientificName',
    title: i18n.t(`${I18N_KEY_PREFIX}.col.title.aquaticfauna`),
    unit: '種',
  },
];

// chartSeriesList
// ObservationItem[]
export const generateChartSeriesList = (): ObservationItem[] => [
  {
    id: 'seasonalAirTemperature',
    type: 'environmental',
    plan: 'weather',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.seasonalAirTemperature`),
    col: 'airTemperature',
    unit: '°C',
  },
  {
    id: 'seasonalPrecipitation',
    type: 'environmental',
    plan: 'weather',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.seasonalPrecipitation`),
    col: 'precipitation',
    unit: 'mm',
  },
  {
    id: 'seasonalSeaTemperature',
    type: 'environmental',
    plan: 'sea-temperature',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.seasonalSeaTemperature`),
    col: 'seaTemperature',
    unit: '°C',
  },
  {
    id: 'zoobenthos',
    type: 'ecological',
    plan: 'zoobenthos',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.zoobenthos`),
    col: 'count',
    unit: '種',
  },
  {
    id: 'plant',
    type: 'ecological',
    plan: 'plant',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.plant`),
    col: 'count',
    unit: '種',
  },
  {
    id: 'birdNetSound',
    type: 'ecological',
    plan: 'bird-net-sound',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.birdNetSound`),
    col: 'count',
    unit: '種',
  },
  {
    id: 'fishDiv',
    type: 'ecological',
    plan: 'fish-div',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.fishDiv`),
    col: 'count',
    unit: '種',
  },
  {
    id: 'aquaticfauna',
    type: 'ecological',
    plan: 'aquaticfauna',
    title: i18n.t(`${I18N_KEY_PREFIX}.item.title.aquaticfauna`),
    col: 'count',
    unit: '種',
  },
];

// planList
// PlanItem[]
export const generatePlanList = (): PlanItem[] => [
  {
    id: 'coral-div',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.coral-div`),
  },
  {
    id: 'coral-rec',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.coral-rec`),
  },
  {
    id: 'coral-bleach',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.coral-bleach`),
  },
  {
    id: 'coral-comm',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.coral-comm`),
  },
  {
    id: 'otolith',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.otolith`),
  },
  {
    id: 'ocean-sound',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.ocean-sound`),
  },
  {
    id: 'fish-div',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.fish-div`),
  },
  {
    id: 'fishing',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.fishing`),
  },
  {
    id: 'plant',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.plant`),
  },
  {
    id: 'terre-sound',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.terre-sound`),
  },
  {
    id: 'terre-sound-index',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.terre-sound-index`),
  },
  {
    id: 'bird-net-sound',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.bird-net-sound`),
  },
  {
    id: 'bio-sound',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.bio-sound`),
  },
  {
    id: 'water',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.water`),
  },
  {
    id: 'habitat',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.habitat`),
  },
  {
    id: 'zoobenthos',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.zoobenthos`),
  },
  {
    id: 'aquaticfauna',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.aquaticfauna`),
  },
  {
    id: 'stream',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.stream`),
  },
  {
    id: 'weather',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.weather`),
  },
  {
    id: 'ocean-env',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.ocean-env`),
  },
  {
    id: 'sea-temperature',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.sea-temperature`),
  },
  {
    id: 'issue',
    title: i18n.t(`${I18N_KEY_PREFIX}.plan.title.issue`),
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
