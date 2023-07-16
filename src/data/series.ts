import { SeriesItemTypes } from 'types/series';

export const countSeries: SeriesItemTypes[] = [
  {
    time: '2023-03-20',
    count: 0,
  },
  {
    time: '2023-03-21',
    count: 0,
  },
  {
    time: '2023-03-22',
    count: 0,
  },
];

export const weatherSeries: SeriesItemTypes[] = [
  {
    time: '2023-03-06T16:40:13Z',
    windSpeed: 1.01,
    windDirection: 278,
    precipitation: 0.0,
    airTemperature: 21.676,
  },
  {
    time: '2023-03-06T16:55:13Z',
    windSpeed: 1.01,
    windDirection: 157,
    precipitation: 0.0,
    airTemperature: 21.033,
  },
];

export const seaTemperatureSeries: SeriesItemTypes[] = [
  {
    time: '2022-03-13T12:00:00Z',
    seaTemperature: 25.158,
  },
  {
    time: '2022-03-13T12:10:00Z',
    seaTemperature: 25.212,
  },
];

export const oceanSoundIndexSeries: SeriesItemTypes[] = [
  {
    time: '2022-03-13T12:00:00Z',
    lower_200Hz: 0,
    '200_1500Hz': 0,
    higher_1500Hz: 0,
  },
  {
    time: '2022-03-13T12:10:00Z',
    lower_200Hz: 0,
    '200_1500Hz': 0,
    higher_1500Hz: 0,
  },
];

export const terreSoundIndexSeries: SeriesItemTypes[] = [
  {
    time: '2023-02-18T17:30:00Z',
    ACI: 1851.9342863386,
    ADI: 1.692468,
    BI: 2.36845695335152,
    NDSI: 0.726582020772122,
  },
  {
    time: '2023-02-18T17:45:00Z',
    ACI: 1728.16277209141,
    ADI: 0.493852,
    BI: 5.65152627089426,
    NDSI: -0.446460206073027,
  },
];

export const waterSeries: SeriesItemTypes[] = [
  {
    time: '2023-02-18T17:30:00Z',
    waterTemperature: 0,
    DO: 0,
    conductivity: 0,
    clarity: 0,
    TSS: 0,
    TBC: 0,
    vibrio: 0,
  },
  {
    time: '2023-02-18T17:45:00Z',
    waterTemperature: 0,
    DO: 0,
    conductivity: 0,
    clarity: 0,
    TSS: 0,
    TBC: 0,
    vibrio: 0,
  },
];
