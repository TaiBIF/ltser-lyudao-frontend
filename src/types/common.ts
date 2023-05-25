export type FinalItem = {
  id: number;
  title: string;
  link: string;
};

export type FinalMenuItem = {
  id: number;
  title: string;
  link: string;
  list?: FinalItem[];
};

export type SubMenuItem = {
  id: number;
  title: string;
  link: string;
  list?: FinalMenuItem[];
};

export type MenuItem = {
  id: number;
  title: string;
  type?: string;
  link: string;
  list?: SubMenuItem[];
};

export type TypeItem = {
  id: number;
  title: string;
};

export type BannerData = {
  title: string;
  en: string[];
  maskImg?: boolean;
  bgImg?: string;
};
