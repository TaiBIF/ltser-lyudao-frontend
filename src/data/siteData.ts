import { AsideItem, EcoSearchItem } from 'types/siteData';
import { FieldItem, ColItem } from 'types/utils';

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
    id: 5,
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
    id: 6,
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
