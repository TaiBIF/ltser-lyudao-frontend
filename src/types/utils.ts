import { ContactItem } from 'types/contact';
import { LiteratureItem } from 'types/literature';
import { QAItem, NewsItem, DownloadItem } from 'types/dashboard';
import { FormLinkItem } from 'types/formLink';
import { EcoSearchItem } from 'types/siteData';
import { ResetPasswordItem } from 'types/auth';

export type TypeItem = {
  id?: number | string;
  title: string;
};

export type ColItem = {
  id: string;
  title: string;
  show: boolean;
  param?: boolean;
  space?: string;
  relate?: TypeItem[];
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
  cover?: string;
  fileType?: string;
};

export type RelateState = { type?: string };

export type ItemTypes =
  | ContactItem
  | QAItem
  | TypeItem
  | NewsItem
  | LiteratureItem
  | FormLinkItem
  | DownloadItem
  | EcoSearchItem;
