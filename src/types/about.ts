export type AttachmentNameItem = {
  id: number | string;
  title: string;
  list?: (number | string)[];
};

export type AboutItem = {
  id?: number | string;
  type: number | string;
  name: string;
  content: string;
  image: string;
  attachmentName?: (number | string)[];
  created?: string;
  modified?: string;
  typeTitle?: string;
};
