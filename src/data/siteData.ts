import i18n from 'i18next';

import { AsideItem, EcoSearchItem, InterviewItem } from 'types/siteData';
import { FieldItem, ColItem, TypeItem } from 'types/utils';

import newsImg from 'image/newsubb.jpg';

const PAGE_NAME = 'data';
const COMPONENT_NAME = 'siteData';
const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

// ecoAsideList
// AsideItem[]
export const generateEcoAsideList = (): AsideItem[] => [
  {
    id: 1,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.1`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.1_1`),
        link: 'otolith',
      },
    ],
  },
  {
    id: 2,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.2`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.2_1`),
        link: 'fish-div',
      },
    ],
  },
  {
    id: 3,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.3`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.3_1`),
        link: 'coral-div',
      },
      {
        id: 2,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.3_2`),
        link: 'coral-rec',
      },
      {
        id: 3,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.3_3`),
        link: 'coral-bleach',
      },
      {
        id: 4,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.3_4`),
        link: 'coral-comm',
      },
    ],
  },
  {
    id: 4,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.4`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.4_1`),
        link: 'zoobenthos',
      },
    ],
  },
  {
    id: 5,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.5`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.5_1`),
        link: 'plant',
      },
    ],
  },
  {
    id: 6,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.6`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.6_1`),
        link: 'terre-sound-index',
      },
      {
        id: 2,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.6_2`),
        link: 'bird-net-sound',
      },
      {
        id: 3,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.6_3`),
        link: 'bio-sound',
      },
    ],
  },
  {
    id: 7,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.7`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.7_1`),
        link: 'ocean-sound-index',
      },
    ],
  },
  {
    id: 8,
    title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.8`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.eco.title.8_1`),
        link: 'aquaticfauna',
      },
    ],
  },
];

// envAsideList
// AsideItem[]
export const generateEnvAsideList = (): AsideItem[] => [
  {
    id: 1,
    title: i18n.t(`${I18N_KEY_PREFIX}.env.title.1`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.env.title.1_1`),
        link: 'water',
      },
    ],
  },
  {
    id: 2,
    title: i18n.t(`${I18N_KEY_PREFIX}.env.title.2`),
    list: [
      {
        id: 1,
        title: i18n.t(`${I18N_KEY_PREFIX}.env.title.2_1`),
        link: 'weather',
      },
      {
        id: 2,
        title: i18n.t(`${I18N_KEY_PREFIX}.env.title.2_2`),
        link: 'sea-temperature',
      },
      {
        id: 3,
        title: i18n.t(`${I18N_KEY_PREFIX}.env.title.2_3`),
        link: 'habitat',
      },
      {
        id: 4,
        title: i18n.t(`${I18N_KEY_PREFIX}.env.title.2_4`),
        link: 'stream',
      },
    ],
  },
];

// economyAsideList
// AsideItem[]
export const generateEconomyAsideList = (): AsideItem[] => [
  {
    id: 1,
    title: i18n.t(`${I18N_KEY_PREFIX}.economy.title.1`),
    link: 'fishing',
  },
];

export const layoutAsideList: AsideItem[] = [
  {
    id: 1,
    title: '建置中',
    link: 'social-economy-data',
  },
];

export const searchFieldList: FieldItem[] = [
  {
    id: 1,
    type: 'text',
    title: 'site',
    label: '測站',
  },
  {
    id: 2,
    type: 'text',
    title: 'researcher',
    label: '調查者',
  },
  {
    id: 3,
    type: 'text',
    title: 'scientificName',
    label: '學名',
  },
  {
    id: 4,
    type: 'text',
    title: 'cnName',
    label: '中文名',
  },
  {
    id: 5,
    type: 'number',
    title: 'number',
    label: '數量',
  },
];

export const ecoSearchColList: ColItem[] = [
  {
    id: 'id',
    title: 'id',
    show: false,
  },
  {
    id: 'site',
    title: '測站',
    show: true,
  },
  {
    id: 'researcher',
    title: '調查者',
    show: true,
  },
  {
    id: 'scientificName',
    title: '學名',
    show: true,
  },
  {
    id: 'cnName',
    title: '中文名',
    show: true,
  },
  {
    id: 'number',
    title: '數量',
    show: true,
  },
];

export const ecoResultList: EcoSearchItem[] = [
  {
    id: 1,
    site: '柴口浮潛區',
    researcher: 'Alice Chen',
    scientificName: 'Melia azedarach',
    cnName: '楝',
    number: 123,
  },
  {
    id: 2,
    site: '柴口浮潛區',
    researcher: 'Alice Chen',
    scientificName: 'Melia azedarach',
    cnName: '楝',
    number: 123,
  },
  {
    id: 3,
    site: '柴口浮潛區',
    researcher: 'Alice Chen',
    scientificName: 'Melia azedarach',
    cnName: '楝',
    number: 123,
  },
  {
    id: 4,
    site: '柴口浮潛區',
    researcher: 'Alice Chen',
    scientificName: 'Melia azedarach',
    cnName: '楝',
    number: 123,
  },
  {
    id: 5,
    site: '柴口浮潛區',
    researcher: 'Alice Chen',
    scientificName: 'Melia azedarach',
    cnName: '楝',
    number: 123,
  },
  {
    id: 6,
    site: '柴口浮潛區',
    researcher: 'Alice Chen',
    scientificName: 'Melia azedarach',
    cnName: '楝',
    number: 123,
  },
];

export const interviewList: InterviewItem[] = [
  {
    id: 1,
    date: '2023-04',
    tags: ['船舶', '公船', '飛機', '調降票價'],
    type: 1,
    image: newsImg,
    target: 1,
    title: 'issue-2023-1',
    content:
      '交通的話就是船舶部分，跟其實飛機班次也是一個問題，因為像小琉球因為比較近嘛，而且他們有公船，所以他們有正常的一個規定時間就是要開船，那像我們的話就是沒有，所以船公司說的算，那在飛機的部分可能就沒有辦法多做什麼調整，但是我覺得調整部分可以是班次增加之類的，或者是他可以調降票價的費用，然後讓大家可以來的時候是也可以在做小型的飛機進來這裡會比較舒服，因為畢竟船的話，浪大會比較不舒服，那坐飛機的話大概是15分鐘至20分鐘就會到達這裡。如果票價比較比較好一點的話，可能就會有更多人選擇進來這樣。',
  },
];

export const interviewTypeList: TypeItem[] = [
  {
    id: 1,
    title: '交通運輸',
  },
];

export const interviewTargetList: TypeItem[] = [
  {
    id: 1,
    title: '觀光旅遊產業',
  },
];
