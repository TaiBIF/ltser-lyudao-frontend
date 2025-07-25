import { LangItem } from 'types/utils';

export const defaultPaginationData = {
  currentPage: 0,
  recordsPerPage: 0,
  totalPages: 0,
  totalRecords: 0,
  nextCursor: '',
};

export const languageList: LangItem[] = [
  {
    id: 'en',
    title: 'English',
    hint: 'Language set.',
  },
  {
    id: 'zh-tw',
    title: '繁體中文',
    hint: '語言已設定。',
  },
];
