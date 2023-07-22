export type NewsImageItem = {
  image: string;
};

export type NewsAttachmentItem = {
  file: string;
};

export type NewsItem = {
  id?: number | string;
  type: (number | string)[];
  title: string;
  content: string;
  newsDate: string;
  user?: number;
  user_email?: string;
  images?: NewsImageItem[];
  attachments?: NewsAttachmentItem[];
};

export type NewsActiveState = {
  type: number | string;
  startDate?: string;
  endDate?: string;
};

export type NewsFilterState = {
  type: number | string;
  startDate: string;
  endDate: string;
};
