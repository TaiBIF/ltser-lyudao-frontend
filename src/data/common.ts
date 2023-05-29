import {
  HeaderMenuItem,
  FooterLogoItem,
  FooterSociIconItem,
  FooterMenuItem,
} from 'types/common';

import ftlogoImg1 from 'image/ftlogo1.png';
import ftlogoImg2 from 'image/ftlogo2.png';
import ftlogoImg3 from 'image/ftlogo3.png';
import ftlogoImg4 from 'image/ftlogo4.png';
import ftlogoImg5 from 'image/ftlogo5.png';
import ftlogoImg6 from 'image/ftlogo6.png';
import ftlogoImg7 from 'image/ftlogo7.png';

export const logoList: FooterLogoItem[] = [
  {
    id: 1,
    img: ftlogoImg1,
    title: '',
    width: '348px',
    link: '/',
  },
  {
    id: 2,
    img: ftlogoImg2,
    title: '',
    link: '/',
  },
  {
    id: 3,
    img: ftlogoImg3,
    title: '',
    link: '/',
  },
  {
    id: 4,
    img: ftlogoImg4,
    title: '',
    link: '/',
  },
  {
    id: 5,
    img: ftlogoImg5,
    title: '',
    link: '/',
  },
  {
    id: 6,
    img: ftlogoImg6,
    title: '',
    link: '/',
  },
  {
    id: 7,
    img: ftlogoImg7,
    title: '',
    width: '100px',
    link: '/',
  },
];

export const footerMenuList: FooterMenuItem[] = [
  {
    id: 1,
    title: '關於LTSER_綠島',
    list: [
      {
        id: 1,
        subtitle: '生態觀測',
        link: '/',
      },
      {
        id: 2,
        subtitle: '環境觀測',
        link: '/',
      },
      {
        id: 3,
        subtitle: '社會觀測',
        link: '/',
      },
    ],
  },
  {
    id: 2,
    title: '觀測站資料',
    list: [
      {
        id: 1,
        subtitle: '生態觀測',
        link: '/',
      },
      {
        id: 2,
        subtitle: '環境觀測',
        link: '/',
      },
      {
        id: 3,
        subtitle: '社會觀測',
        link: '/',
      },
    ],
  },
  {
    id: 3,
    list: [
      {
        id: 1,
        title: '最新消息',
        link: '/',
      },
      {
        id: 2,
        title: '相關文獻',
        link: '/',
      },
      {
        id: 3,
        title: '常見Q&A',
        link: '/',
      },
    ],
  },
];

export const menuList: HeaderMenuItem[] = [
  {
    id: 1,
    title: '關於LTSER_綠島',
    type: 'mega',
    link: 'about',
    list: [
      {
        id: 1,
        title: '生態觀測',
        link: 'ecological-observation',
        list: [
          {
            id: 1,
            title: '陸域維管束植物社會監測',
            link: 'ecological-observation-article1-name',
          },
          {
            id: 2,
            title: '珊瑚多樣性、珊瑚礁群聚、入添與白化觀測',
            link: 'ecological-observation-article2-name',
          },
          {
            id: 3,
            title: '綠島海洋水域以及珊瑚健康指標觀測',
            link: 'ecological-observation-article3-name',
          },
          {
            id: 4,
            title: '珊瑚礁魚類多樣性與群聚',
            link: 'ecological-observation-article4-name',
          },
          {
            id: 5,
            title: '珊瑚礁魚類時空變化',
            link: 'ecological-observation-article5-name',
          },
          {
            id: 6,
            title: '珊瑚礁水下聲景調查',
            link: 'ecological-observation-article6-name',
          },
          {
            id: 7,
            title: '陸域聲景調查',
            link: 'ecological-observation-article7-name',
          },
          {
            id: 8,
            title: '潮間帶貝類多樣性與群聚特性',
            link: 'ecological-observation-article8-name',
          },
        ],
      },
      {
        id: 2,
        title: '環境觀測',
        link: 'environmental-observation',
        list: [
          {
            id: 1,
            title: '休閒漁業調查',
            link: 'environmental-observation-article1-name',
          },
          {
            id: 2,
            title: '土地利用',
            link: 'environmental-observation-article2-name',
          },
          {
            id: 3,
            title: '海域利用',
            link: 'environmental-observation-article3-name',
          },
          {
            id: 4,
            title: '經濟活動',
            link: 'environmental-observation-article4-name',
          },
          {
            id: 5,
            title: '議題盤點',
            link: 'environmental-observation-article5-name',
          },
        ],
      },
      {
        id: 3,
        title: '社會觀測',
        link: 'social-observation',
        list: [
          {
            id: 1,
            title: '休閒漁業調查',
            link: 'social-observation-article1-name',
          },
          {
            id: 2,
            title: '土地利用',
            link: 'social-observation-article2-name',
          },
          {
            id: 3,
            title: '海域利用',
            link: 'social-observation-article3-name',
          },
          {
            id: 4,
            title: '經濟活動',
            link: 'social-observation-article4-name',
          },
          {
            id: 5,
            title: '議題盤點',
            link: 'social-observation-article5-name',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: '觀測站資料',
    type: 'sec',
    link: 'site-data',
    list: [
      {
        id: 1,
        title: '生態觀測',
        link: 'ecological-observation',
      },
      {
        id: 2,
        title: '環境觀測',
        link: 'environmental-observation',
      },
      {
        id: 3,
        title: '社會觀測',
        link: 'social-observation',
        list: [
          {
            id: 1,
            title: '社會經濟資料',
            link: 'social-economy-data',
          },
          {
            id: 2,
            title: '社會面訪談資料',
            link: 'social-interview-data',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: '最新消息',
    link: 'news',
  },
  {
    id: 4,
    title: '相關文獻',
    link: 'related-literature',
  },
  {
    id: 5,
    title: '常見Q&A',
    link: 'qa',
  },
  {
    id: 6,
    title: '常用表單與連結',
    link: 'form-link',
  },
];

export const routeList: HeaderMenuItem[] = [
  ...menuList,
  {
    id: 0,
    title: '首頁',
    link: '',
  },
  {
    id: 7,
    title: '聯絡我們',
    link: 'contact',
  },
  {
    id: 8,
    title: '忘記密碼',
    link: 'forgot-password',
  },
  {
    id: 9,
    title: '會員註冊',
    link: 'mail-verification',
  },
  {
    id: 10,
    title: '驗證成功',
    link: 'signup-success',
  },
  {
    id: 10,
    title: '使用條款',
    link: 'terms',
  },
];
