import { AsideItem, EcoSearchItem } from 'types/siteData';
import { FieldItem, ColItem } from 'types/utils';

export const ecoAsideList: AsideItem[] = [
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
