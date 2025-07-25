export type ContactItem = {
  [key: string]: any;
  id?: number | string;
  type: number | string;
  name: string;
  unit: string;
  content: string;
  contact?: string;
  image: string | File;
};
