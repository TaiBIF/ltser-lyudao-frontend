import {
  TabItem,
  ColItem,
  ContactItem,
  FieldItem,
  QAItem,
  TypeItem,
  NewsItem,
} from 'types/dashboard';

// Tabs 左側邊欄頁籤
export const tabList: TabItem[] = [
  {
    id: 'contact',
    title: '聯絡我們',
  },
  {
    id: 'qa',
    title: '常見Q&A',
  },
  {
    id: 'qa-type',
    title: '常見Q&A類型',
  },
  {
    id: 'news',
    title: '最新消息',
  },
  {
    id: 'news-type',
    title: '最新消息類型',
  },
];

// Types 類型
export const typeColList: ColItem[] = [
  {
    id: 'id',
    title: 'ID',
    show: true,
  },
  {
    id: 'title',
    title: '類型',
    show: true,
  },
];

export const typeFieldList: FieldItem[] = [
  {
    id: '1',
    type: 'text',
    title: 'title',
    label: '類型',
    readonly: false,
    required: true,
  },
];

export const qaTypeList: TypeItem[] = [
  {
    id: '1',
    title: '類型DDD',
  },
  {
    id: '2',
    title: '類型EEE',
  },
  {
    id: '3',
    title: '類型FFF',
  },
];

export const newsTypeList: TypeItem[] = [
  {
    id: '1',
    title: '類型AAA',
  },
  {
    id: '2',
    title: '類型BBB',
  },
  {
    id: '3',
    title: '類型CCC',
  },
];

// Contact 關於我們
export const contactColList: ColItem[] = [
  {
    id: 'id',
    title: '人員id',
    show: true,
  },
  {
    id: 'type',
    title: '人員類型',
    show: true,
  },
  {
    id: 'name',
    title: '人員姓名',
    show: true,
  },
  {
    id: 'unit',
    title: '人員所屬單位',
    show: true,
  },
  {
    id: 'content',
    title: '人員簡介',
    show: true,
  },
  {
    id: 'contact',
    title: '連絡方式',
    show: true,
  },
  {
    id: 'image',
    title: '人員照片連結',
    show: false,
  },
];

export const contactList: ContactItem[] = [
  {
    id: '1',
    type: '計畫總主持人',
    name: '陳昭倫',
    unit: '中央研究院',
    content: '生物多樣性研究中心 研究員',
    contact: 'email@email.com',
    image: 'images/peo01.png',
  },
  {
    id: '2',
    type: '計畫執行人員',
    name: '鍾國芳',
    unit: '中央研究院',
    content: '生物多樣性研究中心 副研究員',
    contact: 'email@email.com',
    image: 'images/peo01.png',
  },
  {
    id: '3',
    type: '計畫執行人員',
    name: '楊松穎',
    unit: '嘉義大學',
    content: '水生生物科學系 助理教授',
    contact: 'email@email.com',
    image: 'images/peo01.png',
  },
];

export const contactAddFieldList: FieldItem[] = [
  {
    id: '1',
    type: 'select',
    title: 'type',
    label: '類別',
    readonly: false,
    required: true,
    options: [
      {
        id: '1',
        title: '計畫總主持人',
      },
      {
        id: '2',
        title: '計畫執行人員',
      },
    ],
  },
  {
    id: '2',
    type: 'text',
    title: 'name',
    label: '姓名',
    readonly: false,
    required: true,
  },
  {
    id: '3',
    type: 'text',
    title: 'unit',
    label: '單位',
    readonly: false,
    required: true,
  },
  {
    id: '4',
    type: 'text',
    title: 'content',
    label: '內容',
    readonly: false,
    required: true,
  },
  {
    id: '5',
    type: 'email',
    title: 'contact',
    label: '聯絡方式',
    readonly: false,
    required: false,
  },
  {
    id: '6',
    type: 'file',
    title: 'image',
    label: '照片',
    readonly: false,
    required: false,
  },
];

export const contactEditFieldList: FieldItem[] = [
  {
    id: '1',
    type: 'select',
    title: 'type',
    label: '類別',
    readonly: false,
    required: true,
    options: [
      {
        id: '1',
        title: '計畫總主持人',
      },
      {
        id: '2',
        title: '計畫執行人員',
      },
    ],
  },
  {
    id: '2',
    type: 'text',
    title: 'name',
    label: '姓名',
    readonly: false,
    required: true,
  },
  {
    id: '3',
    type: 'text',
    title: 'unit',
    label: '單位',
    readonly: false,
    required: true,
  },
  {
    id: '4',
    type: 'text',
    title: 'content',
    label: '內容',
    readonly: false,
    required: true,
  },
  {
    id: '5',
    type: 'email',
    title: 'contact',
    label: '聯絡方式',
    readonly: false,
    required: false,
  },
  {
    id: '6',
    type: 'file',
    title: 'image',
    label: '照片',
    readonly: false,
    required: false,
    hints: [
      {
        id: 'link',
        title: '目前檔案:',
      },
    ],
  },
];

// QA 常見 Q&A
export const qaColList: ColItem[] = [
  {
    id: 'id',
    title: 'ID',
    show: true,
  },
  {
    id: 'type',
    title: '問題類型',
    show: true,
  },
  {
    id: 'question',
    title: '問題',
    show: true,
    textarea: true,
  },
  {
    id: 'answer',
    title: '答案',
    show: true,
    textarea: true,
  },
];

export const qaList: QAItem[] = [
  {
    id: '1',
    type: '1',
    question: '所有的子計畫項目是由誰規劃並統籌的呢？',
    answer: `所有的子所有的子計畫項目是由誰規劃並統籌的呢？所有的子計畫項目是由誰規劃並統籌的呢？所有的子計畫項目是由誰規劃並統籌的呢？所有的子計畫項目是由誰規劃並統籌的呢？所有的子計畫項目是由誰規劃並統籌的呢？計畫項目是由誰規劃並統籌的呢？所有的子所有的子計畫項目是由誰規劃並統籌的呢？所有的子計畫項目是由誰規劃並統籌的呢？所有的子計畫項目是由誰規劃並統籌的呢？所有的子計畫項目是由誰規劃並統籌的呢？所有的子計畫項目是由誰規劃並統籌的呢？計畫項目是由誰規劃並統籌的呢？所有的子所有的子計畫項目是由誰規劃並統籌的呢？所有的子計畫項目是由誰規劃並統籌的呢？所有的子計畫項目是由誰規劃並統籌的呢？所有的子計畫項目是由誰規劃並統籌的呢？所有的子計畫項目是由誰規劃並統籌的呢？計畫項目是由誰規劃並統籌的呢？`,
  },
];

export const qaFieldList: FieldItem[] = [
  {
    id: '1',
    type: 'select',
    title: 'type',
    label: '類型',
    readonly: false,
    required: true,
    options: qaTypeList,
  },
  {
    id: '2',
    type: 'text',
    title: 'question',
    label: '問題',
    readonly: false,
    required: true,
  },
  {
    id: '3',
    type: 'textarea',
    title: 'answer',
    label: '答案',
    readonly: false,
    required: false,
  },
];

// News 最新消息
export const newsColList: ColItem[] = [
  {
    id: 'id',
    title: '消息id',
    show: true,
  },
  {
    id: 'type',
    title: '消息類型',
    show: true,
  },
  {
    id: 'userId',
    title: '建立者',
    show: true,
  },
  {
    id: 'title',
    title: '主旨',
    show: true,
    textarea: true,
  },
  {
    id: 'content',
    title: '內文',
    show: true,
    textarea: true,
  },
  {
    id: 'cover',
    title: '封面圖片',
    show: true,
  },
  {
    id: 'image',
    title: '圖片連結',
    show: true,
  },
  {
    id: 'attachments',
    title: '附件檔案連結',
    show: true,
  },
  {
    id: 'date',
    title: '消息日期',
    show: true,
  },
];

export const newsList: NewsItem[] = [
  {
    id: '1',
    type: ['1', '2', '3'],
    userId: 'email@email.com',
    title: '2023年2月22日召開「長期社會生態核心觀測站規劃建議會」',
    content: `本次活動為聯合推廣國科會自然科學相關資料庫，促進跨領域各平台交流，以結合自然科學不同領域資料，進行學術研究...`,
    cover: 'test1.jpg',
    image: ['test1.jpg', 'test2.jpg'],
    // attachments: [
    //   {
    //     id: '1',
    //     title: 'XXX',
    //     file: 'test.pdf',
    //   },
    // ],
    attachments: ['test1.pdf', 'test2.pdf', 'test3.pdf'],
    date: '2023-05-16',
  },
];

export const newsFieldList: FieldItem[] = [
  {
    id: '1',
    type: 'checkbox',
    title: 'type',
    label: '消息類型',
    readonly: false,
    required: true,
    options: newsTypeList,
  },
  {
    id: '2',
    type: 'text',
    title: 'title',
    label: '主旨',
    readonly: false,
    required: true,
  },
  {
    id: '3',
    type: 'textarea',
    title: 'content',
    label: '內文',
    readonly: false,
    required: false,
  },
  {
    id: '4',
    type: 'file',
    title: 'image',
    label: '圖片連結',
    readonly: false,
    required: false,
    multiple: true,
    cover: '',
  },
  {
    id: '5',
    type: 'file',
    title: 'attachments',
    label: '附件檔案連結',
    readonly: false,
    required: false,
    multiple: true,
  },
  {
    id: '6',
    type: 'date',
    title: 'date',
    label: '建立日期',
    readonly: false,
    required: false,
  },
];
