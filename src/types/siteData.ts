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

export type FilterItem = {
  site: string;
  depth: string;
};

export type SelectItem = {
  id: number | string;
  title: string;
};

export type InterviewItem = {
  id?: number | string;
  date: string;
  title: string;
  content: string;
  target: number | string;
  type: number | string;
  image: string;
  tags: string[];
};

export type CategoryItem = {
  id?: number;
  theme: string;
  category: string;
  content?: string;
};

export type BookItem = {
  id?: number;
  theme: string;
  title: string;
  abstract: string;
  author: string;
  publish_date: string;
  url: string;
  publisher: string;
  isbn_issn: string;
};

export type LiteratureItem = {
  id?: number;
  theme?: string;
  title: string;
  abstract?: string;
  author?: string;
  publish_date?: string;
  citation?: string;
  url: string;
};
