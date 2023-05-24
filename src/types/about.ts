export type SectionItem = {
  id: string;
  title: string;
  content: string;
  imgs?: string[];
};

export type ArticleItem = {
  id: string;
  category: string;
  title: string;
  content: string;
  img: string;
  sections?: SectionItem[];
};
