export type AsideItem = {
  id: number;
  title: string;
  link?: string;
  list?: AsideItem[];
};

export type EcoSearchItem = {
  id?: number | string;
  site: string;
  researcher: string;
  scientificName: string;
  cnName: string;
  number: number;
};

export type ShowState = {
  downloadPopup: boolean;
};

export type FilterItem = {
  site: string;
};

export type InterviewItem = {
  id?: number | string;
  date?: string;
  title: string;
  content: string;
  target: string;
  type: number | string;
  image: string;
  tags: string[];
};
