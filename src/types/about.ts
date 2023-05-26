export type AttachmentItem = {
  id: number | string;
  type: string;
  content: string;
};

export type SectionItem = {
  id: number | string;
  attachments_name: string;
  attachments: AttachmentItem[];
};

export type AboutItem = {
  id: number | string;
  type: number | string;
  name: string;
  content: string;
  image: string;
  sections?: SectionItem[];
  created?: string;
  modified?: string;
  typeTitle?: string;
};
