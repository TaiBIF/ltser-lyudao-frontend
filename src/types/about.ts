export type AttachmentItem = {
  id: number | string;
  name: string;
  content: string;
  file: string;
  image: string;
  created_at: string;
  updated_at: string;
};

export type AboutItem = {
  id?: number | string;
  aboutId?: number;
  type: number | string;
  name: string;
  content: string;
  image?: string;
  file?: string;
};
