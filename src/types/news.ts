export type NewsImageItem = {
  id: string | number;
  title: string;
  cover: boolean;
};

export type NewsItem = {
  id?: number | string;
  type: number | string;
  userId?: string;
  title: string;
  content: string;
  image: (number | string)[];
  attachments?: (number | string)[];
  created?: string;
  modified?: string;
};
