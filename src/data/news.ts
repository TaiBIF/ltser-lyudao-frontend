import { NewsImageItem, NewsItem } from 'types/news';
import { TypeItem, AttachmentItem } from 'types/utils';

import newsImg from 'image/newsubb.jpg';

export const newsTypeList: TypeItem[] = [
  {
    id: 0,
    title: '全部',
    colorClass: '',
  },
  {
    id: 1,
    title: '類別AAA',
    colorClass: '',
  },
  {
    id: 2,
    title: '類別BBB',
    colorClass: 'col-red',
  },
  {
    id: 3,
    title: '類別CCC',
    colorClass: 'col-yel',
  },
];

export const newsAttachmentList: AttachmentItem[] = [
  {
    id: 1,
    type: 'file',
    title: 'test1.pdf',
  },
  {
    id: 2,
    type: 'file',
    title: 'test2.pdf',
  },
  {
    id: 3,
    type: 'file',
    title: 'test3.pdf',
  },
];

export const newsList: NewsItem[] = [
  {
    id: 1,
    type: [1, 2],
    title: '綠島｜熱浪潛水中心｜SUP立槳體驗',
    content: `台灣四面環海，無論去哪個離島都有許多水上活動可以選擇，不過有別於大家熟知的浮潛、深潛、 SUP ，綠島還擁有最特別的水上活動：全台唯一的潛水滑板車、海底郵筒，以及近年來推出的綠島水上六合一活動，讓你多個願望一次滿足！本篇幫大家整理了綠島水上活動的項目、店家，讓你的綠島水上活動行程輕鬆搞定！\r\n\r\n近年來最流行的水上活動—SUP，結合了獨木舟與衝浪，無論是站姿、跪姿或坐姿，都非常簡單上手。綠島擁有世界級的澄澈海水，及充滿特色的海蝕洞與火山岩地形，站立在板上就好像征服整個海平面，還能眺望整個綠島的景色，還能透過清澈的海水，直視水下的魚兒們！`,
    newsDate: '2023-07-03',
    user: 1,
    cover: '/media/newsImages/contact1.jpg',
    user_email: 'thousand.ai.tech@gmail.com',
    images: [
      {
        image: '/media/newsImages/contact1.jpg',
      },
    ],
    attachments: [
      {
        file: '/media/newsAttachments/sea-temperature-GW-2023.csv',
      },
    ],
  },
];
