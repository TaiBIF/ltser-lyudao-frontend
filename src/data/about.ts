import { TypeItem } from 'types/utils';
import { AboutItem } from 'types/about';

import i18n from 'i18next';

const PAGE_NAME = 'data';
const COMPONENT_NAME = 'about';
const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

export const generateTypeList = (): TypeItem[] => [
  {
    id: 'ecologicalObservation',
    title: i18n.t(`${I18N_KEY_PREFIX}.type.title.ecologicalObservation`),
  },
  {
    id: 'environmentalObservation',
    title: i18n.t(`${I18N_KEY_PREFIX}.type.title.environmentalObservation`),
  },
  {
    id: 'socialObservation',
    title: i18n.t(`${I18N_KEY_PREFIX}.type.title.socialObservation`),
  },
  {
    id: 'introduction',
    title: i18n.t(`${I18N_KEY_PREFIX}.type.title.introduction`),
  },
];

export const aboutTypeList: TypeItem[] = [
  {
    id: 'ecologicalObservation',
    title: '生態觀測',
  },
  {
    id: 'environmentalObservation',
    title: '環境觀測',
  },
  {
    id: 'socialObservation',
    title: '社會觀測',
  },
];

export const aboutList: AboutItem[] = [
  {
    id: 0,
    type: 'ecologicalObservation',
    name: '珊瑚礁水下景觀',
    content:
      '珊瑚礁生態系經常被喻為海洋中的熱帶雨林，其豐富的生物多樣性是支持漁業、遊憩觀光等生態系服務的關鍵。然而受限於環境、天候、人為等影響，傳統以潛水觀測的方法，往往難以呈現海洋生物多樣性的動態變化。運用錄音設備自動化監測水下聲景，將可收集到大量的甲殼類與魚類聲音，了解發聲動物在珊瑚礁生態系的活動趨勢；也能偵測到隨氣候而變的環境聲音以及人為活動所產生的水下噪音，協助我們探索珊瑚礁生態系面對氣候變遷與人為開發的潛在衝擊。本項目將透過聲音視覺化技術，長期觀測綠島海域的珊瑚礁聲景，作為了解珊瑚礁社會生態系統變遷的基礎生態聲學資料。',
    image: '/media/aboutImage/210303.png',
  },
];

export const headerAboutData: any = {
  ecologicalObservation: [
    {
      id: 0,
      name: '珊瑚礁水下景觀',
    },
  ],
  environmentalObservation: [
    {
      id: 0,
      name: '珊瑚礁水下景觀',
    },
  ],
  socialObservation: [
    {
      id: 0,
      name: '珊瑚礁水下景觀',
    },
  ],
  projectIntroduction: [
    {
      id: 0,
      name: '珊瑚礁水下景觀',
    },
  ],
};
