export type ContactTypeItem = {
  id: string;
  title: string;
};

export type ContactItem = {
  id?: string;
  type: string;
  name: string;
  unit: string;
  content: string;
  contact?: string;
  image: string;
};
