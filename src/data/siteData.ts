import { AsideItem, EcoSearchItem, InterviewItem } from 'types/siteData';
import { FieldItem, ColItem, TypeItem } from 'types/utils';

import newsImg from 'image/newsubb.jpg';

export const ecoAsideList: AsideItem[] = [
  {
    id: 1,
    title: '珊瑚礁魚類時空變化',
    list: [
      {
        id: 1,
        title: '耳石',
        link: 'otolith',
      },
    ],
  },
  {
    id: 2,
    title: '珊瑚礁魚類多樣性與群聚',
    list: [
      {
        id: 1,
        title: '魚類多樣性',
        link: 'fish-div',
      },
    ],
  },
  {
    id: 3,
    title: '珊瑚多樣性、珊瑚礁群聚、入添與白化觀測',
    list: [
      {
        id: 1,
        title: '珊瑚多樣性',
        link: 'coral-div',
      },
      {
        id: 2,
        title: '珊瑚入添',
        link: 'coral-rec',
      },
      {
        id: 3,
        title: '珊瑚白化',
        link: 'coral-bleach',
      },
      {
        id: 4,
        title: '珊瑚群聚',
        link: 'coral-comm',
      },
    ],
  },
  {
    id: 4,
    title: '潮間帶貝類多樣性與群聚特性',
    list: [
      {
        id: 1,
        title: '底棲動物',
        link: 'zoobenthos',
      },
    ],
  },
  {
    id: 5,
    title: '陸域維管束植物社會監測',
    list: [
      {
        id: 1,
        title: '陸域植物',
        link: 'plant',
      },
    ],
  },
  {
    id: 6,
    title: '陸域聲景調查',
    list: [
      {
        id: 1,
        title: '聲音指數',
        link: 'terre-sound-index',
      },
      {
        id: 2,
        title: '鳥類辨識',
        link: 'bird-net-sound',
      },
      {
        id: 3,
        title: '生物辨識',
        link: 'bio-sound',
      },
    ],
  },
  {
    id: 7,
    title: '珊瑚礁水下聲景調查',
    list: [
      {
        id: 1,
        title: '海洋聲學',
        link: 'ocean-sound-index',
      },
    ],
  },
];

export const envAsideList: AsideItem[] = [
  {
    id: 1,
    title: '綠島海洋水域以及珊瑚健康指標觀測',
    list: [
      {
        id: 1,
        title: '水質/海洋健康指標',
        link: 'water',
      },
    ],
  },
  {
    id: 2,
    title: '陸域與海域環境觀測',
    list: [
      {
        id: 1,
        title: '氣象觀測',
        link: 'weather',
      },
      {
        id: 2,
        title: '海洋觀測',
        link: 'sea-temperature',
      },
      {
        id: 3,
        title: '棲地評估',
        link: 'habitat',
      },
    ],
  },
];

export const economyAsideList: AsideItem[] = [
  {
    id: 1,
    title: '休閒漁業',
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
