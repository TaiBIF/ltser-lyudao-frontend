import { ContactItem } from 'types/contact';
import { TypeItem } from 'types/utils';

import peo01Img from 'image/peo01.png';
import peo02Img from 'image/peo02.png';
import peo03Img from 'image/peo03.png';
import peo04Img from 'image/peo04.png';
import peo05Img from 'image/peo05.png';
import peo06Img from 'image/peo06.png';
import peo07Img from 'image/peo07.png';
import peo08Img from 'image/peo08.png';
import peo09Img from 'image/peo09.png';
import peo10Img from 'image/peo10.png';
import peo11Img from 'image/peo11.png';
import peo12Img from 'image/peo12.png';
import peo13Img from 'image/peo13.png';
import peoIbImg from 'image/peoib-img.png';

export const contactTypeList: TypeItem[] = [
  {
    id: 'leader',
    title: '計畫總主持人',
  },
  {
    id: 'executor',
    title: '計畫執行人員',
  },
  {
    id: 'other',
    title: '其他人員',
  },
];

export const contactList: ContactItem[] = [
  {
    id: 1,
    type: 'leader',
    name: '陳昭倫',
    unit: '中央研究院',
    content: '生物多樣性研究中心 研究員',
    contact: 'email@email.com',
    image: peo01Img,
  },
  {
    id: 2,
    type: 'executor',
    name: '鍾國芳',
    unit: '中央研究院',
    content: '生物多樣性研究中心 副研究員',
    contact: 'email@email.com',
    image: peo02Img,
  },
  {
    id: 3,
    type: 'executor',
    name: '林子皓',
    unit: '中央研究院',
    content: '生物多樣性研究中心 助研究員',
    contact: 'email@email.com',
    image: peo03Img,
  },
  {
    id: 4,
    type: 'executor',
    name: '端木茂甯',
    unit: '中央研究院',
    content: '生物多樣性研究中心 助研究員',
    contact: 'email@email.com',
    image: peo04Img,
  },
  {
    id: 5,
    type: 'executor',
    name: '林千翔',
    unit: '中央研究院',
    content: '生物多樣性研究中心 助研究員',
    contact: 'email@email.com',
    image: peo05Img,
  },
  {
    id: 6,
    type: 'executor',
    name: '何旻杰',
    unit: '中央研究院',
    content: '生物多樣性研究中心 研究助技師',
    contact: 'email@email.com',
    image: peo06Img,
  },
  {
    id: 7,
    type: 'executor',
    name: '辛宜佳',
    unit: '中央研究院',
    content: '環境變遷研究中心 副研究員',
    contact: 'email@email.com',
    image: peo07Img,
  },
  {
    id: 8,
    type: 'executor',
    name: '袁美華',
    unit: '中央研究院',
    content: '環境變遷研究中心 助研究員',
    contact: 'email@email.com',
    image: peo08Img,
  },
  {
    id: 9,
    type: 'executor',
    name: '戴仁華',
    unit: '中央研究院',
    content: '環境變遷研究中心 研究副技師',
    contact: 'email@email.com',
    image: peo09Img,
  },
  {
    id: 10,
    type: 'executor',
    name: '邱郁文',
    unit: '嘉義大學',
    content: '生物資源學系 副教授',
    contact: 'email@email.com',
    image: peo10Img,
  },
  {
    id: 11,
    type: 'executor',
    name: '楊松穎',
    unit: '嘉義大學',
    content: '水生生物科學系 助理教授',
    contact: 'email@email.com',
    image: peo11Img,
  },
  {
    id: 12,
    type: 'executor',
    name: '溫國彰',
    unit: '東海大學',
    content: '生態與環境研究中心 副教授',
    contact: 'email@email.com',
    image: peo12Img,
  },
  {
    id: 13,
    type: 'executor',
    name: '潘述元',
    unit: '臺灣大學',
    content: '生物環境系統工程學系 助理教授',
    contact: 'email@email.com',
    image: peo13Img,
  },
  {
    id: 14,
    type: 'other',
    name: '李坤璋',
    unit: '單位名稱',
    content: '環境變遷研究中心 博士後',
    contact: 'kunchang@gate.sinica.edu.tw',
    image: peoIbImg,
  },
  {
    id: 15,
    type: 'other',
    name: '李坤璋',
    unit: '單位名稱',
    content: '環境變遷研究中心 博士後',
    contact: 'kunchang@gate.sinica.edu.tw',
    image: peoIbImg,
  },
  {
    id: 16,
    type: 'other',
    name: '李坤璋',
    unit: '單位名稱',
    content: '環境變遷研究中心 博士後',
    contact: 'kunchang@gate.sinica.edu.tw',
    image: peoIbImg,
  },
];
