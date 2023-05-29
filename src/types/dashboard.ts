import { ContactItem } from 'types/contact';
import { LiteratureItem } from 'types/literature';
import { TypeItem } from 'types/common';
import { FormLinkItem } from 'types/formLink';
import { NewsItem } from 'types/news';

export type TabItem = {
  id: string;
  title: string;
};

export type QAItem = {
  id?: number | string;
  type: number | string;
  question: string;
  answer: string;
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
