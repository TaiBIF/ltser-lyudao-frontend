export type NewsItem = {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  link: string;
};

export type CategoryItem = {
  id: string;
  title: string;
  colorClass: string;
};

export type EnterState = {
  s2: boolean;
  s3: boolean;
  s4: boolean;
};

export type TabItem = {
  id: string;
  title: string;
  subtitle: [string, string];
  link: string;
};
