export type NewsAttachmentItem = {
  id: string | number;
  name: string;
};

export type NewsImageItem = {
  id: string | number;
  name: string;
  cover: boolean;
};

export type NewsItem = {
  id?: number | string;
  type: number | string;
  userId?: string;
  title: string;
  content: string;
  image: NewsImageItem[];
  attachments: NewsAttachmentItem[];
  created?: string;
  modified?: string;
};
