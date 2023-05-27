export type FinalItem = {
  id: number | string;
  title: string;
  link: string;
};

export type FinalMenuItem = {
  id: number | string;
  title: string;
  link: string;
  list?: FinalItem[];
};

export type SubMenuItem = {
  id: number | string;
  title: string;
  link: string;
  list?: FinalMenuItem[];
};

export type MenuItem = {
  id: number | string;
  title: string;
  type?: string;
  link: string;
  list?: SubMenuItem[];
};

export type LogoItem = {
  id: number | string;
  img: string;
  title: string;
  width?: string;
  link: string;
};
export type SociIconItem = {
  id: number | string;
  img: JSX.Element;
  link: string;
};
export type FooterSubMenuItem = {
  id: number | string;
  title?: string;
  subtitle?: string;
  link: string;
};
export type FooterMenuItem = {
  id: number | string;
  title?: string;
  list: FooterSubMenuItem[];
};

export type BannerData = {
  title: string;
  en: string[];
  maskImg?: boolean;
  bgImg?: string;
};
