import { ContactItem } from 'types/contact';
import { LiteratureItem } from 'types/literature';
import { TypeItem } from 'types/common';
import { FormLinkItem } from 'types/formLink';

export type TabItem = {
  id: string;
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
  id: string | number;
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
  readonly: boolean;
  required: boolean;
  hints?: FieldHintItem[];
  multiple?: boolean;
  cover?: string;
};

export type QAItem = {
  id?: number | string;
  type: number | string;
  question: string;
  answer: string;
};

type NewsAttachmentItem = {
  id: string | number;
  title: string;
  file: string;
};

type NewsImageItem = {
  id: string | number;
  title: string;
  link: string;
  cover: boolean;
};

export type NewsItem = {
  id?: number | string;
  type: number[];
  userId?: string;
  title: string;
  content: string;
  image: string[];
  // attachments: NewsAttachmentItem[];
  attachments: string[];
  date: string;
  cover: string;
};

export type DownloadItem = {
  id: number | string;
  file: string;
  user_email: string;
  unit_role: number | string;
  purpose: string;
  status: number | string;
  submitted: string;
  expired: string;
};

export type ItemTypes =
  | ContactItem
  | QAItem
  | TypeItem
  | NewsItem
  | LiteratureItem
  | FormLinkItem
  | DownloadItem;
