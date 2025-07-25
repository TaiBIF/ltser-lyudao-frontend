import { ContactItem } from 'types/contact';
import { LiteratureItem } from 'types/literature';
import { DownloadItem } from 'types/dashboard';
import { FormLinkFormItem, FormLinkItem } from 'types/formLink';
import { EcoSearchItem } from 'types/siteData';
import { NewsFormItem, NewsImageItem, NewsItem } from 'types/news';
import { QAItem } from 'types/qa';

import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';
import { SeriesItemTypes } from 'types/series';
import { UserItem } from './user';
import { VisitorItem } from 'types/visitors';

export type TypeItem = {
  [key: string]: any;
  id?: number | string;
  title: string;
  colorClass?: string;
};

export type FieldItem = {
  id: string | number;
  type: string;
  title: string;
  label: string;
  options?: RelateTypes[];
  readonly?: boolean;
  required?: boolean;
  hints?: RelateTypes[];
  multiple?: boolean;
  cover?: number | string;
  fileType?: string;
};

export type RelateState = { type?: string };

export type AttachmentItem = {
  id: number;
  type: string;
  title?: string;
  content?: string;
};

export interface FileItem {
  id: number;
  file: File;
  result: string | ArrayBuffer | null;
  cover: boolean;
}

export type ColItem = {
  id: string;
  title: string;
  show?: boolean;
  param?: boolean;
  space?: string;
  relate?: RelateTypes[];
};

export type ObservationItem = {
  [key: string]: any;
  id: string;
  type?: string;
  plan?: string;
  col: string;
  title: string;
  unit?: string;
  data?: any;
};

export type SiteObservationItem = {
  id: string;
  type: string;
  plan: string;
  title: string;
};

export type SelectItem = {
  id: string;
  type: string;
  title: string;
  plan: string;
  planTitle?: string;
  redirect: boolean | null;
};

export type RelateTypes = TypeItem | AttachmentItem | any;

export type RelateListTypes = ColItem | FieldItem;

export type ContextItem = {
  id: string;
  depositarUrl: string;
  sites?: string[] | null;
  getSites?: any;
  detail?: any;
  getDetail?: any;
  raws?: RawItemTypes[] | null;
  getRaws?: any;
  fields?: RawFieldItem[];
  getFields?: any;
  series?: SeriesItemTypes[] | null;
  getSeries?: any;
  roseSeries?: any;
  tempPrecipSeries?: any;
  records?: any;
};

export type ItemTypes =
  | ContactItem
  | QAItem
  | TypeItem
  | NewsItem
  | NewsFormItem
  | LiteratureItem
  | FormLinkItem
  | DownloadItem
  | UserItem
  | VisitorItem;

export type PaginationDataItem = {
  currentPage: number;
  recordsPerPage: number;
  totalPages: number;
  totalRecords: number;
  nextCursor: string | null;
};

export type AttachmentsItem = {
  file: string;
};

export type ImagesItem = {
  image: string;
};

export type ShowState = {
  downloadPopup: boolean;
};

export type LangItem = {
  id: string;
  title: string;
  hint: string;
};
