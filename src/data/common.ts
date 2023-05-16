import { MenuItem } from 'types/common';

export const menuList: MenuItem[] = [
  {
    id: '1',
    title: '關於LTSER_綠島',
    type: 'mega',
    link: '/about',
    list: [
      {
        id: '1',
        title: '生態觀測',
        link: '/ecological-observation',
        list: [
          {
            id: '1',
            title: '陸域維管束植物社會監測',
            link: '/',
          },
          {
            id: '2',
            title: '珊瑚多樣性、珊瑚礁群聚、入添與白化觀測',
            link: '/',
          },
          {
            id: '3',
            title: '綠島海洋水域以及珊瑚健康指標觀測',
            link: '/',
          },
          {
            id: '4',
            title: '珊瑚礁魚類多樣性與群聚',
            link: '/',
          },
          {
            id: '5',
            title: '珊瑚礁魚類時空變化',
            link: '/',
          },
          {
            id: '6',
            title: '珊瑚礁水下聲景調查',
            link: '/',
          },
          {
            id: '7',
            title: '陸域聲景調查',
            link: '/',
          },
          {
            id: '8',
            title: '潮間帶貝類多樣性與群聚特性',
            link: '/',
          },
        ],
      },
      {
        id: '2',
        title: '環境觀測',
        link: '/environmental-observation',
        list: [
          {
            id: '1',
            title: '休閒漁業調查',
            link: '/',
          },
          {
            id: '2',
            title: '土地利用',
            link: '/',
          },
          {
            id: '3',
            title: '海域利用',
            link: '/',
          },
          {
            id: '4',
            title: '經濟活動',
            link: '/',
          },
          {
            id: '5',
            title: '議題盤點',
            link: '/',
          },
        ],
      },
      {
        id: '3',
        title: '社會觀測',
        link: '/social-observation',
        list: [
          {
            id: '1',
            title: '休閒漁業調查',
            link: '/',
          },
          {
            id: '2',
            title: '土地利用',
            link: '/',
          },
          {
            id: '3',
            title: '海域利用',
            link: '/',
          },
          {
            id: '4',
            title: '經濟活動',
            link: '/',
          },
          {
            id: '5',
            title: '議題盤點',
            link: '/',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: '觀測站資料',
    type: 'sec',
    link: '',
    list: [
      {
        id: '1',
        title: '生態觀測',
        link: '/',
      },
      {
        id: '2',
        title: '環境觀測',
        link: '/',
      },
      {
        id: '3',
        title: '社會觀測',
        link: '',
        list: [
          {
            id: '1',
            title: '社會經濟資料',
            link: '/',
          },
          {
            id: '2',
            title: '社會面訪談資料',
            link: '/',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: '最新消息',
    link: '/',
  },
  {
    id: '4',
    title: '相關文獻',
    link: '/',
  },
  {
    id: '5',
    title: '常見Q&A',
    link: '/',
  },
  {
    id: '6',
    title: '常用表單與連結',
    link: '/',
  },
];
