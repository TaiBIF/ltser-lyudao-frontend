export type FinalItem = {
  id: string;
  title: string;
  link: string;
};

export type FinalMenuItem = {
  id: string;
  title: string;
  link: string;
  list?: FinalItem[];
};

export type SubMenuItem = {
  id: string;
  title: string;
  link: string;
  list?: FinalMenuItem[];
};

export type MenuItem = {
  id: string;
  title: string;
  type?: string;
  link: string;
  list?: SubMenuItem[];
};
