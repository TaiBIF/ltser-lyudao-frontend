export type WeatherChartItem = {
  [key: string]: number | string;
  time: string;
  windSpeed: number;
  windDirection: number;
  precipitation: number;
  airTemperature: number;
};
