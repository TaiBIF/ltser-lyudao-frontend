export type NewsItem = {
  id: number | string;
  title: string;
  content: string;
  category: number | string;
  date: string;
  link: string;
};

export type CategoryItem = {
  id: number | string;
  title: string;
  colorClass: string;
};

export type EnterState = {
  s2: boolean;
  s3: boolean;
  s4: boolean;
};

export type TabItem = {
  id: number | string;
  title: string;
  subtitle: [string, string];
  link: string;
};
