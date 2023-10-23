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
    title: '觀測項目層級ㄧ',
    list: [
      {
        id: 1,
        title: '觀測項目層級二',
        list: [
          {
            id: 1,
            title: '辨識出的鳥類紀錄',
            link: '/',
          },
          {
            id: 2,
            title: '可聽音的聲音指數',
            link: '/',
          },
          {
            id: 3,
            title: '層級三',
            link: '/',
          },
        ],
      },
      {
        id: 2,
        title: '觀測項目層級二',
        list: [
          {
            id: 1,
            title: '辨識出的鳥類紀錄',
            link: '/',
          },
          {
            id: 2,
            title: '可聽音的聲音指數',
            link: '/',
          },
          {
            id: 3,
            title: '層級三',
            link: '/',
          },
        ],
      },
      {
        id: 3,
        title: '觀測項目層級二',
        link: '/',
      },
    ],
  },
  {
    id: 2,
    title: '觀測項目層級ㄧ',
    list: [
      {
        id: 1,
        title: '觀測項目層級二',
        list: [
          {
            id: 1,
            title: '辨識出的鳥類紀錄',
            link: '/',
          },
          {
            id: 2,
            title: '可聽音的聲音指數',
            link: '/',
          },
          {
            id: 3,
            title: '層級三',
            link: '/',
          },
        ],
      },
      {
        id: 2,
        title: '觀測項目層級二',
        list: [
          {
            id: 1,
            title: '辨識出的鳥類紀錄',
            link: '/',
          },
          {
            id: 2,
            title: '可聽音的聲音指數',
            link: '/',
          },
          {
            id: 3,
            title: '層級三',
            link: '/',
          },
        ],
      },
      {
        id: 3,
        title: '觀測項目層級二',
        link: '/',
      },
    ],
  },
  {
    id: 3,
    title: '觀測項目層級ㄧ',
    link: '/',
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
    year: '2023',
    tags: [],
    type: 1,
    image: newsImg,
    target: 1,
    title: '探索綠島：海洋與山林的美妙結合',
    content:
      '綠島是個充滿神秘感的寶島，擁有碧海藍天和翠綠山川。當地居民分享海島生活的喜悅，常常在蔚藍海水中嬉戲，也享受著山林間的寧靜。',
  },
  {
    id: 2,
    year: '2023',
    tags: ['監獄'],
    type: 2,
    image: newsImg,
    target: 1,
    title: '重返過去：綠島監獄的歷史之旅',
    content:
      '綠島監獄是臺灣珍貴的歷史遺跡，透過導覽，我們可以深入了解這段曾經的歷史，感受囚犯們的苦痛，也見證著臺灣社會的轉變。',
  },
  {
    id: 3,
    year: '2023',
    tags: ['潛水'],
    type: 2,
    image: newsImg,
    target: 1,
    title: '靜默的海底：綠島潛水之旅',
    content:
      '綠島的海域是個豐富的水下生態樂園，潛水愛好者可以在清澈的海水中，欣賞色彩斑斕的珊瑚礁、熱帶魚群，感受大自然的神奇。',
  },
  {
    id: 4,
    year: '2023',
    tags: ['自行車'],
    type: 2,
    image: newsImg,
    target: 2,
    title: '征服綠島：自行車風景道路的挑戰',
    content:
      '綠島的風景道路環繞島嶼，挑戰著自行車愛好者的體力和耐力。在崎嶇的地形中，感受鮮明的海洋與山地風光。',
  },
  {
    id: 5,
    year: '2023',
    tags: ['海灘'],
    type: 2,
    image: 'newsImg',
    target: 2,
    title: '海岸線的初曦：綠島日出浪漫之旅',
    content:
      '綠島海灘的清幽，加上早晨的第一道陽光，形成極致的浪漫氛圍。情侶們常常選擇在這裡共度難忘的日出時光。',
  },
  {
    id: 6,
    year: '2023',
    tags: ['鯨豚', '海洋', '生態', '環保'],
    type: 3,
    image: 'newsImg',
    target: 3,
    title: '守護海洋的使者：綠島鯨豚保育計畫',
    content:
      '綠島周遭海域棲息著多種鯨豚，為了保護這片海洋寶藏，環保志工積極參與鯨豚保育計畫，呼籲大家關注海洋生態。',
  },
  {
    id: 7,
    year: '2023',
    tags: ['地熱', '溫泉'],
    type: 2,
    image: 'newsImg',
    target: 1,
    title: '大地的擁抱：綠島地熱溫泉之旅',
    content:
      '綠島地下蘊藏豐富的地熱能量，溫泉成為遊客放鬆身心的好去處，享受溫泉的療癒和大自然的擁抱。',
  },
];

export const interviewTypeList: TypeItem[] = [
  {
    id: 1,
    title: '歷史與文化',
  },
  {
    id: 2,
    title: '休閒與旅遊',
  },
  {
    id: 3,
    title: '環境保護',
  },
];

export const interviewTargetList: TypeItem[] = [
  {
    id: 1,
    title: '遊客',
  },
  {
    id: 2,
    title: '當地居民',
  },
  {
    id: 3,
    title: '研究人員',
  },
];
