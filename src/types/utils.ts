import { ContactItem } from 'types/contact';
import { LiteratureItem } from 'types/literature';
import { DownloadItem } from 'types/dashboard';
import { FormLinkFormItem, FormLinkItem } from 'types/formLink';
import { EcoSearchItem } from 'types/siteData';
import { NewsImageItem, NewsItem } from 'types/news';
import { QAItem } from 'types/qa';

import { RawItemTypes } from 'types/rawData';
import { RawFieldItem } from 'types/field';
import { SeriesItemTypes } from 'types/series';

export type TypeItem = {
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
  id?: string;
  plan?: string;
  col: string;
  title: string;
  unit?: string;
  data?: any;
};

export type SiteObservationItem = {
  id: string;
  plan: string;
  title: string;
};

export type SelectItem = {
  id: string;
  title: string;
  plan: string;
};

export type RelateTypes = TypeItem | NewsImageItem | AttachmentItem;

export type RelateListTypes = ColItem | FieldItem;

export type ContextItem = {
  id: string;
  sites: string[];
  getSites?: any;
  detail?: any;
  getDetail?: any;
  raws?: RawItemTypes[];
  getRaws?: any;
  fields?: RawFieldItem[];
  getFields?: any;
  series?: SeriesItemTypes[];
  getSeries?: any;
};

export type ItemTypes =
  | ContactItem
  | QAItem
  | TypeItem
  | NewsItem
  | LiteratureItem
  | FormLinkItem
  | DownloadItem;

export type PaginationDataItem = {
  currentPage: number;
  recordsPerPage: number;
  totalPages: number;
  totalRecords: number;
};

export type AttachmentsItem = {
  file: string;
};
