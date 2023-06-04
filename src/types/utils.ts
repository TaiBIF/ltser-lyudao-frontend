import { ContactItem } from 'types/contact';
import { LiteratureItem } from 'types/literature';
import { QAItem, DownloadItem } from 'types/dashboard';
import { FormLinkItem } from 'types/formLink';
import { EcoSearchItem } from 'types/siteData';
import { NewsImageItem, NewsItem } from 'types/news';

export type TypeItem = {
  id?: number | string;
  title: string;
  colorClass?: string;
};

export type FieldOptionItem = {
  id?: string | number;
  title: string;
};

export type FieldHintItem = {
  id: string;
  title: string;
};

export type FieldItem = {
  id: string | number;
  type: string;
  title: string;
  label: string;
  options?: FieldOptionItem[];
  readonly?: boolean;
  required?: boolean;
  hints?: FieldHintItem[];
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

export type ItemTypes =
  | ContactItem
  | QAItem
  | TypeItem
  | NewsItem
  | LiteratureItem
  | FormLinkItem
  | DownloadItem
  | EcoSearchItem;

export type RelateTypes = TypeItem | NewsImageItem | AttachmentItem;

export type ColItem = {
  id: string;
  title: string;
  show: boolean;
  param?: boolean;
  space?: string;
  relate?: RelateTypes[];
};
