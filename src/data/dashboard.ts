import { TypeItem, FieldItem, ColItem } from 'types/utils';
import { TabItem, DownloadItem } from 'types/dashboard';
import { newsTypeList, newsAttachmentList } from 'data/news';
import { contactTypeList } from 'data/contact';
import { aboutTypeList } from 'data/about';
import { qaTypeList } from 'data/qa';

// Tabs 左側邊欄頁籤
// 調整權限的話，記得 App route 權限也要調整
export const tabList: TabItem[] = [
  {
    id: 'user/edit',
    title: '個人帳號管理',
    auth: ['superuser', 'staff', 'none'],
  },
  {
    id: 'about',
    title: '計畫介紹',
    auth: ['superuser', 'staff'],
  },
  {
    id: 'about-attachment',
    title: '計畫介紹補充資訊',
    auth: ['superuser', 'staff'],
  },
  {
    id: 'contact',
    title: '聯絡我們',
    auth: ['superuser'],
  },
  {
    id: 'qa',
    title: '常見Q&A',
    auth: ['superuser'],
  },
  {
    id: 'qa-type',
    title: '常見Q&A類型',
    auth: ['superuser'],
  },
  {
    id: 'news',
    title: '最新消息',
    auth: ['superuser', 'staff'],
  },
  {
    id: 'news-type',
    title: '最新消息類型',
    auth: ['superuser', 'staff'],
  },
  {
    id: 'related-literature',
    title: '相關文獻',
    auth: ['superuser', 'staff'],
  },
  {
    id: 'form-link',
    title: '常見表單與連結',
    auth: ['superuser'],
  },
  {
    id: 'download-record',
    title: '下載資料紀錄',
    auth: ['superuser', 'staff', 'none'],
  },
  {
    id: 'download',
    title: '資料下載申請資訊',
    auth: ['superuser', 'staff'],
  },
  {
    id: 'social-interview-data',
    title: '社會面訪談資料',
    auth: ['superuser'],
  },
];

// Types 類型
export const typeColList: ColItem[] = [
  {
    id: 'id',
    title: '類型id',
    show: true,
    param: true,
  },
  {
    id: 'title',
    title: '類型名稱',
    show: true,
  },
];

export const typeFieldList: FieldItem[] = [
  {
    id: 1,
    type: 'text',
    title: 'title',
    label: '類型',
    readonly: false,
    required: true,
  },
];

// About 計畫介紹
export const aboutColList: ColItem[] = [
  {
    id: 'id',
    title: '觀測項目id',
    show: true,
    param: true,
  },
  {
    id: 'type',
    title: '觀測類型',
    show: true,
    space: 'nowrap',
    relate: aboutTypeList,
  },
  {
    id: 'name',
    title: '觀測項目名稱',
    show: true,
    space: 'text',
  },
  {
    id: 'image',
    title: '觀測項目介紹圖片',
    show: true,
  },
];

export const aboutAddFieldList: FieldItem[] = [
  {
    id: '1',
    type: 'select',
    title: 'type',
    label: '觀測類型',
    readonly: false,
    required: true,
    options: aboutTypeList,
  },
  {
    id: '2',
    type: 'textarea',
    title: 'name',
    label: '觀測項目名稱',
    readonly: false,
    required: true,
  },
  {
    id: '2-1',
    type: 'textarea',
    title: 'name_en',
    label: '觀測項目名稱 (英文)',
    readonly: false,
    required: true,
  },
  {
    id: '3',
    type: 'textarea',
    title: 'content',
    label: '觀測項目簡介',
    readonly: false,
    required: true,
  },
  {
    id: '3-1',
    type: 'textarea',
    title: 'content_en',
    label: '觀測項目簡介 (英文)',
    readonly: false,
    required: true,
  },
  {
    id: '4',
    type: 'file',
    title: 'image',
    label: '觀測項目介紹圖片',
    readonly: false,
    required: true,
    fileType: 'image',
  },
];

export const aboutEditFieldList: FieldItem[] = [
  {
    id: '1',
    type: 'select',
    title: 'type',
    label: '觀測類型',
    readonly: false,
    required: true,
    options: aboutTypeList,
  },
  {
    id: '2',
    type: 'textarea',
    title: 'name',
    label: '觀測項目名稱',
    readonly: false,
    required: true,
  },
  {
    id: '2-1',
    type: 'textarea',
    title: 'name_en',
    label: '觀測項目名稱 (英文)',
    readonly: false,
    required: true,
  },
  {
    id: '3',
    type: 'textarea',
    title: 'content',
    label: '觀測項目簡介',
    readonly: false,
    required: true,
  },
  {
    id: '3-1',
    type: 'textarea',
    title: 'content_en',
    label: '觀測項目簡介 (英文)',
    readonly: false,
    required: true,
  },
  {
    id: '4',
    type: 'file',
    title: 'image',
    label: '觀測項目介紹圖片',
    readonly: false,
    required: true,
    fileType: 'image',
    hints: [
      {
        id: 'link',
        title: '目前檔案:',
      },
    ],
  },
];

export const aboutAttachmentColList: ColItem[] = [
  {
    id: 'id',
    title: '補充資訊id',
    show: true,
    param: true,
  },
  {
    id: 'aboutId',
    title: '觀測項目名稱',
    show: true,
    space: 'text',
  },
  {
    id: 'name',
    title: '補充資訊名稱',
    show: true,
    space: 'text',
  },
  {
    id: 'content',
    title: '補充資訊簡介',
    show: true,
    space: 'text',
  },
  {
    id: 'file',
    title: '補充資訊檔案',
    show: true,
  },
  {
    id: 'image',
    title: '補充資訊圖片',
    show: true,
  },
];

export const aboutAttachmentAddFieldList: FieldItem[] = [
  {
    id: '1',
    type: 'select',
    title: 'aboutId',
    label: '計畫介紹名稱',
    readonly: false,
    required: true,
  },
  {
    id: '2',
    type: 'textarea',
    title: 'name',
    label: '補充資訊名稱',
    readonly: false,
    required: true,
  },
  {
    id: '2-1',
    type: 'textarea',
    title: 'name_en',
    label: '補充資訊名稱 (英文)',
    readonly: false,
    required: true,
  },
  {
    id: '3',
    type: 'textarea',
    title: 'content',
    label: '補充資訊簡介',
    readonly: false,
    required: true,
  },
  {
    id: '3-1',
    type: 'textarea',
    title: 'content_en',
    label: '補充資訊簡介 (英文)',
    readonly: false,
    required: true,
  },
  {
    id: '4',
    type: 'file',
    title: 'file',
    label: '補充資訊檔案',
    readonly: false,
    required: true,
  },
  {
    id: '5',
    type: 'file',
    title: 'image',
    label: '補充資訊圖片',
    readonly: false,
    required: true,
    fileType: 'image',
  },
];

export const aboutAttachmentEditFieldList: FieldItem[] = [
  {
    id: '1',
    type: 'select',
    title: 'aboutId',
    label: '計畫介紹名稱',
    readonly: false,
    required: true,
  },
  {
    id: '2',
    type: 'textarea',
    title: 'name',
    label: '補充資訊名稱',
    readonly: false,
    required: true,
  },
  {
    id: '2-1',
    type: 'textarea',
    title: 'name_en',
    label: '補充資訊名稱 (英文)',
    readonly: false,
    required: true,
  },
  {
    id: '3',
    type: 'textarea',
    title: 'content',
    label: '補充資訊簡介',
    readonly: false,
    required: true,
  },
  {
    id: '3-1',
    type: 'textarea',
    title: 'content_en',
    label: '補充資訊簡介 (英文)',
    readonly: false,
    required: true,
  },
  {
    id: '4',
    type: 'file',
    title: 'file',
    label: '補充資訊檔案',
    readonly: false,
    required: true,
    hints: [
      {
        id: 'file',
        title: '目前檔案:',
      },
    ],
  },
  {
    id: '5',
    type: 'file',
    title: 'image',
    label: '補充資訊圖片',
    readonly: false,
    required: true,
    fileType: 'image',
    hints: [
      {
        id: 'link',
        title: '目前檔案:',
      },
    ],
  },
];

// Contact 聯絡我們
export const contactColList: ColItem[] = [
  {
    id: 'id',
    title: '人員id',
    show: true,
    param: true,
  },
  {
    id: 'type',
    title: '人員類型',
    show: true,
    space: 'nowrap',
    relate: contactTypeList,
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
    space: 'nowrap',
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

export const contactAddFieldList: FieldItem[] = [
  {
    id: '1',
    type: 'select',
    title: 'type',
    label: '類別',
    readonly: false,
    required: true,
    options: contactTypeList,
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
    id: '2-1',
    type: 'text',
    title: 'name_en',
    label: '姓名 (英文)',
    readonly: false,
    required: false,
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
    id: '3-1',
    type: 'text',
    title: 'unit_en',
    label: '單位 (英文)',
    readonly: false,
    required: false,
  },
  {
    id: '4',
    type: 'textarea',
    title: 'content',
    label: '內容',
    readonly: false,
    required: true,
  },
  {
    id: '4-1',
    type: 'textarea',
    title: 'content_en',
    label: '內容 (英文)',
    readonly: false,
    required: false,
  },
  {
    id: 5,
    type: 'email',
    title: 'contact',
    label: '聯絡方式',
    readonly: false,
    required: false,
  },
  {
    id: 6,
    type: 'file',
    title: 'image',
    label: '照片',
    readonly: false,
    required: false,
    fileType: 'image',
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
    options: contactTypeList,
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
    id: '2-1',
    type: 'text',
    title: 'name_en',
    label: '姓名 (英文)',
    readonly: false,
    required: false,
  },
  {
    id: '3',
    type: 'text',
    title: 'unit',
    label: '單位',
    readonly: false,
    required: false,
  },
  {
    id: '3-1',
    type: 'text',
    title: 'unit_en',
    label: '單位 (英文)',
    readonly: false,
    required: false,
  },
  {
    id: '4',
    type: 'textarea',
    title: 'content',
    label: '內容',
    readonly: false,
    required: true,
  },
  {
    id: '4-1',
    type: 'textarea',
    title: 'content_en',
    label: '內容 (英文)',
    readonly: false,
    required: false,
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
    fileType: 'image',
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
    title: '類型id',
    show: true,
    param: true,
  },
  {
    id: 'type_id',
    title: '問題類型',
    show: true,
  },
  {
    id: 'question',
    title: '問題',
    show: true,
    space: 'text',
  },
  {
    id: 'answer',
    title: '答案',
    show: true,
    space: 'text',
  },
];

export const qaFieldList: FieldItem[] = [
  {
    id: '1',
    type: 'select',
    title: 'type_id',
    label: '類型',
    readonly: false,
    required: true,
  },
  {
    id: '2',
    type: 'textarea',
    title: 'question',
    label: '問題',
    readonly: false,
    required: true,
  },
  {
    id: '2-1',
    type: 'textarea',
    title: 'question_en',
    label: '問題 (英文)',
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
  {
    id: '3-1',
    type: 'textarea',
    title: 'answer_en',
    label: '答案 (英文)',
    readonly: false,
    required: true,
  },
];

export const qaTypeFieldList: FieldItem[] = [
  {
    id: '1',
    type: 'text',
    title: 'title',
    label: '類型',
    readonly: false,
    required: true,
  },
  {
    id: '1-1',
    type: 'text',
    title: 'title_en',
    label: '類型（英文）',
    readonly: false,
    required: true,
  },
];

// News 最新消息
export const newsColList: ColItem[] = [
  {
    id: 'id',
    title: '消息id',
    show: true,
    param: true,
  },
  {
    id: 'type',
    title: '消息類型',
    show: true,
    space: 'nowrap',
    // relate: newsTypeList,
  },
  {
    id: 'title',
    title: '主旨',
    show: true,
    space: 'text',
  },
  {
    id: 'content',
    title: '內文',
    show: true,
    space: 'text',
  },
  {
    id: 'cover',
    title: '封面圖片',
    show: false,
  },
  {
    id: 'newsDate',
    title: '消息日期',
    show: true,
    space: 'date',
  },
  {
    id: 'user',
    title: '建立者',
    show: false,
  },
  {
    id: 'user_email',
    title: '建立者帳號',
    show: false,
  },
  {
    id: 'images',
    title: '圖片連結',
    show: false,
  },
  {
    id: 'attachments',
    title: '附件檔案連結',
    show: false,
  },
];

export const newsAddFieldList: FieldItem[] = [
  {
    id: 1,
    type: 'checkbox',
    title: 'type',
    label: '消息類型',
    readonly: false,
    required: false,
  },
  {
    id: 2,
    type: 'text',
    title: 'title',
    label: '主旨',
    readonly: false,
    required: true,
  },
  {
    id: 3,
    type: 'textarea',
    title: 'content',
    label: '內文',
    readonly: false,
    required: false,
  },
  {
    id: 4,
    type: 'file',
    title: 'cover',
    label: '封面圖片',
    readonly: false,
    required: true,
    fileType: 'image',
  },
  {
    id: 5,
    type: 'file',
    title: 'images',
    label: '圖片連結',
    readonly: false,
    required: false,
    multiple: true,
    fileType: 'image',
  },
  {
    id: 6,
    type: 'file',
    title: 'files',
    label: '附件檔案連結',
    readonly: false,
    required: false,
    multiple: true,
  },
  {
    id: 7,
    type: 'date',
    title: 'newsDate',
    label: '建立日期',
    readonly: false,
    required: false,
  },
];

export const newsEditFieldList: FieldItem[] = [
  {
    id: 1,
    type: 'checkbox',
    title: 'type',
    label: '消息類型',
    readonly: false,
    required: false,
  },
  {
    id: 2,
    type: 'text',
    title: 'title',
    label: '主旨',
    readonly: false,
    required: true,
  },
  {
    id: 3,
    type: 'textarea',
    title: 'content',
    label: '內文',
    readonly: false,
    required: false,
  },
  {
    id: 4,
    type: 'file',
    title: 'cover',
    label: '封面圖片',
    readonly: false,
    required: true,
    fileType: 'image',
    hints: [
      {
        id: 'cover',
        title: '目前檔案:',
      },
    ],
  },
  {
    id: 5,
    type: 'file',
    title: 'images',
    label: '圖片連結',
    readonly: false,
    required: false,
    multiple: true,
    fileType: 'image',
    hints: [
      {
        id: 'images',
        title: '目前檔案:',
      },
    ],
  },
  {
    id: 6,
    type: 'file',
    title: 'files',
    label: '附件檔案連結',
    readonly: false,
    required: false,
    multiple: true,
    hints: [
      {
        id: 'files',
        title: '目前檔案:',
      },
    ],
  },
  {
    id: 7,
    type: 'date',
    title: 'newsDate',
    label: '建立日期',
    readonly: false,
    required: false,
  },
];

// Literature 相關文獻
export const literatureColList: ColItem[] = [
  {
    id: 'id',
    title: '文獻id',
    show: true,
    param: true,
  },
  {
    id: 'name',
    title: '文獻名稱',
    show: true,
  },
];

export const literatureFieldList: FieldItem[] = [
  {
    id: 1,
    type: 'text',
    title: 'name',
    label: '文獻名稱',
    readonly: false,
    required: true,
  },
];

// FormLink 常見表單與連結
export const formLinkColList: ColItem[] = [
  {
    id: 'id',
    title: '資源id',
    show: true,
    param: true,
  },
  {
    id: 'name',
    title: '資源名稱',
    show: true,
    space: 'text',
  },
  // {
  //   id: 'link',
  //   title: '資源連結',
  //   show: true,
  //   space: 'text',
  // },
  // {
  //   id: 'attachments',
  //   title: '資源附件檔案',
  //   show: false,
  //   space: 'text',
  // },
  {
    id: 'created_at',
    title: '建立日期',
    show: true,
    space: 'date',
  },
];

export const formLinkAddFieldList: FieldItem[] = [
  {
    id: 1,
    type: 'text',
    title: 'name',
    label: '資源名稱',
    readonly: false,
    required: true,
  },
  {
    id: 2,
    type: 'text',
    title: 'link',
    label: '資源連結',
    readonly: false,
    required: false,
  },
  {
    id: 3,
    type: 'file',
    title: 'files',
    label: '資源附件檔案',
    readonly: false,
    required: false,
    multiple: true,
  },
];

export const formLinkEditFieldList: FieldItem[] = [
  {
    id: 1,
    type: 'text',
    title: 'name',
    label: '資源名稱',
    readonly: false,
    required: true,
  },
  {
    id: 2,
    type: 'text',
    title: 'link',
    label: '資源連結',
    readonly: false,
    required: false,
  },
  {
    id: 3,
    type: 'file',
    title: 'files',
    label: '資源附件檔案',
    readonly: false,
    required: false,
    multiple: true,
    hints: [
      {
        id: 'files',
        title: '目前檔案:',
      },
    ],
  },
];

// Download 資料下載申請資訊
export const downloadStatusList: TypeItem[] = [
  {
    id: 1,
    title: '檔案處理中',
  },
  {
    id: 2,
    title: '檔案就緒',
  },
  {
    id: 3,
    title: '過期(檔案保存一年)',
  },
];

export const downloadUnitRoleList: TypeItem[] = [
  {
    id: 1,
    title: '研究人員',
  },
  {
    id: 2,
    title: '公家機關單位',
  },
  {
    id: 3,
    title: '教師',
  },
  {
    id: 4,
    title: '學生',
  },
  {
    id: 5,
    title: '一般大眾',
  },
];

export const downloadColList: ColItem[] = [
  // {
  //   id: 'id',
  //   title: '申請id',
  //   show: true,
  // },
  {
    id: 'email',
    title: '下載者信箱',
    show: true,
  },
  {
    id: 'role',
    title: '下載者身份',
    show: true,
  },
  {
    id: 'content',
    title: '下載原因',
    show: true,
  },
  {
    id: 'filename',
    title: '下載檔案連結',
    show: true,
  },
  // {
  //   id: 'status',
  //   title: '狀態',
  //   show: true,
  //   relate: downloadStatusList,
  // },
  // {
  //   id: 'submitted',
  //   title: '請求日期',
  //   show: true,
  // },
  // {
  //   id: 'expired',
  //   title: '過期日期',
  //   show: true,
  // },
];

export const downloadRecordColList: ColItem[] = [
  {
    id: 'filename',
    title: '檔案名稱',
    show: true,
  },
  {
    id: 'time',
    title: '下載時間',
    show: true,
  },
];

export const downloadList: DownloadItem[] = [
  {
    id: 1,
    file: 'test.pdf',
    user_email: 'email@email.com',
    unit_role: 1,
    purpose: '...',
    status: 1,
    submitted: '2023-05-26',
    expired: '2023-05-26',
  },
];

// User 個人帳號管理
export const userColList: ColItem[] = [
  {
    id: 'id',
    title: 'id',
    show: true,
    param: true,
  },
  {
    id: 'email',
    title: '帳號',
    show: true,
  },
  {
    id: 'last_name',
    title: '姓',
    show: true,
  },
  {
    id: 'first_name',
    title: '名',
    show: true,
  },
  {
    id: 'role',
    title: '角色',
    show: true,
  },
];

export const userFieldList: FieldItem[] = [
  {
    id: 1,
    type: 'email',
    title: 'email',
    label: '帳號',
    readonly: true,
    required: true,
  },
  {
    id: 2,
    type: 'text',
    title: 'first_name',
    label: '姓',
    readonly: false,
    required: true,
  },
  {
    id: 3,
    type: 'text',
    title: 'last_name',
    label: '名',
    readonly: false,
    required: true,
  },
  {
    id: 4,
    type: 'text',
    title: 'role',
    label: '角色',
    readonly: false,
    required: true,
  },
];

// Social Interview Data 社會面訪談資料
export const socialInterviewDataColList: ColItem[] = [
  {
    id: 'id',
    title: 'id',
    show: true,
    param: true,
  },
];

export const socialInterviewDataFieldList: FieldItem[] = [];
