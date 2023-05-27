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
