export type SectionItem = {
  id: number;
  title: string;
  content: string;
  imgs?: string[];
};

export type ArticleItem = {
  id: string;
  category: number;
  title: string;
  content: string;
  img: string;
  sections?: SectionItem[];
  categoryTitle?: string;
};
