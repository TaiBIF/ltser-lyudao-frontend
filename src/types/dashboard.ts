import { ContactItem } from 'types/contact';
import { LiteratureItem } from 'types/literature';
import { TypeItem } from 'types/common';

export type TabItem = {
  id: string;
  title: string;
};

export type ColItem = {
  id: string;
  title: string;
  show: boolean;
  textarea?: boolean;
};

export type FieldOptionItem = {
  id: number;
  title: string;
};

export type FieldHintItem = {
  id: string;
  title: string;
};

export type FieldItem = {
  id: number;
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
  id?: number;
  type: number;
  question: string;
  answer: string;
};

type NewsAttachmentItem = {
  id: number;
  title: string;
  file: string;
};

type NewsImageItem = {
  id: number;
  title: string;
  link: string;
  cover: boolean;
};

export type NewsItem = {
  id?: number;
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

export type ItemTypes =
  | ContactItem
  | QAItem
  | TypeItem
  | NewsItem
  | LiteratureItem;
