export type SectionItem = {
  id: number | string;
  title: string;
  content: string;
  imgs?: string[];
};

export type ArticleItem = {
  id: string;
  category: number | string;
  title: string;
  content: string;
  img: string;
  sections?: SectionItem[];
  categoryTitle?: string;
};
