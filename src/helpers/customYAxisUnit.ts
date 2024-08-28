export interface YAxisConfig {
  yAxisName: string;
  unit: string;
}

export const customYAxisUnit: { [key: string]: YAxisConfig[] } = {
  'ocean-sound-index': [{ yAxisName: '聲壓值強度', unit: 'dB re 1μPa' }],
  otolith: [{ yAxisName: '魚種數', unit: '種' }],
  'fish-div': [{ yAxisName: '魚種數', unit: '種/200m²' }],
  'coral-div': [{ yAxisName: '珊瑚礁種類數', unit: '種' }],
  'coral-rec': [{ yAxisName: '珊瑚礁入添數量', unit: '株/7.5m²' }],
  'coral-bleach': [{ yAxisName: '珊瑚礁白化個體數', unit: '株/7.5m²' }],
  'coral-comm': [{ yAxisName: '珊瑚礁群聚調查數量', unit: '%' }],
  zoobenthos: [{ yAxisName: '底棲動物種類數', unit: '種' }],
  plant: [{ yAxisName: '陸域植物種類數', unit: '種' }],
  'bird-net-sound': [{ yAxisName: '鳥種數(鳥音)', unit: '種' }],
  'bio-sound': [{ yAxisName: '生物物種數', unit: '種' }],
  aquaticfauna: [{ yAxisName: '生物物種數', unit: '種' }],
};
