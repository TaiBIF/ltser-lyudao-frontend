import { AttachmentsItem } from 'types/utils';

export type FormLinkItem = {
  [key: string]: any;
  id?: string | number;
  name: string;
  link?: string;
  attachments: AttachmentsItem[];
  created_at?: string;
};

export type FormLinkFormItem = {
  id?: string | number;
  name: string;
  link?: string;
  files?: any;
  created_at?: string;
};
