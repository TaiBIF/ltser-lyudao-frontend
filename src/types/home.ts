export type NewsItem = {
  id: number;
  title: string;
  content: string;
  category: number;
  date: string;
  link: string;
};

export type CategoryItem = {
  id: number;
  title: string;
  colorClass: string;
};

export type EnterState = {
  s2: boolean;
  s3: boolean;
  s4: boolean;
};

export type TabItem = {
  id: number;
  title: string;
  subtitle: [string, string];
  link: string;
};
