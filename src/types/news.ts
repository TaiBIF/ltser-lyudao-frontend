export type NewsImageItem = {
  image: string;
};

export type NewsAttachmentItem = {
  file: string;
};

export type NewsItem = {
  [key: string]: any;
  id?: number | string;
  type: (number | string)[];
  title: string;
  content: string;
  cover: string;
  newsDate: string;
  user?: number;
  user_email?: string;
  images?: NewsImageItem[];
  attachments?: NewsAttachmentItem[];
};

export type NewsFormItem = {
  [key: string]: any;
  type: (number | string)[];
  title: string;
  content: string;
  cover: string;
  newsDate: string;
  user: number;
  images?: NewsImageItem[];
  files?: NewsAttachmentItem[];
};

export type NewsFilterItem = {
  type: number | string | null;
  startDate?: string;
  endDate?: string;
};

export type HomeNewsFilterItem = {
  type: number | string;
};

export type DateFilterItem = {
  startDate: string | undefined;
  endDate: string | undefined;
};
