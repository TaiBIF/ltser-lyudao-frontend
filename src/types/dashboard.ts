import { ContactItem } from 'types/contact';

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
  id: string;
  title: string;
};

export type FieldHintItem = {
  id: string;
  title: string;
};

export type FieldItem = {
  id: string;
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
  id?: string;
  type: string;
  question: string;
  answer: string;
};

export type TypeItem = {
  id: string;
  title: string;
};

type NewsAttachmentItem = {
  id: string;
  title: string;
  file: string;
};

type NewsImageItem = {
  id: string;
  title: string;
  link: string;
  cover: boolean;
};

export type NewsItem = {
  id?: string;
  type: string[];
  userId?: string;
  title: string;
  content: string;
  image: string[];
  // attachments: NewsAttachmentItem[];
  attachments: string[];
  date: string;
  cover: string;
};

export type ItemTypes = ContactItem | QAItem | TypeItem | NewsItem;
