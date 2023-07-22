import { AttachmentsItem } from './utils';

export type FormLinkItem = {
  id?: string | number;
  name: string;
  link?: string;
  formLinkAttachments: AttachmentsItem[];
  created_at?: string;
};

export type FormLinkFormItem = {
  id?: string | number;
  name: string;
  link?: string;
  files?: any;
  created_at?: string;
};
