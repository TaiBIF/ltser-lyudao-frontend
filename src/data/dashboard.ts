import { TypeItem, FieldItem, ColItem } from 'types/utils';
import { TabItem, DownloadItem } from 'types/dashboard';
import { newsTypeList, newsImageList, newsAttachmentList } from 'data/news';
import { contactTypeList } from 'data/contact';
import { aboutTypeList, attachmentNameList } from 'data/about';
import { qaTypeList } from 'data/qa';

// Tabs 左側邊欄頁籤
export const tabList: TabItem[] = [
  {
    id: 'about',
    title: '計畫介紹',
  },
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
  {
    id: 'related-literature',
    title: '相關文獻',
  },
  {
    id: 'form-link',
    title: '常見表單與連結',
  },
  {
    id: 'download',
    title: '資料下載申請資訊',
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
    id: 'content',
    title: '觀測項目簡介',
    show: true,
    space: 'text',
  },
  {
    id: 'image',
    title: '觀測項目介紹圖片連結',
    show: true,
  },
  {
    id: 'attachmentsName',
    title: '補充資訊名稱',
    show: false,
  },
  {
    id: 'attachments',
    title: '補充資訊',
    show: false,
  },
  {
    id: 'created',
    title: '建立日期',
    show: true,
    space: 'date',
  },
  {
    id: 'modified',
    title: '更新日期',
    show: true,
    space: 'date',
  },
];

export const aboutFieldList: FieldItem[] = [
  {
    id: 1,
    type: 'select',
    title: 'type',
    label: '觀測類型',
    readonly: false,
    required: true,
    options: aboutTypeList,
  },
  {
    id: 2,
    type: 'text',
    title: 'name',
    label: '觀測項目名稱',
    readonly: false,
    required: true,
  },
  {
    id: 3,
    type: 'text',
    title: 'content',
    label: '觀測項目簡介',
    readonly: false,
    required: true,
  },
  {
    id: 5,
    type: 'file',
    title: 'image',
    label: '觀測項目介紹圖片連結',
    readonly: false,
    required: true,
  },
  {
    id: 6,
    type: 'select',
    title: 'attachmentName',
    label: '補充資訊名稱',
    readonly: false,
    required: false,
    options: attachmentNameList,
    multiple: true,
  },
  {
    id: 7,
    type: 'file',
    title: 'attachments',
    label: '補充資訊',
    readonly: false,
    required: false,
    multiple: true,
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
    id: 1,
    type: 'select',
    title: 'type',
    label: '類別',
    readonly: false,
    required: true,
    options: contactTypeList,
  },
  {
    id: 2,
    type: 'text',
    title: 'name',
    label: '姓名',
    readonly: false,
    required: true,
  },
  {
    id: 3,
    type: 'text',
    title: 'unit',
    label: '單位',
    readonly: false,
    required: true,
  },
  {
    id: 4,
    type: 'text',
    title: 'content',
    label: '內容',
    readonly: false,
    required: true,
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
    id: 1,
    type: 'select',
    title: 'type',
    label: '類別',
    readonly: false,
    required: true,
    options: contactTypeList,
  },
  {
    id: 2,
    type: 'text',
    title: 'name',
    label: '姓名',
    readonly: false,
    required: true,
  },
  {
    id: 3,
    type: 'text',
    title: 'unit',
    label: '單位',
    readonly: false,
    required: true,
  },
  {
    id: 4,
    type: 'text',
    title: 'content',
    label: '內容',
    readonly: false,
    required: true,
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
    id: 1,
    type: 'select',
    title: 'type_id',
    label: '類型',
    readonly: false,
    required: true,
  },
  {
    id: 2,
    type: 'text',
    title: 'question',
    label: '問題',
    readonly: false,
    required: true,
  },
  {
    id: 3,
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
    param: true,
  },
  {
    id: 'type',
    title: '消息類型',
    show: true,
    relate: newsTypeList,
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
    space: 'text',
  },
  {
    id: 'content',
    title: '內文',
    show: true,
    space: 'text',
  },
  // {
  //   id: 'cover',
  //   title: '封面圖片',
  //   show: true,
  // },
  {
    id: 'image',
    title: '圖片連結',
    show: true,
    relate: newsImageList,
  },
  {
    id: 'attachments',
    title: '附件檔案連結',
    show: true,
    relate: newsAttachmentList,
  },
  {
    id: 'modified',
    title: '消息日期',
    show: true,
    space: 'date',
  },
];

export const newsFieldList: FieldItem[] = [
  {
    id: 1,
    type: 'checkbox',
    title: 'type',
    label: '消息類型',
    readonly: false,
    required: true,
    options: newsTypeList,
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
    title: 'image',
    label: '圖片連結',
    readonly: false,
    required: false,
    multiple: true,
    fileType: 'image',
  },
  {
    id: 5,
    type: 'file',
    title: 'attachments',
    label: '附件檔案連結',
    readonly: false,
    required: false,
    multiple: true,
  },
  {
    id: 6,
    type: 'date',
    title: 'modified',
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
  {
    id: 'link',
    title: '資源連結',
    show: true,
    space: 'text',
  },
  {
    id: 'formLinkAttachments',
    title: '資源附件檔案',
    show: false,
    space: 'text',
  },
  {
    id: 'created_at',
    title: '建立日期',
    show: true,
    space: 'date',
  },
];

export const formLinkFieldList: FieldItem[] = [
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
  {
    id: 'id',
    title: '申請id',
    show: true,
  },
  {
    id: 'file',
    title: '下載檔案連結',
    show: true,
  },
  {
    id: 'user_email',
    title: '下載者信箱',
    show: true,
  },
  {
    id: 'unit_role',
    title: '下載者身份',
    show: true,
    relate: downloadUnitRoleList,
  },
  {
    id: 'purpose',
    title: '下載原因',
    show: true,
  },
  {
    id: 'status',
    title: '狀態',
    show: true,
    relate: downloadStatusList,
  },
  {
    id: 'submitted',
    title: '請求日期',
    show: true,
  },
  {
    id: 'expired',
    title: '過期日期',
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
