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
        link: 'bi-sound',
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
    title: '向海致敬募集綠島減塑生力軍',
    content: `交通部觀光局東部海岸國家風景區管理處(以下簡稱東管處)為落實「向海致敬」政策海廢去化及減量目標，促進資源永續利用，委託臺灣德福公司(Taiwanderful)在綠島設立洄塑工作站推廣一系列減塑行動。112年3月29日(星期三)下午於該處綠島遊客中心辦理營運說明會及工作站導覽，號召在地環境友善店家成為減塑生力軍，共同為綠島環境永續盡一份心力。
    <br />
    綠島擁有豐富海洋遊憩資源，每年吸引近30萬人到訪，也帶來可觀垃圾量。離島垃圾去化不易，不論一般垃圾或寶特瓶、塑膠餐盒等可回收資源均需運回本島，增加再利用門檻，降低業者處理意願。東管處今(112)年以位於朝日旅服的洄塑工作站為中心，搭配綠島國中、綠島國小、公館國小、朝日溫泉、綠島遊客中心等5處社區回收站，及若干環境友善店家，進行飲料瓶清潔回收，再將處理乾淨並完成分類之飲料瓶粉碎成塑膠粒，製成紀念品或生活物品再利用，達到島內循環之減塑計畫。站，及若干環境友善店家，進行飲料瓶清潔回收，再將處理乾淨並完成分類之飲料瓶粉碎成塑膠粒，製成紀念品或生活物品再利用，達到島內循環之減塑計畫。`,
    target: '對象一',
    type: 0,
    image: newsImg,
    tags: ['標籤標籤', 'TAG11'],
  },
];

export const interviewTypeList: TypeItem[] = [
  {
    id: 0,
    title: '項目一',
  },
];
